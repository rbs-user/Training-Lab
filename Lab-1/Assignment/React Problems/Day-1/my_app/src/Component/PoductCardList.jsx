import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log(data);
      setProductList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {productList.map((item, i) => {
          return (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card h-100 shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top img-fluid"
                  style={{ maxHeight: '250px', objectFit: 'contain' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">${item.price}</p>
                  <div className="mt-auto">
                    <button className="btn btn-primary me-2">Add to Cart</button>
                    <button className="btn btn-success">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
