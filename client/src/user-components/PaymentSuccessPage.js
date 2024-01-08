import React from "react";
import CheckMark from "../images/check_mark.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../style.css";

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/");
  };
  return (
    <div className="payment-success-page">
      <img
        src={CheckMark}
        alt="Success Illustration"
        style={{ marginTop: "40px", height: "200px", width: "200px" }}
      />
      <h3>Payment Successful</h3>
      <p style={{ marginTop: "20px" }}>Your payment has been successfull.</p>
      <p style={{ marginTop: "20px" }}>Click Done to complete.</p>
      <Button type="text" onClick={handleNext} variant="contained">
        DONE
      </Button>
    </div>
  );
};

export default PaymentSuccessPage;
