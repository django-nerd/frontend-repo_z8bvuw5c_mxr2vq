import React from 'react';
import { Store, Wrench, LayoutDashboard, ShoppingCart, User, LogIn, LogOut } from 'lucide-react';

const Navbar = ({ onShowProducts, onShowServices, onShowDashboard, onLoginClick, onLogoutClick, isAuthenticated, cartCount = 0 }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400" />
            <span className="text-xl font-semibold">PinCommerce</span>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            <button onClick={onShowProducts} className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              <Store size={18} /> Products
            </button>
            <button onClick={onShowServices} className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              <Wrench size={18} /> Services
            </button>
            <button onClick={onShowDashboard} className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              <LayoutDashboard size={18} /> Merchant
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <button className="relative inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100" aria-label="Cart">
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-rose-500 px-1 text-xs font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </button>
            {isAuthenticated ? (
              <button onClick={onLogoutClick} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
                <LogOut size={18} /> Logout
              </button>
            ) : (
              <button onClick={onLoginClick} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
                <LogIn size={18} /> Sign in
              </button>
            )}
            <button className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200" aria-label="Account">
              <User size={18} />
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center justify-between pb-3">
          <div className="flex items-center gap-2">
            <button onClick={onShowProducts} className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100">
              <Store size={16} /> Products
            </button>
            <button onClick={onShowServices} className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100">
              <Wrench size={16} /> Services
            </button>
            <button onClick={onShowDashboard} className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100">
              <LayoutDashboard size={16} /> Merchant
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
