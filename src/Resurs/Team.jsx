import React from 'react';
import { Link } from 'react-router-dom';
import productsData from './productsData';
import './team.css'; // დაამატეთ თქვენი CSS ფაილი
import VisibilityIcon from '@mui/icons-material/Visibility';

function Team() {
  return (
    <div className="team-section"> {/* კლასის სახელი */}
      <h2 style={{ color: '#1f4c5b' }}>პროდუქტები</h2> {/* დამატებული სათაური */}
      <div className="team-product-list"> {/* კლასის სახელი */}
        {productsData.map((product) => (
          <div key={product.id} className="team-product-item"> {/* კლასის სახელი */}
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <Link to={`/product/${product.id}`} className="details-link">
              <VisibilityIcon style={{ color: '#008755' }} /> {/* ლინკის ფერი */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
