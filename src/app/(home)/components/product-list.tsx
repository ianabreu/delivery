import ProductItem from "./product-item";

const ProductList = () => {
  const categories = [
    "Pizzas",
    "Pizzas Especiais",
    "Bebidas",
    "Aperitivos",
    "Bebidas Alcoolicas",
  ];
  const products = [
    {
      id: "1",
      name: "Pizza de Mussarela",
      description: "Tomate, muçarela e manjericão",
      price: 50,
      category: "Pizzas",
      imageURL:
        "https://uploads.metropoles.com/wp-content/uploads/2023/08/09145143/Pizza-31.jpg",
    },
    {
      id: "2",
      name: "Pizza de Calabresa",
      description: "Tomate, muçarela e calabresa",
      price: 40,
      category: "Pizzas Especiais",
      imageURL:
        "https://uploads.metropoles.com/wp-content/uploads/2023/08/09145143/Pizza-31.jpg",
    },
    {
      id: "3",
      name: "Pizza À Moda da Casa",
      description: "Tomate, milho, muçarela, presunto e catupiry",
      price: 50,
      category: "Pizzas Especiais",
      imageURL:
        "https://uploads.metropoles.com/wp-content/uploads/2023/08/09145143/Pizza-31.jpg",
    },
    {
      id: "4",
      name: "Pizza de Palmito",
      description: "Tomate, milho, muçarela, presunto e catupiry",
      price: 50,
      category: "Pizzas",
      imageURL:
        "https://uploads.metropoles.com/wp-content/uploads/2023/08/09145143/Pizza-31.jpg",
    },
    {
      id: "5",
      name: "Pizza de Camarão",
      description: "Tomate, milho, muçarela, presunto e catupiry",
      price: 50,
      category: "Pizzas",
      imageURL:
        "https://uploads.metropoles.com/wp-content/uploads/2023/08/09145143/Pizza-31.jpg",
    },
    {
      id: "6",
      name: "Refrigerante Coca cola 350ml",
      description: "",
      price: 50,
      category: "Bebidas",
      imageURL:
        "https://uploads.metropoles.com/wp-content/uploads/2023/08/09145143/Pizza-31.jpg",
    },
    {
      id: "7",
      name: "Skol 350ml",
      description: "Tomate, milho, muçarela, presunto e catupiry",
      price: 50,
      category: "Bebidas",
      imageURL:
        "https://uploads.metropoles.com/wp-content/uploads/2023/08/09145143/Pizza-31.jpg",
    },
    {
      id: "8",
      name: "Porção de Batatas",
      description: "500g",
      price: 10,
      category: "Aperitivos",
      imageURL:
        "https://uploads.metropoles.com/wp-content/uploads/2023/08/09145143/Pizza-31.jpg",
    },
  ];
  return (
    <div>
      {categories.map((category, index) => (
        <div key={index}>
          <p>{category}</p>
          <div className="grid sm:grid-cols-2 gap-2 my-2 mx-4 ">
            {products
              .filter((product) => product.category === category)
              .map((prod) => (
                <ProductItem product={prod} key={prod.id} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
