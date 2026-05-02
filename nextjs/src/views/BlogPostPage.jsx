'use client';

import React, { useEffect, useMemo } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { blogPosts as fallbackBlog, getBlogPostBySlug } from '../data/mockData';
import { useSiteContent } from '../hooks/useSiteContent';
import { Calendar, Tag, ArrowLeft, Image } from 'lucide-react';
import { blogCoverUrl, blogPostsForDisplay, renderTextWithBold } from '../utils/blogUtils';
import { cloudinaryImgSrcForDisplay, cloudinaryImgSrcForGalleryThumb } from '../utils/cloudinaryImgSrc';

const BlogPostPage = () => {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : params?.slug?.[0];
  const router = useRouter();
  const { data } = useSiteContent();
  const allPosts = useMemo(
    () => blogPostsForDisplay(data?.blogPosts, fallbackBlog),
    [data]
  );
  const post = useMemo(() => {
    const key = decodeURIComponent(slug || '');
    const hit = allPosts.find(
      (p) => (p.slug && String(p.slug) === key) || String(p.id) === key
    );
    return hit || getBlogPostBySlug(key);
  }, [slug, allPosts]);

  useEffect(() => {
    if (!post && slug != null) router.replace('/blog');
  }, [post, slug, router]);

  if (!post) {
    return null;
  }

  const hero = blogCoverUrl(post);
  const gallery = post.images?.filter((u) => u && u !== hero) || [];
  const paragraphs = (post.content || '')
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <>
      <section className="relative h-[40vh] min-h-[280px] bg-[#111] flex items-end pb-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: hero ? `url(${cloudinaryImgSrcForDisplay(hero)})` : undefined }}
        />
        {!hero ? <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-[#111]" /> : null}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <button
            type="button"
            onClick={() => router.push('/blog')}
            className="inline-flex items-center gap-2 text-white/90 hover:text-primary font-dm-sans text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to blog
          </button>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-manrope leading-tight">{post.title}</h1>
          {post.subtitle ? (
            <p className="mt-3 text-white/80 font-dm-sans text-lg">{post.subtitle}</p>
          ) : null}
          <div className="flex flex-wrap items-center gap-4 mt-6 text-white/70">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span className="text-sm font-dm-sans">{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Tag size={14} />
              <span className="text-sm font-dm-sans">{post.category}</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-14 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {paragraphs.map((block, i) => (
            <p key={i} className="font-dm-sans text-gray-600 leading-relaxed text-base mb-6 last:mb-0 whitespace-pre-line">
              {renderTextWithBold(block)}
            </p>
          ))}

          {gallery.length > 0 ? (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {gallery.map((src, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
                  <img
                    src={cloudinaryImgSrcForGalleryThumb(src, false)}
                    alt=""
                    className="w-full h-56 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ) : null}

          {!hero && gallery.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-gray-300">
              <Image className="w-14 h-14 mb-2" strokeWidth={1.25} aria-hidden />
              <p className="text-sm font-dm-sans text-gray-400">No images for this post yet.</p>
            </div>
          ) : null}
        </div>
      </article>
    </>
  );
};

export default BlogPostPage;
