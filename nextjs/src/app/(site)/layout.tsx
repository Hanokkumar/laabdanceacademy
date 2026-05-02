'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JoinClassModal from '@/components/JoinClassModal';
import { GraduationCap } from 'lucide-react';

const OPEN_JOIN_MODAL_EVENT = 'laab:openJoinModal';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  useEffect(() => {
    const open = () => setIsJoinModalOpen(true);
    window.addEventListener(OPEN_JOIN_MODAL_EVENT, open);
    return () => window.removeEventListener(OPEN_JOIN_MODAL_EVENT, open);
  }, []);

  return (
    <>
      <Navbar onJoinClassClick={() => setIsJoinModalOpen(true)} />
      {children}
      <Footer />
      <button
        type="button"
        onClick={() => setIsJoinModalOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[90] bg-primary hover:bg-primary/90 text-white font-manrope font-semibold px-3 py-4 rounded-l-lg shadow-lg shadow-primary/30 transition-all duration-300 hover:pr-5 group"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        aria-label="Join Class"
      >
        <span className="flex items-center gap-2 text-sm uppercase tracking-wider">
          <GraduationCap size={18} className="rotate-90" />
          Join Class
        </span>
      </button>
      <JoinClassModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
    </>
  );
}
