import React, { useState } from 'react';

const Tab = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`rounded-full px-3 py-1 text-sm font-medium ${active ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
  >
    {children}
  </button>
);

const AuthModal = ({ open, onClose, onAuth }) => {
  const [mode, setMode] = useState('login');

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Tab active={mode==='login'} onClick={() => setMode('login')}>Login</Tab>
            <Tab active={mode==='register'} onClick={() => setMode('register')}>Register</Tab>
          </div>
          <button onClick={onClose} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 hover:bg-slate-200">Close</button>
        </div>

        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            onAuth?.({ email: 'demo@user.com' });
            onClose();
          }}
        >
          <div>
            <label className="text-sm text-slate-600">Email</label>
            <input type="email" required className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-slate-900" placeholder="you@example.com"/>
          </div>
          <div>
            <label className="text-sm text-slate-600">Password</label>
            <input type="password" required className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-slate-900" placeholder="••••••••"/>
          </div>
          {mode === 'register' && (
            <div>
              <label className="text-sm text-slate-600">Full Name</label>
              <input type="text" className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-slate-900" placeholder="John Doe"/>
            </div>
          )}
          <button type="submit" className="w-full rounded-lg bg-slate-900 py-2 font-semibold text-white hover:bg-slate-800">
            {mode === 'login' ? 'Sign in' : 'Create account'}
          </button>
          <p className="text-center text-xs text-slate-600">Demo only • Backend auth flows can be wired next</p>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
