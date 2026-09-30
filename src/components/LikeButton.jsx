import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div style={{ margin: '15px 0' }}>
      <button 
        onClick={handleLike}
        style={{
          padding: '8px 16px',
          fontSize: '15px',
          cursor: 'pointer',
          borderRadius: '5px',
          border: '1px solid #007bff',
          backgroundColor: '#007bff',
          color: '#fff'
        }}
      >
        👍 Like | {likes}
      </button>
    </div>
  );
}