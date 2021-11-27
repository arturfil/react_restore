
import { useEffect } from "react";
import Loader from "../../app/layout/Loader";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";
import ProductList from "./ProductList";

export default function Catalog() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(productSelectors.selectAll);
  const {productsLoaded, status} = useAppSelector(state => state.catalog);

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch])

  if (status.includes('pending')) return <Loader message="Getting Products" />;

  
  return (
    <>
      <ProductList products={products} />
    </>
  );

}