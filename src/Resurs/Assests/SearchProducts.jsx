import React, { useState } from 'react';
import PropTypes from 'prop-types';
import productsData from '../productsData'; // პროდუქტის მონაცემების იმპორტირება
import './search.css';
import { Link } from 'react-router-dom'; // დამატებული

function SearchProducts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // ძიების ფუნქცია
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // პროდუქტის ფილტრაცია
    const filtered = productsData.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input" // დაამატეთ CSS კლასი
      />
      
      {/* პროდუქტის ჩამონათვალი მხოლოდ იმ შემთხვევაში, თუ searchTerm არ არის ცარიელი */}
      {searchTerm && filteredProducts.length > 0 && (
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}> {/* პროდუქტის გადასვლის ლინკი */}
              <div className="serch_image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="text_search">
                <h3>{product.name}</h3>
              </div>
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* თუ არ არის პროდუქტი, რომელიც შეესაბამება ძიების პირობებს */}
      {searchTerm && filteredProducts.length === 0 && (
        <p className="no-products">No products found.</p> // დაამატეთ CSS კლასი
      )}
    </div>
  );
}

SearchProducts.propTypes = {
  // აქ შეგიძლიათ დაამატოთ PropTypes საჭირო შემთხვევაში
};

export default SearchProducts;
