import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-25">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_1fr] shadow-2xl">
        {/* LEFT: Bakery Showcase */}
        <div className="relative hidden lg:block overflow-hidden rounded-r-3xl shadow-2xl">
          <img
            src="https://images.stockcake.com/public/d/9/3/d93c8b8e-9005-4f1d-86f7-77c19d84dd77_large/cozy-bakery-corner-stockcake.jpg"
            alt="Fresh bakery pastries"
            className="h-full w-full object-cover brightness-110"
          />
          {/* Bakery Branding Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-transparent" />
          <div className="absolute top-8 left-8 space-y-3">
            <div className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl border-2 border-amber-200/50">
              <span className="text-3xl">🥐</span>
            </div>
            <div className="text-white drop-shadow-2xl">
              <h2 className="text-2xl font-bold tracking-tight">Bake My Day Away</h2>
              <p className="text-sm font-semibold tracking-wider uppercase opacity-90">Artisan Bakery</p>
            </div>
          </div>
        </div>

        {/* MOBILE: Bakery Header */}
        <div className="lg:hidden relative h-56 overflow-hidden rounded-b-3xl shadow-xl">
          <img
            src="https://images.stockcake.com/public/d/9/3/d93c8b8e-9005-4f1d-86f7-77c19d84dd77_large/cozy-bakery-corner-stockcake.jpg"
            alt="Bakery storefront"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/40 to-orange-900/20" />
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white drop-shadow-2xl">
            <span className="text-5xl block mb-2">🥐</span>
            <h2 className="text-xl font-bold tracking-tight">Bake My Day Away</h2>
            <p className="text-xs font-semibold tracking-widest uppercase opacity-90">Fresh Daily</p>
          </div>
        </div>

        {/* RIGHT: Form Area */}
        <main className="flex items-center justify-center px-6 py-16 sm:px-10 lg:px-16 lg:py-24 bg-gradient-to-br from-white/95 via-amber-50/50 to-orange-50/30 backdrop-blur-sm border-l-2 border-amber-200/30">
          <div className="w-full max-w-lg">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-amber-200/40 shadow-2xl p-10 lg:p-14 relative overflow-hidden">
              {/* Decorative Corner */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-300 to-orange-400 rounded-3xl opacity-20 blur-xl" />
              
              {/* Form Content */}
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 font-bold rounded-2xl shadow-lg border-2 border-amber-200/50 mb-6">
                    <span className="text-2xl">🥐</span>
                    <span>Welcome to Bakery</span>
                  </div>
                </div>
                <Outlet />
              </div>
            </div>
            
            {/* Bakery Footer */}
            <div className="mt-8 pt-8 border-t-2 border-amber-100 text-center text-sm text-amber-700">
              <p className="font-semibold tracking-wide uppercase mb-1">Fresh Bakes Daily</p>
              <p>6AM - 8PM | Artisan Bakery</p>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;