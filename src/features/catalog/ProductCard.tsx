import { Product } from "../../app/models/product";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";

import FavoriteIcon from '@mui/icons-material/Favorite'
import { Link } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { addBasketItemAsync } from "../basket/basketSlice";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { status } = useAppSelector(state => state.basket);
  const dispatch = useAppDispatch();


  return (
    <Card >
      <CardMedia
        sx={{ height: 140 }}
        image={product.pictureUrl}
      />
      <CardContent>
        <Typography sx={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: "nowrap"}} gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions>
        <LoadingButton 
          loading={status.includes('pendingAddItem' + product.id)} 
          onClick={() => dispatch(addBasketItemAsync({ productId: product.id }))} 
          size="small"
        >
          <FavoriteIcon />
        </LoadingButton>
        <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
      </CardActions>
    </Card>
  )
}