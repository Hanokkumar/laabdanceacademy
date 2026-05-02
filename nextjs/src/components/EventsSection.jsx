import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { events as mockEvents } from '../data/mockData';
import { useScrollReveal } from '../hooks/useScrollAnimation';
import axios from 'axios';
import { cn } from '../lib/utils';
import { cloudinaryImgSrcForGalleryThumb } from '../utils/cloudinaryImgSrc';
import { BACKEND_URL, API_BASE as API } from '../apiConfig';
import { isPublicCmsEnabled } from '../utils/publicSiteContent';

const isVideoUrl = (url = '') => /\.(mp4|webm|mov)(\?.*)?$/i.test(url);

const EventsSection = () => {
  const [refHead, revealHead] = useScrollReveal('up');
  const [refGrid, revealGrid] = useScrollReveal('up', 0.1, '0px 0px -5% 0px');
  const [events, setEvents] = useState(() =>
    isPublicCmsEnabled() ? [] : mockEvents.slice(0, 3)
  );

  useEffect(() => {
    if (!isPublicCmsEnabled()) {
      setEvents(mockEvents.slice(0, 3));
      return;
    }
    const fetchEvents = async () => {
      try {
        const res = await axios.get(`${API}/events`);
        if (res.data && res.data.length > 0) {
          setEvents(res.data.slice(0, 3));
        } else {
          setEvents(mockEvents);
        }
      } catch {
        setEvents(mockEvents);
      }
    };
    fetchEvents();
  }, []);

  const getImageUrl = (image) => {
    if (!image) return 'https://images.unsplash.com/photo-1550026593-dd8ce0749590?w=600&q=80';
    if (image.startsWith('http')) return image;
    return `${BACKEND_URL}${image}`;
  };

  return (
    <section id="events" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={refHead} className={cn('text-center mb-12', revealHead)}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-[2px] bg-primary" />
            <span className="text-primary font-dm-sans text-sm uppercase tracking-widest">
              Events
            </span>
            <div className="w-10 h-[2px] bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111] font-manrope">
            Dance Events
          </h2>
          <p className="text-gray-500 font-dm-sans text-base mt-4 max-w-2xl mx-auto">
            Join us for electrifying performances, vibrant showcases, and unforgettable nights that celebrate movement, music, and passion
          </p>
        </div>

        <div ref={refGrid} className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6', revealGrid)}>
          {events.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 reveal-stagger"
            >
              <div className="relative overflow-hidden">
                {isVideoUrl(getImageUrl(event.image)) ? (
                  <video
                    src={getImageUrl(event.image)}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    controls
                    preload="metadata"
                  />
                ) : (
                  <img
                    src={cloudinaryImgSrcForGalleryThumb(getImageUrl(event.image), false)}
                    alt={event.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute top-4 left-4 bg-primary text-white rounded-lg px-3 py-2 text-center">
                  <span className="block text-2xl font-bold font-manrope leading-none">
                    {event.date}
                  </span>
                  <span className="block text-xs font-dm-sans uppercase mt-0.5">
                    {event.month}
                  </span>
                </div>
                {!event.completed ? (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
                    <button
                      type="button"
                      className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-primary text-white font-manrope font-semibold px-6 py-2.5 rounded-md text-sm hover:bg-primary/90"
                    >
                      Book Now
                    </button>
                  </div>
                ) : (
                  <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-manrope font-semibold uppercase tracking-wide px-2.5 py-1 rounded-md">
                    Completed
                  </div>
                )}
              </div>

              <div className="p-5">
                <h5 className="text-lg font-bold text-[#111] font-manrope group-hover:text-primary transition-colors duration-300">
                  {event.title}
                </h5>
                <p className="text-gray-500 font-dm-sans text-sm mt-2 leading-relaxed">
                  {event.description}
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-400 min-w-0 flex-1">
                    <MapPin size={14} className="flex-shrink-0" />
                    <span className="text-xs font-dm-sans truncate">
                      {event.location}
                    </span>
                  </div>
                  {event.price?.trim() ? (
                    <span className="text-primary font-bold font-manrope text-lg flex-shrink-0 ml-2">
                      {event.price}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
