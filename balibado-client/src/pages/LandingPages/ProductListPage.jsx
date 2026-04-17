import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';

const ProductListPage = () => {
  return (
    <div className="flex w-full flex-col gap-8 bg-amber-50 py-8 px-4 sm:px-6">
      {/* HERO SECTION */}
      <section className="border-y-2 border-amber-800 bg-white shadow-sm rounded-2xl p-6 sm:p-8 lg:p-12">
        <div className="text-center mb-8">
          <p className="inline-block px-4 py-2 bg-amber-100 text-amber-800 font-bold text-sm uppercase tracking-wide rounded-full mb-4">
            Freshly Baked Daily
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
            Bakery Delights
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-amber-800 leading-relaxed">
            Indulge in our freshest pastries, cakes, and artisan breads. 
            Small batch baking means everything sells out daily!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button to="/" className="px-6 py-3 font-bold border-2 border-amber-400 bg-white text-amber-900 hover:bg-amber-50 rounded-xl shadow-md">
            ← Back Home
          </Button>
          <Button to="/about" variant="primary" className="px-6 py-3 font-bold">
            Our Story
          </Button>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="border-y-2 border-amber-800 bg-white shadow-sm rounded-2xl p-6 sm:p-8 lg:p-12">
        <div className="text-center mb-10">
          <p className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 font-bold text-sm uppercase tracking-wide rounded-full mb-4">
            Featured Bakes
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-900 mb-4">
            Fresh from the Oven
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-sm"></div>
        </div>

        {/* IMAGE GRID ABOVE PRODUCTLIST */}
<div className="max-w-6xl mx-auto mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
  {products.map((product) => (
    <div
      key={product.name}
      className="rounded-2xl border border-amber-200 bg-amber-50 overflow-hidden shadow-sm"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-amber-600">
          {product.category}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-amber-900">
          {product.title}
        </h3>
        <p className="mt-2 text-sm font-bold text-amber-800">{product.price}</p>
      </div>
    </div>
  ))}
</div>

        <div className="max-w-6xl mx-auto">
          <ProductList products={products} />
        </div>
      </section>
    </div>
  );
}

export default ProductListPage;