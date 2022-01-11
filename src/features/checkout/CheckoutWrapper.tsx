import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import Loader from "../../app/layout/Loader";
import { useAppDispatch } from "../../app/store/configureStore";
import { setBasket } from "../basket/basketSlice";
import CheckoutPage from "./CheckoutPage";

const stripePromise = loadStripe('pk_test_nuCrlciTxrzNBPXHtArKSvnC')

export default function CheckoutWrapper(){
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Payments.createPaymentItent()
      .then(basket => dispatch(setBasket(basket)))
      .catch(error => console.log("ERROR",error))
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) return <Loader message="Loading Checkout"/>

  return (
    <Elements stripe={stripePromise}>
      <CheckoutPage/>
    </Elements>
  )
}