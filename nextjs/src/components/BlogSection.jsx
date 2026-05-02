'use client';

import React, { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, Tag, ArrowRight, Image } from 'lucide-react';
import { blogPosts as fallbackBlog } from '../data/mockData';
import { useScrollReveal } from '../hooks/useScrollAnimation';
import { useSiteContent } from '../hooks/useSiteContent';
import { cn } from '../lib/utils';
import { blogCoverUrl, blogPostsForDisplay } from '../utils/blogUtils';
import { cloudinaryImgSrcForGalleryThumb } from '../utils/cloudinaryImgSrc';

const BlogSection = () => {
  const router = useRouter();
  const [refHead, revealHead] = useScrollReveal('up');
  const [refGrid, revealGrid] = useScrollReveal('left');
  const { data } = useSiteContent();
  const allPosts = useMemo(
    () => blogPostsForDisplay(data?.blogPosts, fallbackBlog),
    [data]
  );
  const latestPosts = useMemo(() => allPosts.slice(0, 3), [allPosts]);

  return (
    <section id="blog" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={refHead} className={cn('text-center mb-12', revealHead)}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-[2px] bg-primary" />
            <span className="text-primary font-dm-sans text-sm uppercase tracking-widest">
              Blog
            </span>
            <div className="w-10 h-[2px] bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111] font-manrope">
            Our Latest Blog
          </h2>
          <p className="text-gray-500 font-dm-sans text-base mt-4 max-w-2xl mx-auto">
            Stay connected to the rhythm of our world. From expert dance tips and training advice to behind-the-scenes stories
          </p>
        </div>

        {/* Blog Grid */}
        <div ref={refGrid} className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6', revealGrid)}>
          {latestPosts.map((post) => {
            const slug = post.slug || post.id;
            const raw = blogCoverUrl(post);
            return (
              <article
                key={post.id}
                role="link"
                tabIndex={0}
                onClick={() => router.push(`/blog/${encodeURIComponent(String(slug))}`)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    router.push(`/blog/${encodeURIComponent(String(slug))}`);
                  }
                }}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-gray-100 reveal-stagger cursor-pointer"
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
                  <h5 className="text-lg font-bold text-[#111] font-manrope group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h5>
                  {(post.subtitle || post.description) ? (
                    <p className="text-gray-500 font-dm-sans text-sm mt-2 leading-relaxed">
                      {post.subtitle || post.description}
                    </p>
                  ) : null}
                  <div className="flex items-center justify-between gap-4 mt-4 pt-4 border-t border-gray-100">
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
                    <span className="text-primary shrink-0" aria-hidden>
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {allPosts.length > 3 ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => router.push('/blog')}
              className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-2.5 text-sm font-dm-sans font-semibold text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            >
              View all posts
              <ArrowRight size={16} aria-hidden />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default BlogSection;
