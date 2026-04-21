import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="rounded-3xl border-2 border-amber-900 bg-amber-50 p-4 shadow-sm hover:shadow-lg transition-shadow">
      <div className="overflow-hidden rounded-[1.25rem] bg-amber-100 aspect-[4/3]">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover"
        />
      </div>

      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-600">
        {product.category} {String(index + 1).padStart(2, '0')}
      </p>

      <h3 className="mt-2 text-lg font-semibold text-amber-900">
        {product.title}
      </h3>

      <p className="mt-2 text-base font-bold text-amber-900">
        {product.price}
      </p>

      <p className="mt-3 text-sm leading-6 text-amber-700">
        {product.content?.[0]?.substring(0, 120)}...
      </p>

      <Button
        to={`/products/${product.name}`}
        className="mt-4 bg-amber-500 hover:bg-amber-600 text-white"
      >
        View Product
      </Button>
    </article>
  );
};

export default ProductCard;