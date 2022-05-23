import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

function App() {
  const [amount, setAmount] = useState(60);
  const [name, setName] = useState();

  const handleToken = (token) => {
    fetch("http://localhost:5000/payment/donate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, amount }),
    })
      .then((res) => res.json())
      .then((_) => {
        window.alert("Transaction Successful.");
        window.location = "/taxi/book";
      })
      .catch((_) => window.alert("Transaction Failed."));
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
        gap: 15,
      }}
    >
      <div className="container border border-dark  mt-5 col-md-5">
        <div className="form-group row">
          <div className="col-lg-12 margin-tb">
            <div>
              &nbsp;
              <h2 className="text-center">Credit Card Payment</h2>
              &nbsp;
            </div>
          </div>
        </div>

        <form className="py-3">
          <FormControl sx={{ m: 1 }} className="col-md-12">
            <InputLabel htmlFor="outlined-adornment-holdername">
              Card Holder Name
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-holdername"
              value={name}
              onChange={handleNameChange}
              startAdornment={
                <InputAdornment position="start"></InputAdornment>
              }
              label="holdername"
            />
          </FormControl>
          <br />
          <FormControl sx={{ m: 1 }} className="col-md-12">
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={amount}
              onChange={handleAmountChange}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Amount"
            />
          </FormControl>
          &nbsp;
        </form>
      </div>

      <div></div>

      <StripeCheckout
        stripeKey={process.env.REACT_APP_STRIPE_KEY || ""}
        token={handleToken}
        name="Pay Bill"
        panelLabel={`Pay`}
        currency="USD"
        amount={amount * 100}
      ></StripeCheckout>
    </div>
  );
}

export default App;
