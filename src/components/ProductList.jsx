import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Card, Container, Row, Col } from "react-bootstrap";
import storeAPI from "../api/storeAPI";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { authData } = useAuth();

  useEffect(() => {
    const getProducts = async () => {
      const options = {
        method: "get",
        url: "https://api.kalpav.com/api/v1/product/category/retail",
        headers: {
          access_token: authData.access_token,
        },
      };

      const res = await storeAPI(options);
      console.log(res.data.response);
      setProducts(res.data.response);
    };

    return () => getProducts();
  }, [authData.access_token]);

  // console.log(products)

  const filteredProducts = products.filter((product) =>
    product.productCategory.productCategoryName
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
  return (
    <Container>
      <Container className="d-flex flex-column align-items-center">
        <h2 className="mt-4 mb-3 text-center text-info ">Product List</h2>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          className="mb-5"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Container>

      <div>
        <ul className="d-flex justify-content-around flex-wrap list-unstyled">
          {filteredProducts.map((product) => (
            <li
              key={product.productCategory.orderIndex}
              className="mb-2"
              style={{ maxWidth: "20rem", minWidth: "17rem" }}
            >
              <ProductCard
                image={product.productCategory.productCategoryImage}
                title={product.productCategory.productCategoryName}
                saleType={
                  product.productCategory.retail ? "retail" : "wholeSale"
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default ProductList;
