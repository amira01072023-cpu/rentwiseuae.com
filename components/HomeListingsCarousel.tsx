'use client';

import { useMemo, useRef, useState } from 'react';
import ListingCard from '@/components/ListingCard';
import type { AppListing } from '@/lib/listingQueries';

export default function HomeListingsCarousel({ listings }: { listings: AppListing[] }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const total = listings.length;

  const dots = useMemo(() => listings.map((listing) => listing.id), [listings]);

  function handleScroll() {
    const container = scrollRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLDivElement[];
    if (children.length === 0) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const distance = Math.abs(childCenter - containerCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  }

  function scrollToIndex(index: number) {
    const container = scrollRef.current;
    if (!container) return;

    const child = container.children[index] as HTMLDivElement | undefined;
    if (!child) return;

    container.scrollTo({
      left: child.offsetLeft - 4,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  }

  return (
    <div className="mt-6 rounded-[2rem] border border-slate-200/70 bg-[linear-gradient(180deg,_rgba(255,255,255,0.98)_0%,_rgba(248,250,252,0.9)_100%)] px-2 pt-3 pb-4 shadow-[0_14px_40px_rgba(15,23,42,0.05)] sm:px-3 sm:pt-4 sm:pb-5 lg:px-4">
      <div className="mb-3 flex items-center justify-between px-2 lg:hidden">
        <div className="text-xs font-medium text-slate-500">Swipe to browse listings</div>
        <div className="text-xs font-medium text-slate-400">
          {total > 0 ? `${activeIndex + 1}/${total}` : '0/0'}
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 py-2 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="w-[calc(100vw-2.75rem)] max-w-none flex-none snap-center transition duration-300 hover:-translate-y-1 sm:w-[360px] lg:w-auto lg:max-w-none lg:snap-start"
          >
            <ListingCard listing={listing} compact />
          </div>
        ))}
      </div>

      {dots.length > 1 ? (
        <div className="mt-2 flex items-center justify-center gap-2 lg:hidden">
          {dots.map((dotId, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={dotId}
                type="button"
                aria-label={`Go to listing ${index + 1}`}
                aria-pressed={isActive}
                onClick={() => scrollToIndex(index)}
                className={`h-2.5 rounded-full transition-all ${isActive ? 'w-6 bg-slate-900' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
