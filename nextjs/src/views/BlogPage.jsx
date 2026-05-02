'use client';

import React, { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { blogPosts as fallbackBlog, heroSlides } from '../data/mockData';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useSiteContent } from '../hooks/useSiteContent';
import { Calendar, Tag, ArrowRight, Image } from 'lucide-react';
import { blogCoverUrl, blogPostsForDisplay } from '../utils/blogUtils';
import { cloudinaryImgSrcForDisplay, cloudinaryImgSrcForGalleryThumb } from '../utils/cloudinaryImgSrc';

const BLOG_HERO_FALLBACK = heroSlides[0]?.bgImage || '';

const BlogPage = () => {
  const [ref1, isVisible1] = useScrollAnimation();
  const router = useRouter();
  const { data } = useSiteContent();
  const blogPosts = useMemo(
    () => blogPostsForDisplay(data?.blogPosts, fallbackBlog),
    [data]
  );
  const heroBg = useMemo(() => {
    const cover = blogCoverUrl(blogPosts[0]);
    return cloudinaryImgSrcForDisplay(cover || BLOG_HERO_FALLBACK);
  }, [blogPosts]);

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] bg-[#111] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: heroBg ? `url(${heroBg})` : undefined }}
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-manrope animate-slideUp">Our Blog</h1>
          <div className="flex items-center justify-center gap-2 mt-4 text-gray-400 font-dm-sans animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <button type="button" onClick={() => router.push('/')} className="hover:text-primary transition-colors">Home</button>
            <span>/</span>
            <span className="text-primary">Blog</span>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div
          ref={ref1}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => {
              const slug = post.slug || post.id;
              const raw = blogCoverUrl(post);
              return (
                <article
                  key={post.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 cursor-pointer"
                  onClick={() => router.push(`/blog/${encodeURIComponent(String(slug))}`)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      router.push(`/blog/${encodeURIComponent(String(slug))}`);
                    }
                  }}
                  role="link"
                  tabIndex={0}
                >
                  <div className="relative overflow-hidden h-52 bg-gradient-to-br from-gray-200 to-gray-100">
                    {raw ? (
                      <img
                        src={cloudinaryImgSrcForGalleryThumb(raw, false)}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-gray-300">
                        <Image className="w-12 h-12" strokeWidth={1.25} aria-hidden />
                        <span className="sr-only">{post.title}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h5 className="text-lg font-bold text-[#111] font-manrope group-hover:text-primary transition-colors">{post.title}</h5>
                    {post.subtitle || post.description ? (
                      <p className="text-gray-500 font-dm-sans text-sm mt-2 leading-relaxed">
                        {post.subtitle || post.description}
                      </p>
                    ) : null}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-gray-400">
                          <Calendar size={13} />
                          <span className="text-xs font-dm-sans">{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-400">
                          <Tag size={13} />
                          <span className="text-xs font-dm-sans">{post.category}</span>
                        </div>
                      </div>
                      <span className="text-primary group-hover:text-primary/80 transition-colors" aria-hidden>
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
