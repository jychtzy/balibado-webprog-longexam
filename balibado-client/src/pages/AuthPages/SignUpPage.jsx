import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-base text-amber-900 placeholder:text-amber-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:bg-white outline-none transition-all duration-200';

const actionButtonClassName = 
  'w-full rounded-xl py-3 text-sm font-semibold tracking-wide uppercase border-2';

const SignUpPage = () => {
  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-amber-900 mb-3">Join Bakery</h1>
        <p className="text-sm text-amber-700 leading-relaxed max-w-md mx-auto">
          Create your account for faster checkout, order updates, and save favorite pastries.
        </p>
      </div>

      <form className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-amber-800 mb-2">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-amber-800 mb-2">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-email" className="block text-sm font-medium text-amber-800 mb-2">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="yourname@bakery.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signup-password" className="block text-sm font-medium text-amber-800 mb-2">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Create password"
            autoComplete="new-password"
            className={inputClasses}
          />
          <p className="mt-1 text-xs text-amber-600">
            Use a secure password with letters, numbers & symbols
          </p>
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          className={`${actionButtonClassName} bg-amber-500 hover:bg-amber-600 text-white border-amber-400 font-semibold text-sm py-4`}
        >
          Create Bakery Account
        </Button>
      </form>

      <div className="mt-8 pt-6 border-t border-amber-200 text-center text-sm text-amber-700">
        Already have an account?{' '}
        <Link to="/auth/signin" className="font-semibold text-amber-900 hover:text-amber-700 transition-colors">
          Log In
        </Link>
      </div>
    </>
  );
}

export default SignUpPage;