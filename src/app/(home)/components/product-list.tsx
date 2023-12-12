import ProductItem from "./product-item";

const ProductList = () => {
  const products = [
    {
      id: "1",
      name: "Pizza de Mussarela",
      description: "Tomate, muçarela e manjericão",
      price: 50,
      imageURL:
        "https://uploads.metropoles.com/wp-content/uploads/2023/08/09145143/Pizza-31.jpg",
    },
    {
      id: "2",
      name: "Pizza de Calabresa",
      description: "Tomate, muçarela e calabresa",
      price: 40,
      imageURL:
        "https://uploads.metropoles.com/wp-content/uploads/2023/08/09145143/Pizza-31.jpg",
    },
    {
      id: "3",
      name: "Pizza À Moda da Casa",
      description: "Tomate, milho, muçarela, presunto e catupiry",
      price: 50,
      imageURL:
        "https://uploads.metropoles.com/wp-content/uploads/2023/08/09145143/Pizza-31.jpg",
    },
    {
      id: "4",
      name: "Pizza de Palmito",
      description: "Tomate, milho, muçarela, presunto e catupiry",
      price: 50,
      imageURL:
        "https://uploads.metropoles.com/wp-content/uploads/2023/08/09145143/Pizza-31.jpg",
    },
    {
      id: "5",
      name: "Pizza de Camarão",
      description: "Tomate, milho, muçarela, presunto e catupiry",
      price: 50,
      imageURL:
        "https://uploads.metropoles.com/wp-content/uploads/2023/08/09145143/Pizza-31.jpg",
    },
  ];
  return (
    <div>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
