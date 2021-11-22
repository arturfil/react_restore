import { Paper, Table, TableCell, TableContainer, TableRow } from "@mui/material";
import { useStoreContext } from "../../app/context/StoreContext";

export default function BasketSummary() {
  const {basket} = useStoreContext();

  const subtotal = basket?.items.reduce((acc, item) => acc + (item.price * item.quantity), 0) ?? 0;
  const deliveryFee = subtotal > 100 ? 0 : 10;

  return (
    <>
      <TableContainer component={Paper} variant={'outlined'}>
        <Table>
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
        </Table>
      </TableContainer>
    </>
  )
}

