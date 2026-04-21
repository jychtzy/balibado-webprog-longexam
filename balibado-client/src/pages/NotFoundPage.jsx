import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col gap-6 bg-amber-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <section className="rounded-2xl border-2 border-amber-900 bg-white px-4 py-8 shadow-sm sm:px-6 sm:py-10 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-3 inline-block rounded-full bg-amber-100 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-700">
            Error
          </p>

          <h1 className="text-6xl font-bold leading-tight text-amber-900 sm:text-7xl">
            404
          </h1>

          <p className="mt-4 max-w-xl text-lg leading-7 text-amber-800">
            Page not found. The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              to="/"
              className="rounded-xl border-2 border-amber-400 bg-white px-5 py-3 font-semibold text-amber-900 hover:bg-amber-50"
            >
              Back Home
            </Button>
            <Button
              to="/products"
              className="rounded-xl bg-amber-500 px-5 py-3 font-semibold text-white hover:bg-amber-600"
            >
              View Products
            </Button>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border-2 border-amber-900 bg-white px-4 py-8 shadow-sm sm:px-6 sm:py-10 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-600">
            Quick Links
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-amber-900">
            Explore the bakery
          </h2>

          <div className="mt-6 space-y-3">
            <div className="rounded-3xl border-2 border-amber-200 bg-amber-50 p-4">
              <h3 className="font-semibold text-amber-900">Home</h3>
              <p className="mt-1 text-sm text-amber-700">Return to the homepage</p>
              <Button
                to="/"
                className="mt-3 rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600"
              >
                Go Home
              </Button>
            </div>

            <div className="rounded-3xl border-2 border-amber-200 bg-amber-50 p-4">
              <h3 className="font-semibold text-amber-900">Products</h3>
              <p className="mt-1 text-sm text-amber-700">Browse all featured bakery items</p>
              <Button
                to="/products"
                className="mt-3 rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600"
              >
                View Products
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;