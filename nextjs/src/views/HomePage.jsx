'use client';

import React from 'react';
import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import DanceSchool from '../components/DanceSchool';
import EventsSection from '../components/EventsSection';
import GallerySection from '../components/GallerySection';
import InstructorSection from '../components/InstructorSection';
// import InstagramReelSection from '../components/InstagramReelSection';
import CTABanner from '../components/CTABanner';
import ClassScheduleSection from '../components/ClassScheduleSection';
import BlogSection from '../components/BlogSection';
import TestimonialSection from '../components/TestimonialSection';

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <DanceSchool />
      <EventsSection />
      <GallerySection />
      <InstructorSection />
      {/* <InstagramReelSection /> */}
      <CTABanner />
      <ClassScheduleSection />
      <BlogSection />
      <TestimonialSection />
    </>
  );
};

export default HomePage;
