import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import Loader from "../../app/layout/Loader";
import { Order } from "../../app/models/order";
import OrderDetail from "./OrderDetail";

export default function Orders() {
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedOrderNumber, setSelectedorderNumber] = useState(0);

  useEffect(() => {
    agent.Orders.list()
      .then(orders => setOrders(orders))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  if (selectedOrderNumber > 0) return (
    <OrderDetail 
      order={orders?.find(o => o.id === selectedOrderNumber)!}
      setSelectedOrder={setSelectedorderNumber}
    />
  )

  if (loading) return <Loader message="Loading Orders..."/>

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order Number</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Order Date</TableCell>
            <TableCell align="right">Order Status</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((order) => (
            <TableRow
              key={order.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {order.id}
              </TableCell>
              <TableCell align="right">${(order.total).toFixed(2)}</TableCell>
              <TableCell align="right">{order.orderDate.split('T')[0]}</TableCell>
              <TableCell align="right">{order.orderStatus}</TableCell>
              <TableCell align="right">
                <Button onClick={() => setSelectedorderNumber(order.id)}>
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
