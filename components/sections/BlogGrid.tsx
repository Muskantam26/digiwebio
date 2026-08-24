"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, User } from "lucide-react";
import { BLOG_POSTS_DATA } from "@/data/initialData";
import { BlogPostItem } from "@/types";

export default function BlogGrid({ posts, limit }: { posts?: BlogPostItem[]; limit?: number }) {
  const list = posts && posts.length > 0 ? posts : BLOG_POSTS_DATA;
  const filtered = limit ? list.slice(0, limit) : list;

  return (
    <section className="py-20 bg-[#0A0B0D] relative" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E2F135] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2F135]" />
              Engineering Blog & Articles
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Insights on modern web architecture & technology strategy.
            </h2>
          </div>
          {limit && (
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E2F135] hover:text-[#DFFF12]"
            >
              <span>View All Articles</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post, index) => (
            <motion.article
              key={post.id || post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#121316] border border-[#252830] hover:border-[#E2F135]/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Category & Read Time Banner */}
                <div className="bg-[#191B20] p-6 border-b border-[#252830] relative flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#0A0B0D] border border-[#252830] text-[#E2F135] text-[10px] font-bold tracking-wider uppercase">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-[#E2F135]" />
                    {post.readTime}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#E2F135] transition-colors mb-3 leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {post.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-[#0A0B0D] text-slate-400 px-2 py-0.5 rounded border border-[#191B20]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author & Footer Link */}
              <div className="p-6 pt-0 border-t border-[#191B20] flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <User className="w-3.5 h-3.5 text-[#E2F135]" />
                  <span>{post.author.name}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#E2F135] group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
