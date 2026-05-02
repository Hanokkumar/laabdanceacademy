'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import DanceSchool from '../components/DanceSchool';
import ClassScheduleSection from '../components/ClassScheduleSection';
import CTABanner from '../components/CTABanner';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { Music, Star, Clock, Users } from 'lucide-react';

const classDetails = [
  { icon: Star, title: 'Hip Hop', desc: 'Grooves, rhythm, and street foundations — from basics to stage-ready movement.', level: 'Beginner - Advanced', duration: '75 min' },
  { icon: Music, title: 'Folk', desc: 'Regional roots and expressive folk movement — energy, storytelling, and tradition on the floor.', level: 'All Levels', duration: '60 min' },
  { icon: Star, title: 'Bollywood', desc: 'Film-style choreography: mudras, expression, and high-energy routines for the stage.', level: 'All Levels', duration: '60 min' },
  { icon: Music, title: 'Locking', desc: 'Funk-based freezes, points, and hits — sharp musicality and classic locking vocabulary.', level: 'Beginner - Advanced', duration: '60 min' },
  { icon: Star, title: 'Popping', desc: 'Hits, waves, and isolations — build control and texture with the beat.', level: 'Beginner - Advanced', duration: '60 min' },
  { icon: Music, title: 'Breaking', desc: 'Footwork, freezes, and power — trained safely with progression for every level.', level: 'Beginner - Advanced', duration: '75 min' },
  { icon: Star, title: 'Freestyle choreography', desc: 'Original combos and performance pieces — develop your voice and own your movement.', level: 'Intermediate - Advanced', duration: '75 min' },
];

const ClassesPage = () => {
  const [ref1, isVisible1] = useScrollAnimation();
  const router = useRouter();

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] bg-[#111] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=1920&q=80)' }} />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-manrope animate-slideUp">Our Classes</h1>
          <div className="flex items-center justify-center gap-2 mt-4 text-gray-400 font-dm-sans animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <button type="button" onClick={() => router.push('/')} className="hover:text-primary transition-colors">Home</button>
            <span>/</span>
            <span className="text-primary">Classes</span>
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
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-10 h-[2px] bg-primary" />
              <span className="text-primary font-dm-sans text-sm uppercase tracking-widest">What We Offer</span>
              <div className="w-10 h-[2px] bg-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111] font-manrope">Dance Class Types</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classDetails.map((c, i) => (
              <div key={i} className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <c.icon size={24} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-[#111] font-manrope group-hover:text-primary transition-colors">{c.title}</h4>
                <p className="text-gray-500 font-dm-sans text-sm mt-2 leading-relaxed">{c.desc}</p>
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs font-dm-sans">
                    <Users size={12} />{c.level}
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs font-dm-sans">
                    <Clock size={12} />{c.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DanceSchool />
      <ClassScheduleSection />
      <CTABanner />
    </>
  );
};

export default ClassesPage;
