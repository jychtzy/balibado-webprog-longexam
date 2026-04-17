import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-base text-amber-900 placeholder:text-amber-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:bg-white outline-none transition-all duration-200';

const actionButtonClassName = 
  'w-full rounded-xl py-3 text-sm font-semibold tracking-wide uppercase border-2';

const SignInPage = () => {
  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-amber-900 mb-3">Welcome Back</h1>
        <p className="text-sm text-amber-700 leading-relaxed max-w-md mx-auto">
          Access your bakery account to manage orders, track pickups, and save favorite pastries.
        </p>
      </div>

      <form className="space-y-4">
        <div>
          <label htmlFor="signin-email" className="block text-sm font-medium text-amber-800 mb-2">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="yourname@bakery.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="block text-sm font-medium text-amber-800 mb-2">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            className={inputClasses}
          />
          <p className="mt-1 text-xs text-amber-600">
            Minimum 8 characters with letters, numbers & symbols
          </p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-amber-700">
            <input type="checkbox" className="h-4 w-4 rounded border-amber-400 accent-amber-600" />
            <span>Remember me</span>
          </label>
          <button type="button" className="font-medium text-amber-700 hover:text-amber-900 transition-colors">
            Forgot Password?
          </button>
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          className={`${actionButtonClassName} bg-amber-500 hover:bg-amber-600 text-white border-amber-400 font-semibold text-sm py-4`}
        >
          Log In to Bakery
        </Button>
      </form>

      <div className="mt-8 pt-6 border-t border-amber-200 text-center text-sm text-amber-700">
        No account yet?{' '}
        <Link to="/auth/signup" className="font-semibold text-amber-900 hover:text-amber-700 transition-colors">
          Sign Up
        </Link>
      </div>
    </>
  );
}

export default SignInPage;