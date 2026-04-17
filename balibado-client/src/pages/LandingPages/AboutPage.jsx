import Button from '../../components/Button';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-amber-900 bg-amber-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div className="rounded-xl border border-amber-300 bg-amber-100 p-6">
            <img 
              src="https://images.stockcake.com/public/7/7/8/77820355-4a7f-4109-9b66-a052794f8285_large/artisan-bakery-elegance-stockcake.jpg" 
              alt="Bake My Day Away bakery" 
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
              Our Story
            </p>
            <h1 className="text-2xl font-bold text-amber-900 sm:text-3xl">
              Artisan bakery with fresh daily bakes
            </h1>
            <p className="text-base text-amber-800 leading-relaxed">
              Bake My Day Away brings the joy of freshly baked pastries, cakes, and artisan breads to your daily routine. 
              Every morning our skilled bakers create buttery croissants, decadent cakes, and crusty sourdough loaves.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button to="/" variant="primary" className="px-6 py-2 font-semibold text-sm">
                Back Home
              </Button>
              <Button to="/products" className="px-6 py-2 font-semibold text-sm bg-amber-500 hover:bg-amber-600 text-white">
                Browse Bakery
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-amber-900 bg-amber-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
            Bakery Highlights
          </p>
          <h2 className="mt-2 text-2xl font-bold text-amber-900">What makes us special</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center p-6 border border-amber-200 rounded-xl bg-white hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mx-auto mb-3 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🥐</span>
            </div>
            <p className="text-2xl font-bold text-amber-900 mb-1">42+</p>
            <p className="text-sm font-semibold text-amber-700 uppercase tracking-wide">
              Daily Pastries
            </p>
          </div>
          
          <div className="text-center p-6 border border-amber-200 rounded-xl bg-white hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mx-auto mb-3 bg-rose-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎂</span>
            </div>
            <p className="text-2xl font-bold text-amber-900 mb-1">18+</p>
            <p className="text-sm font-semibold text-amber-700 uppercase tracking-wide">
              Cake Flavors
            </p>
          </div>
          
          <div className="text-center p-6 border border-amber-200 rounded-xl bg-white hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mx-auto mb-3 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">👩‍🍳</span>
            </div>
            <p className="text-2xl font-bold text-amber-900 mb-1">12</p>
            <p className="text-sm font-semibold text-amber-700 uppercase tracking-wide">
              Master Bakers
            </p>
          </div>
          
          <div className="text-center p-6 border border-amber-200 rounded-xl bg-white hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mx-auto mb-3 bg-emerald-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">⭐</span>
            </div>
            <p className="text-2xl font-bold text-amber-900 mb-1">4.9</p>
            <p className="text-sm font-semibold text-amber-700 uppercase tracking-wide">
              Google Rating
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-amber-900 bg-amber-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
              Baking Process
            </p>
            <h2 className="text-2xl font-bold text-amber-900 mb-6">From dough to delight</h2>

            <article className="p-6 border border-amber-200 rounded-xl bg-white hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                🥚 Fresh Ingredients
              </h3>
              <p className="text-base text-amber-800 leading-relaxed">
                We source premium butter, flour, and local eggs daily for unmatched flavor.
              </p>
            </article>

            <article className="p-6 border border-amber-200 rounded-xl bg-white hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                🔥 Wood-fired Ovens
              </h3>
              <p className="text-base text-amber-800 leading-relaxed">
                Traditional stone ovens create perfect crust and airy crumb in every loaf.
              </p>
            </article>

            <article className="p-6 border border-amber-200 rounded-xl bg-white hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                ⏰ Small Batch Baking
              </h3>
              <p className="text-base text-amber-800 leading-relaxed">
                Limited quantities ensure maximum freshness - gone by afternoon!
              </p>
            </article>
          </div>

          <div className="p-6 border border-amber-300 rounded-xl bg-amber-100">
  <p className="text-sm font-semibold uppercase tracking-wide text-amber-600 mb-4">
    Featured Categories
  </p>

  <div className="grid gap-4 sm:grid-cols-3 mb-6">
    <div className="rounded-xl overflow-hidden border border-amber-300 bg-white shadow-sm">
      <img
        src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
        alt="Croissants"
        className="w-full h-40 object-cover"
      />
      <div className="p-3 text-center">
        <p className="font-semibold text-amber-900">Croissants</p>
      </div>
    </div>

    <div className="rounded-xl overflow-hidden border border-amber-300 bg-white shadow-sm">
      <img
        src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
        alt="Cake"
        className="w-full h-40 object-cover"
      />
      <div className="p-3 text-center">
        <p className="font-semibold text-amber-900">Cakes</p>
      </div>
    </div>

    <div className="rounded-xl overflow-hidden border border-amber-300 bg-white shadow-sm">
      <img
        src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80"
        alt="Bread"
        className="w-full h-40 object-cover"
      />
      <div className="p-3 text-center">
        <p className="font-semibold text-amber-900">Bread</p>
      </div>
    </div>
  </div>

  <Button
    to="/products"
    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm py-3"
  >
    Explore All Pastries
  </Button>
</div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;