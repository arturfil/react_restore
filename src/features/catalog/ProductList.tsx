import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <Grid sx={{mb: 4}} container spacing={4}>
      {products.map((product) => (
        <Grid key={product.id} item xs={6} sm={4} md={3} lg={3}>
          <ProductCard  product={product} />
        </Grid>
      ))}
    </Grid>
  )
}
