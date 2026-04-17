import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t-2 border-amber-900 bg-gradient-to-r from-amber-900 via-orange-900 to-amber-800 px-4 py-12 sm:px-6 lg:px-8 text-amber-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <h3 className="text-3xl font-black bg-gradient-to-r from-amber-100 via-orange-100 to-amber-200 bg-clip-text text-transparent drop-shadow-lg">
            Bake My Day Away
          </h3>
          <p className="text-lg text-amber-100 leading-relaxed">
            Freshly baked pastries, cakes, and artisan breads daily.
          </p>
          <p className="text-sm text-amber-200 font-semibold tracking-wide">
            Your favorite bakery stop since 2026
          </p>
        </div>
        
        <nav className="flex flex-wrap items-center gap-6 text-lg sm:gap-8">
          <Link to="/" className="hover:text-amber-200 font-semibold transition-all duration-300 hover:scale-105">Home</Link>
          <Link to="/about" className="hover:text-amber-200 font-semibold transition-all duration-300 hover:scale-105">About</Link>
          <Link to="/products" className="hover:text-amber-200 font-semibold transition-all duration-300 hover:scale-105">Products</Link>
          <Link to="/auth/signin" className="hover:text-amber-200 font-semibold transition-all duration-300 hover:scale-105">Sign In</Link>
          <Link to="/auth/signup" className="hover:text-amber-200 font-semibold transition-all duration-300 hover:scale-105">Sign Up</Link>
        </nav>
        
        <div className="text-center sm:text-right">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300 mb-2">
            Open Daily 6AM - 8PM
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">
            © 2026 Bake My Day Away. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Bakery social info */}
      <div className="mt-8 pt-8 border-t-2 border-amber-700/50">
        <div className="text-center text-amber-200 text-sm space-y-2">
          <p>🥐 Fresh croissants every morning | 🎂 Custom cakes for celebrations</p>
          <p>Follow us for daily baking specials! 🍰🍞</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;