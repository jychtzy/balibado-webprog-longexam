import Button from '../../components/Button';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="relative min-h-112 overflow-hidden border-y-2 border-amber-900 bg-linear-to-r from-amber-900 via-orange-900 to-amber-800 px-4 py-10 sm:px-6 lg:px-8">
                {/* FIXED BAKERY BANNER */}
               <img
    src="https://images.stockcake.com/public/c/d/9/cd943194-1ed2-442c-a264-f211792f32b9_large/bakery-shop-interior-stockcake.jpg"
    alt="Fresh artisan bread and pastries"
    className="absolute inset-0 h-full w-full object-cover brightness-50 saturate-110"
/>
                <div className="absolute inset-0 bg-linear-to-b from-amber-900/75 via-orange-900/50 to-transparent" />

                <div className="relative z-10 flex min-h-88 items-start justify-end text-right sm:min-h-96">
                    <div className="max-w-xl space-y-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-100 drop-shadow-md">
                            Artisan Bakery
                        </p>
                        <h1 className="text-4xl font-black leading-[0.9] bg-linear-to-r from-amber-50 via-orange-100 to-amber-200 bg-clip-text text-transparent drop-shadow-2xl sm:text-5xl">
                            Bake My Day Away
                        </h1>
                        <p className="max-w-lg text-base leading-relaxed text-amber-100/95 drop-shadow-md sm:text-lg">
                            Fresh croissants, decadent cakes, and artisan breads baked daily. 
                            Your perfect breakfast stop or afternoon treat.
                        </p>
                        <div className="flex flex-wrap justify-end gap-4">
                            <Button to="/products" className="px-8 py-3 text-base font-bold">
                                Shop Pastries
                            </Button>
                            <Button to="/about" variant="primary" className="px-8 py-3 text-base font-bold">
                                Our Story
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* BAKERY STORE OVERVIEW */}
            <section className="border-y-2 border-amber-900 bg-amber-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-600">
                        Bakery Highlights
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-amber-900">Fresh daily baked</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="group rounded-3xl border-2 border-amber-900 bg-amber-100 p-5 hover:shadow-xl hover:scale-[1.02] transition-all">
                        <p className="text-3xl font-bold text-amber-900">24</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-600">
                            Pastries
                        </p>
                    </div>
                    <div className="group rounded-3xl border-2 border-amber-900 bg-amber-100 p-5 hover:shadow-xl hover:scale-[1.02] transition-all">
                        <p className="text-3xl font-bold text-amber-900">12</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-600">
                            Cake Flavors
                        </p>
                    </div>
                    <div className="group rounded-3xl border-2 border-amber-900 bg-amber-100 p-5 hover:shadow-xl hover:scale-[1.02] transition-all">
                        <p className="text-3xl font-bold text-amber-900">156</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-600">
                            Orders Today
                        </p>
                    </div>
                    <div className="group rounded-3xl border-2 border-amber-900 bg-amber-100 p-5 hover:shadow-xl hover:scale-[1.02] transition-all">
                        <p className="text-3xl font-bold text-amber-900">08</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-600">
                            Pickup Slots
                        </p>
                    </div>
                </div>
            </section>

            {/* BAKERY PRODUCT SECTIONS */}
<section className="border-y-2 border-amber-900 bg-amber-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
  <div className="mb-6">
    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-600">
      Featured Collections
    </p>
    <h2 className="mt-2 text-2xl font-semibold text-amber-900">Baked fresh daily</h2>
  </div>

  <div className="grid gap-4 md:grid-cols-3">
    {/* CROISSANTS & PASTRIES */}
    <article className="group rounded-3xl border-2 border-amber-900 bg-amber-100 p-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="aspect-4/3 rounded-[1.25rem] overflow-hidden bg-gradient-to-br from-amber-200 to-orange-300 group-hover:scale-105 transition-all">
        <img 
          src="https://images.stockcake.com/public/b/8/b/b8bca4f2-33d0-40cb-a267-d57d747713cc_large/assorted-breakfast-pastries-stockcake.jpg" 
          alt="Croissants & Pastries"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-xl font-bold text-amber-900">Croissants & Pastries</h3>
      <p className="mt-2 text-sm leading-6 text-amber-700">
        Buttery flaky perfection, baked fresh every morning.
      </p>
      <Button to="/products" className="mt-4 w-full" variant="primary">View Pastries</Button>
    </article>

    {/* CUSTOM CAKES */}
    <article className="group rounded-3xl border-2 border-amber-900 bg-amber-100 p-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="aspect-4/3 rounded-[1.25rem] overflow-hidden bg-gradient-to-br from-rose-200 to-pink-300 group-hover:scale-105 transition-all">
        <img 
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop" 
          alt="Custom Cakes"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-xl font-bold text-amber-900">Custom Cakes</h3>
      <p className="mt-2 text-sm leading-6 text-amber-700">
        Celebration cakes for birthdays and special occasions.
      </p>
      <Button to="/products" className="mt-4 w-full" variant="primary">Order Cakes</Button>
    </article>

    {/* ARTISAN BREADS */}
    <article className="group rounded-3xl border-2 border-amber-900 bg-amber-100 p-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="aspect-4/3 rounded-[1.25rem] overflow-hidden bg-gradient-to-br from-yellow-200 to-amber-300 group-hover:scale-105 transition-all">
        <img 
          src="https://images.stockcake.com/public/9/a/4/9a49922b-7a75-42b1-9d2e-5320f3341408_large/artisan-pastry-elegance-stockcake.jpg" 
          alt="Artisan Breads"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-xl font-bold text-amber-900">Artisan Breads</h3>
      <p className="mt-2 text-sm leading-6 text-amber-700">
        Sourdough loaves with perfect crust and crumb.
      </p>
      <Button to="/products" className="mt-4 w-full" variant="primary">Shop Breads</Button>
    </article>
  </div>
</section>
        </div>
    );
};

export default HomePage;