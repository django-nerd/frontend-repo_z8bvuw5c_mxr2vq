import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero = ({ currentTab }) => {
  const title = currentTab === 'products' ? 'Discover Unique Products' : currentTab === 'services' ? 'Book Trusted Services' : 'Your Marketplace for Products and Services';
  const subtitle = currentTab === 'products'
    ? 'Shop curated items from independent sellers. Visual browsing in a Pinterest-style grid.'
    : currentTab === 'services'
    ? 'Find experts across categories and book them seamlessly.'
    : 'Switch between product shopping and service booking with a beautiful, visual experience.';

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-indigo-50 via-white to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
              <Sparkles size={14} className="text-indigo-600" /> New today
            </div>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              {title}
            </h1>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
