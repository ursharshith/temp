import { Alert, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function ViewPass() {

  const [viewMail, setViewMail] = useState("");
  const [status, setStatus] = useState("");
  const [viewStatusData, setViewStatusData] = useState([])
  const [pending, setPending] = useState(false);
  const [failed, setFailed] = useState(false);
  const [success, setSuccess] = useState(false)

  const handleView = () => {
    axios.get(`https://project-wmxw.onrender.com/getStatus/${viewMail}`)
      .then((res) => {
        setViewStatusData(res.data)
        setStatus(res.data.status)
      })
      .catch((err) => console.log(err))
  }

  console.log(viewStatusData)
  console.log(status)

  useEffect(() => {
    if (status === "pending") {
      setPending(true)
    }
    else if (status === "failed") {
      setFailed(true)
    } else if (status === "success") {
      setSuccess(true)
    }
  }, [status])



  return (
    <div style={{backgroundColor:"#fff", margin:"50px", padding:"50px"}}>
      <Typography
        variant="h5"
        gutterBottom
        style={{
          fontSize: "20px",
          marginTop: "10px",
          marginBottom:"40PX"
        }}
      >
        ENTER MAIL TO VIEW PASS
      </Typography>
      <TextField placeholder="enter mail" type="text" required onChange={(e) => setViewMail(e.target.value)} style={{width:"50%", marginBottom:"20px"}}></TextField> <br />
      <Button variant="contained" color="inherit" onClick={handleView}>VIEW</Button>

      {
        pending && (
          <div>
            <h4>YOUR APPLICATION STILL PENDING</h4>
          </div>
        )
      }

      {
        failed && (
          <div style={{color:"red"}}>
            <h4>YOUR APPLICATION HAS REJECTED</h4>
            <h4>Please Re-apply</h4>
          </div>
        )
      }

      {
        success && (
          <div style={{color:"green"}}>
            <h4>YOUR APPLICATION SUCCESS</h4>
          </div>
        )
      }

    </div>
  );
}

export default ViewPass;
