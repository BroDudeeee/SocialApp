import Product from "./Product";

const Feed = ({ products }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 -mt-16">
      {products.map(({ id, title, price, category, description, image }) => (
        <Product
          key={id}
          title={title}
          price={price}
          category={category}
          description={description}
          image={image}
        />
      ))}
    </div>
  );
};

export default Feed;
