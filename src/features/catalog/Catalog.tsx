
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog() {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    agent.Catalog.list().then(products => setProducts(products));
  }, [])

  const addProduct = () => {
    setProducts([
      ...products,
      {
        id: 12341,
        description: "Ttest",
        type: 'Sneakers',
        brand: 'Nike',
        quantityInStock: 80,
        pictureUrl: 'http.deez.pg',
        name: "Balance",
        price: 500
      }])
  }

  return (
    <>
      <ProductList products={products} />
      <Button variant="contained" onClick={addProduct}>Add Button</Button>
    </>
  );

}