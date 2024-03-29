import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { useAppSelector } from "../../app/store/configureStore";

interface Props {
  subtotal?: number;
}

export default function BasketSummary({subtotal}: Props) {
  const {basket} = useAppSelector(state => state.basket)
  if (subtotal === undefined) {
    subtotal = basket?.items.reduce((sum, item) => sum + (item.quantity * item.price), 0) ?? 0;
  }
  const deliveryFee = subtotal > 100 ? 0 : 10;

  return (
    <>
      <TableContainer component={Paper} variant={'outlined'}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">${subtotal}</TableCell>
            </TableRow> 
            <TableRow>
              <TableCell colSpan={2}>Delivery fee*</TableCell>
              <TableCell align="right">${deliveryFee}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">${subtotal ? subtotal + deliveryFee : deliveryFee}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{fontStyle: 'italic'}}>*Orders over $100 qualify for free delivery</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

