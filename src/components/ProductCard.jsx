export default function ProductCard({ title, price, category }) {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px 0',
    maxWidth: '300px',
    backgroundColor: '#f9f9f9',
    color: '#333'
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ margin: '0 0 8px 0' }}>{title}</h3>
      <p style={{ margin: '4px 0' }}><strong>Category:</strong> {category}</p>
      <p style={{ margin: '4px 0' }}><strong>Price:</strong> ${price}</p>
    </div>
  );
}