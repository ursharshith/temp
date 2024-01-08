import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import QRcode from "qrcode"
import { useNavigate } from "react-router-dom";

const QrGenerationPage = () => {
    const [url, setUrl] = useState('')
    const [qrUrl, setQrUrl] = useState('')
    const navigate = useNavigate()

    const handleGenerate = async () => {
        try {
            const response = await QRcode.toDataURL(url)
            setQrUrl(response)
        } catch (err) {
            console.log(err)
        }
    }

    const handleDone = () => {
        navigate("/admin-portal")
    }

    return (
        <div style={{ backgroundColor: "#fff", margin: "20px 200px" }}>
            <Typography
                variant="h5"
                gutterBottom
                style={{

                    fontSize: "20px",
                    padding: "30px 0"
                }}
            >
                QR GENERATION
            </Typography>
            <TextField placeholder="enter url link" onChange={(e) => setUrl(e.target.value)}></TextField> <br />
            <Button variant="contained" color="info" onClick={handleGenerate}>Genterte</Button> <br /><br />
            {qrUrl ? (
                <div>
                    <a href={qrUrl} download><img src={qrUrl} alt="QR" /></a> <br/>
                    <Button variant="contained" color="success" onClick={handleDone}>Done</Button>
                </div>
            ): null}
        </div>
    )
}

export default QrGenerationPage;