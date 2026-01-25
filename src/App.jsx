import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const addProduct = () => {
    if (!name || !price || !image) return;

    setProducts([
      ...products,
      {
        id: Date.now(),
        name,
        price,
        image,
      },
    ]);

    setName("");
    setPrice("");
    setImage("");
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div style={{ display: "flex", background: "#fff6c9" }}>
      {/* MAIN */}
      <div style={{ flex: 1, padding: "20px" }}>
        {/* FORM */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "25px",
          }}
        >
          <input
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          <input
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              width: "80px",
            }}
          />
          <input
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              width: "300px",
            }}
          />
          <button
            onClick={addProduct}
            style={{
              background: "#4c8dff",
              color: "white",
              border: "none",
              padding: "8px 14px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </div>

        {/* PRODUCTS */}
        <ProductList products={products} addToCart={addToCart} />
      </div>

      {/* CART */}
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}
