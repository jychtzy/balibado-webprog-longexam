import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js'

function ProductPage() {
  const { name } = useParams();
  const product = products.find(product => product.name === name);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-amber-50 to-orange-50 py-12 px-4">
        <div className="max-w-lg mx-auto text-center space-y-6">
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white/50">
            <span className="text-4xl">🥐</span>
          </div>
          <h1 className="text-3xl font-bold text-amber-900">Sold Out Today</h1>
          <p className="text-lg text-amber-700 font-semibold leading-relaxed">
            Our fresh artisan bakes sell out daily. Return tomorrow at 6AM for the morning batch!
          </p>
          <Button to="/products" className="px-8 py-3 font-bold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg rounded-xl">
            Fresh Bakes
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-8 bg-gradient-to-b from-amber-50 to-orange-50 min-h-screen">
      {/* HEADER */}
      <section className="border-y-2 border-amber-800 bg-white px-4 py-8 sm:px-6 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex items-center gap-4">
            <Button to="/products" className="px-6 py-2.5 font-semibold border-2 border-amber-400 bg-amber-50 text-amber-900 hover:bg-amber-100 hover:border-amber-500 rounded-lg">
              ← Bakery Shop
            </Button>
            <span className={`px-4 py-2 bg-gradient-to-r from-${product.category === 'Pastries' ? 'amber' : product.category === 'Cakes' ? 'rose' : 'yellow'}-100 to-${product.category === 'Pastries' ? 'orange' : product.category === 'Cakes' ? 'pink' : 'amber'}-100 text-${product.category === 'Pastries' ? 'amber' : product.category === 'Cakes' ? 'rose' : 'yellow'}-800 font-semibold rounded-lg text-sm uppercase`}>
              {product.category}
            </span>
          </div>
          
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-900 via-orange-700 to-amber-800 bg-clip-text text-transparent mb-6">
                {product.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="text-3xl lg:text-4xl font-black text-amber-900">{product.price}</div>
                <div className={`px-4 py-2 font-semibold rounded-lg text-sm border ${product.stock === 'In stock' ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : product.stock === 'Low stock' ? 'bg-orange-100 text-orange-800 border-orange-300' : 'bg-amber-200 text-amber-800 border-amber-300'}`}>
                  {product.stock}
                </div>
              </div>
            </div>
            
            <div className="flex justify-end pt-4 lg:pt-0">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl shadow-lg object-cover border-4 border-amber-100/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT DETAILS */}
      <section className="border-y-2 border-amber-800 bg-white px-4 py-12 sm:px-6 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {/* MAIN Product Image */}
          <div className="mb-12 text-center">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-96 h-72 mx-auto rounded-3xl shadow-2xl object-cover border-8 border-amber-100/30"
            />
          </div>

          {/* Features with Images */}
          <div className="space-y-6 mb-12">
            {product.content.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 border border-amber-200 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 hover:shadow-lg transition-all duration-300 hover:border-amber-300">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md mt-1">
                  <span className="text-xl text-white font-bold">★</span>
                </div>
                <div className="flex-1">
                  <p className="text-base font-medium text-amber-900 leading-relaxed">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center py-8 border-t-2 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
            <Button 
              variant="primary" 
              className="px-12 py-4 text-lg font-bold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg rounded-2xl w-full sm:w-auto"
            >
              Add to Order 🛒
            </Button>
            <Button 
              to="/products" 
              className="px-12 py-4 text-lg font-bold border-2 border-amber-400 bg-white text-amber-900 hover:bg-amber-50 shadow-md rounded-2xl w-full sm:w-auto"
            >
              Browse More →
            </Button>
          </div>

          {/* Bakery Info */}
          <div className="mt-12 pt-8 border-t-2 border-amber-200 text-center bg-amber-50 rounded-2xl p-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 font-semibold rounded-xl shadow-md mb-6">
              <span className="text-xl">🥐</span>
              <span>Freshly baked today • Ready in 15 minutes</span>
            </div>
            <p className="text-xl font-bold text-amber-900 mb-3">Open 6AM - 8PM Daily</p>
            <p className="text-lg font-semibold text-amber-700 uppercase tracking-wide">
              Bake My Day Away • Artisan Bakery
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;