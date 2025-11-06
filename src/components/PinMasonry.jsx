import React, { useMemo } from 'react';

// Pinterest-style responsive Masonry using CSS columns
// Accepts items with variable image heights
const PinMasonry = ({ items = [], onItemClick, type = 'product' }) => {
  const columnClass = useMemo(() => {
    return 'columns-1 sm:columns-2 lg:columns-4 gap-4';
  }, []);

  return (
    <div className={columnClass}>
      {items.map((item) => (
        <article key={item.id} className="mb-4 break-inside-avoid rounded-xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden hover:shadow-md transition-shadow">
          <button onClick={() => onItemClick?.(item)} className="w-full text-left">
            <img
              src={item.image}
              alt={item.title}
              className="w-full object-cover"
              style={{ height: item.height || 220 }}
              loading="lazy"
            />
            <div className="p-3">
              <h3 className="line-clamp-1 font-semibold text-slate-800">{item.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-slate-600">{item.subtitle}</p>
              <div className="mt-2 flex items-center justify-between">
                {type === 'product' ? (
                  <span className="text-sm font-semibold text-slate-900">${'{'}item.price?.toFixed?.(2) || item.price{'}'}</span>
                ) : (
                  <span className="text-xs font-medium text-slate-700">{item.category}</span>
                )}
                {item.rating && (
                  <span className="text-xs text-amber-600">★ {item.rating}</span>
                )}
              </div>
            </div>
          </button>
        </article>
      ))}
    </div>
  );
};

export default PinMasonry;
