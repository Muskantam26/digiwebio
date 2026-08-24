import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { BLOG_POSTS_DATA } from "@/data/initialData";
import ContactForm from "@/components/sections/ContactForm";
import { generatePageMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS_DATA.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);
  if (!post) return generatePageMetadata({ title: "Article Not Found" });

  return generatePageMetadata({
    title: `${post.title} | DigiWebIO Blog`,
    description: post.summary,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="py-20 bg-grid-pattern relative border-b border-[#252830]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#E2F135] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#121316] border border-[#252830] text-[#E2F135] text-xs font-mono font-bold uppercase">
              {post.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#E2F135]" />
              {post.readTime}
            </span>
            <span className="text-xs text-slate-500">• {post.publishedAt}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 border-l-2 border-[#E2F135] pl-4">
            {post.summary}
          </p>

          {/* Author info */}
          <div className="flex items-center justify-between py-4 border-y border-[#252830] mb-12 text-xs text-slate-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#121316] border border-[#252830] flex items-center justify-center text-[#E2F135] font-bold">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-white text-sm">{post.author.name}</div>
                <div className="text-[11px] text-slate-400">{post.author.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {post.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="text-[10px] bg-[#121316] text-slate-400 px-2.5 py-1 rounded border border-[#252830]"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Body Content */}
          <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-6">
            <div className="bg-[#121316] p-8 rounded-3xl border border-[#252830] space-y-6">
              {post.content.split("\n\n").map((paragraph, idx) => {
                if (paragraph.trim().startsWith("## ")) {
                  return (
                    <h2 key={idx} className="text-2xl font-bold text-white pt-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.trim().startsWith("### ")) {
                  return (
                    <h3 key={idx} className="text-lg font-bold text-[#E2F135] pt-2">
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                return (
                  <p key={idx} className="text-slate-300 text-sm leading-relaxed">
                    {paragraph.trim()}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </article>

      <ContactForm />
    </>
  );
}
