export default function Cart({ cart, removeFromCart }) {
  return (
    <div
      style={{
        width: "270px",
        background: "#f5dc6a",
        padding: "15px",
        minHeight: "100vh",
      }}
    >
      <h3 style={{ marginBottom: "15px" }}>Cart ({cart.length})</h3>

      {cart.length === 0 && (
        <p style={{ fontSize: "14px" }}>No items in cart</p>
      )}

      {cart.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#fff",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src={item.image}
              alt={item.name}
              width="32"
              height="32"
              style={{ borderRadius: "6px", objectFit: "cover" }}
            />
            <span style={{ fontSize: "14px" }}>{item.name}</span>
          </div>

          <button
            onClick={() => removeFromCart(index)}
            style={{
              background: "#222",
              color: "white",
              border: "none",
              padding: "5px 8px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
