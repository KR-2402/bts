import "./App.css";

import { useState } from "react";

import StripeCheckout from "react-stripe-checkout";

import axios from "axios";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import pay from "./components/pay.jpeg";


function Pay() {

  //toast.configure()

  const [product] = useState({
    name: "Bus fees",
    price: 3000,
    //description: "This is a sample book",
  });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "http://localhost:8080/checkout",
      { token, product }
    );

    console.log(response.status)

    if (response.status === 200) {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="App">
      <div className="container">
        <br />
        <br />
        <h1 className="text-center">Stripe Checkout</h1>
        <br />
        <h2 className="text-center">Product Info</h2>
        <h3 className="text-center">Product Name: {product.name}</h3>
        <h3 className="text-center">Product Price: {product.price}</h3>
        <h3 className="text-center">
          Product Description: {product.description}
        </h3>
        <br />
        <div className="form-group container">
          <StripeCheckout
            className="center"
            stripeKey="pk_test_51LPWIJSJX6wjsVHYYEku5VbJCglG7I10jWyszbz1uZr1qu2wv0E1ffsmomdNgXY0wzjwYKdLcN1RoDeB7v7iUpcf00C36s6N07"
            token={handleToken}
            amount={product.price * 100}
            name="Sample Book"
            billingAddress
            shippingAddress
          />
          <img src ={pay} width="200px" height="200px"></img>
          
        </div>
      </div>
    </div>
  );
}

export default Pay;