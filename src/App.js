import { ProductProvider } from './components/ProductContext';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  return (
    <ProductProvider>
      <div className="app">
        <Navbar />
        <HomePage />
      </div>
    </ProductProvider>
  );
}

export default App;