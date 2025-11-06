import React from 'react';
import { Package, Wrench, BarChart3, PlusCircle } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4 rounded-xl border bg-white p-4 shadow-sm">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
      <Icon size={18} />
    </div>
    <div>
      <p className="text-sm text-slate-600">{label}</p>
      <p className="text-xl font-semibold text-slate-900">{value}</p>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Merchant Dashboard</h2>
          <p className="text-slate-600">Manage your product listings and service offerings</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
            <PlusCircle size={18} /> New Product
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
            <PlusCircle size={18} /> New Service
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Package} label="Products" value="128" />
        <StatCard icon={Wrench} label="Services" value="42" />
        <StatCard icon={BarChart3} label="Monthly Sales" value="$12,940" />
        <StatCard icon={BarChart3} label="Bookings" value="86" />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <h3 className="mb-3 text-lg font-semibold text-slate-900">Recent Products</h3>
          <ul className="space-y-3">
            {[1,2,3,4].map(i => (
              <li key={i} className="flex items-center justify-between rounded-lg border p-3 hover:bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-md bg-slate-200" />
                  <div>
                    <p className="text-sm font-medium">Product #{i}</p>
                    <p className="text-xs text-slate-600">Draft • Inventory: 20</p>
                  </div>
                </div>
                <button className="text-sm font-medium text-indigo-600 hover:underline">Edit</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <h3 className="mb-3 text-lg font-semibold text-slate-900">Upcoming Service Bookings</h3>
          <ul className="space-y-3">
            {[1,2,3,4].map(i => (
              <li key={i} className="flex items-center justify-between rounded-lg border p-3 hover:bg-slate-50">
                <div>
                  <p className="text-sm font-medium">Service #{i} • 2pm tomorrow</p>
                  <p className="text-xs text-slate-600">Client: John Doe</p>
                </div>
                <button className="text-sm font-medium text-indigo-600 hover:underline">View</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
