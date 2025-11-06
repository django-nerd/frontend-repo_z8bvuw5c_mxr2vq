import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PinMasonry from './components/PinMasonry';
import Dashboard from './components/Dashboard';
import AuthModal from './components/AuthModal';

const makeDemoPins = (type = 'product') => {
  const pics = [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796',
    'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    'https://images.unsplash.com/photo-1556228720-195a672e8a03',
    'https://images.unsplash.com/photo-1561715276-a2d087060f1a',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
  ];
  const services = [
    'Home Cleaning',
    'Graphic Design',
    'Photography',
    'Personal Training',
    'Gardening',
    'Event Planning',
    'Web Development',
    'Tutoring',
  ];

  return pics.map((url, i) => ({
    id: `${type}-${i}`,
    image: `${url}?auto=format&fit=crop&w=800&q=60`,
    title: type === 'product' ? `Curated Product ${i + 1}` : services[i],
    subtitle: type === 'product' ? 'Beautifully crafted item from indie makers' : 'Highly rated professional near you',
    price: type === 'product' ? 29 + i * 5 : undefined,
    rating: (4 + (i % 2) * 0.5).toFixed(1),
    height: 200 + (i % 4) * 60,
    category: type === 'service' ? ['Home', 'Design', 'Photo', 'Fitness', 'Garden', 'Events', 'Dev', 'Education'][i] : undefined,
  }));
};

function App() {
  const [tab, setTab] = useState('products'); // products | services | dashboard
  const [authOpen, setAuthOpen] = useState(false);
  const [user, setUser] = useState(null);

  const products = useMemo(() => makeDemoPins('product'), []);
  const services = useMemo(() => makeDemoPins('service'), []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar
        onShowProducts={() => setTab('products')}
        onShowServices={() => setTab('services')}
        onShowDashboard={() => setTab('dashboard')}
        onLoginClick={() => setAuthOpen(true)}
        onLogoutClick={() => setUser(null)}
        isAuthenticated={!!user}
      />

      <Hero currentTab={tab} />

      {tab === 'dashboard' ? (
        <Dashboard />
      ) : (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">{tab === 'products' ? 'Trending Products' : 'Top Services'}</h2>
            <div className="text-sm text-slate-600">Pinterest-style grid • Click any card</div>
          </div>
          <PinMasonry
            items={tab === 'products' ? products : services}
            type={tab === 'products' ? 'product' : 'service'}
            onItemClick={(item) => alert(`${tab === 'products' ? 'Product' : 'Service'} selected: ${item.title}`)}
          />
        </section>
      )}

      <footer className="border-t bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-600">
          © {new Date().getFullYear()} PinCommerce. All rights reserved.
        </div>
      </footer>

      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        onAuth={(u) => setUser(u)}
      />
    </div>
  );
}

export default App;
