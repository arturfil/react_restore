import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import { useAppSelector } from "../../app/store/configureStore";
import ProductCard from "./ProductCard";
import ProductCardSeketon from "./ProductCardSeketon";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  const {productsLoaded} = useAppSelector(state => state.catalog);
  return (
    <Grid sx={{mb: 4}} container spacing={4}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
          {!productsLoaded ? (
            <ProductCardSeketon />
          ) : (
            <ProductCard  product={product} />
          )}
        </Grid>
      ))}
    </Grid>
  )
}
