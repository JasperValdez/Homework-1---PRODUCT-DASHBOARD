export default function ProductList({ products, addToCart }) {
  if (products.length === 0) {
    return <p style={{ color: "#666" }}>No products yet. Add one above.</p>;
  }

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            width: "220px",
            background: "#fff",
            borderRadius: "12px",
            padding: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "contain",
              background: "#f5f5f5",
              borderRadius: "8px",
            }}
          />

          <h4 style={{ margin: "10px 0 5px" }}>{product.name}</h4>
          <p style={{ margin: 0, fontWeight: "bold" }}>₱{product.price}</p>

          <button
            onClick={() => addToCart(product)}
            style={{
              width: "100%",
              marginTop: "10px",
              padding: "8px",
              background: "#4c8dff",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}
