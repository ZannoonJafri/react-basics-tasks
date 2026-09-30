import ProductCard from './components/ProductCard';
import LikeButton from './components/LikeButton';
import StudentList from './components/StudentList';

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '24px', maxWidth: '600px', margin: 'auto' }}>
      <h1>React Basics Assignment</h1>

      <hr />

      {/* Task 1: Reusable Component with Props */}
      <h2>Task 1: Product Cards</h2>
      <ProductCard 
        title="Wireless Headphones" 
        price={59.99} 
        category="Electronics" 
      />
      <ProductCard 
        title="Running Shoes" 
        price={89.99} 
        category="Footwear" 
      />

      <hr />

      {/* Task 2: State & Event Handling */}
      <h2>Task 2: Interactive Like Button</h2>
      <LikeButton />

      <hr />

      {/* Task 3: List & Conditional Rendering */}
      <h2>Task 3: Students Results</h2>
      <StudentList />
    </div>
  );
}