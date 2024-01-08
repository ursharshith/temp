import { Button } from "@mui/material";
import React, { useState } from "react";

function ViewPass() {
  const [status, setStatus] = useState("none");
  const [statusSuccess, setStatusSuccess] = useState(false);
  const [statusPending, setStatusPending] = useState(false);
  const [statusFailed, setStatusFailed] = useState(false);

  return (
    <div>
      <h4>PASS STATUS : </h4> <label>{status}</label>
      {statusSuccess && (
        <div>
          <Button> View </Button>
          <Button> Download </Button>
        </div>
      )}
      {statusPending && (
        <div>
          <p>Still your pass application is in pending</p>
        </div>
      )}

{statusFailed && (
        <div>
          <p>Your pass got Rejected/Failed</p>
          <p>Please re-apply your pass</p>
          <p>Money has been re-transformed to yout Account</p>
        </div>
      )}
    </div>
  );
}

export default ViewPass;
