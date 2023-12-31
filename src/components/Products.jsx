import { Card } from "react-bootstrap";

import { useEcommerceContext } from "../context/EcommerceContext";
import { useEffect } from "react";
import axios from "axios";
import { APIs } from "../const/APIs";
export default function Products() {
  const { products, setProducts } = useEcommerceContext();
  const fetchData = async () => {
    await axios
      .get(APIs.ECOMMERCE.PRODUCTS.GET_ALL_PRODUCTS)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <div className="p-4">
      <h1 className="text-center p-2">All Products</h1>
      <div className="row text-center">
        {products.length === 0 ? (
          <h5>No Product Available</h5>
        ) : (
          products.map((product) => {
            return (
              <div className="col col-lg-3 col-md-6 col-sm-12 text-center pb-2">
                <Card style={{ width: "18rem" }} className="shadow">
                  <Card.Img variant="top" src={product.image} height={150} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.category}</Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
