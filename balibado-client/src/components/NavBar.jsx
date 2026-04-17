import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Sign In', to: '/auth/signin' },
  { label: 'Sign Up', to: '/auth/signup' }
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-amber-900 bg-amber-900 text-amber-50 shadow-md'
      : 'border-transparent text-amber-600 hover:border-amber-900 hover:bg-amber-50 hover:text-amber-900 hover:shadow-md',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-amber-900 bg-gradient-to-r from-amber-50/95 to-orange-50/95 backdrop-blur-md shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3 group">
          <img 
            src="https://img.freepik.com/premium-vector/bakery-bread-cakes-design-logo_187482-410.jpg?semt=ais_hybrid&w=740&q=80" 
            alt="Bake My Day Away" 
            className="h-14 w-14 rounded-full border-3 border-amber-900/50 bg-gradient-to-br from-amber-50 to-orange-50 object-cover shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" 
          />
          <div className="space-y-1">
            <p className="text-2xl font-black bg-gradient-to-r from-amber-900 via-orange-800 to-amber-700 bg-clip-text text-transparent drop-shadow-lg">
              Bake My Day Away
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-700 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">
              Artisan Bakery
            </p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-4 md:flex">
          {links.map((link) => (
            <NavLink 
              key={link.to} 
              to={link.to} 
              end={link.to === '/'} 
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>  
      </div>
    </header>
  );
};

export default NavBar;