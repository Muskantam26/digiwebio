// In-memory sliding window rate-limiter for Next.js serverless route protection

interface RateLimitTracker {
  count: number;
  resetTime: number;
}

const ipMap = new Map<string, RateLimitTracker>();

/**
 * Basic rate limiter allowing max Requests within a time window (in ms)
 */
export function checkRateLimit(
  ip: string,
  limit: number = 5,
  windowMs: number = 60 * 1000
): { success: boolean; limit: number; remaining: number } {
  const now = Date.now();
  const tracker = ipMap.get(ip);

  // Clean up expired entries periodically
  if (ipMap.size > 1000) {
    for (const [k, v] of ipMap.entries()) {
      if (now > v.resetTime) {
        ipMap.delete(k);
      }
    }
  }

  if (!tracker || now > tracker.resetTime) {
    ipMap.set(ip, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { success: true, limit, remaining: limit - 1 };
  }

  if (tracker.count >= limit) {
    return { success: false, limit, remaining: 0 };
  }

  tracker.count += 1;
  return { success: true, limit, remaining: limit - tracker.count };
}
