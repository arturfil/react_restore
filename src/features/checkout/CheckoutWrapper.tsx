import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "./CheckoutPage";

const stripePromise = loadStripe('pk_test_nuCrlciTxrzNBPXHtArKSvnC')

export default function CheckoutWrapper( ){
  return (
    <Elements stripe={stripePromise}>
      <CheckoutPage/>
    </Elements>
  )
}