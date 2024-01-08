import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button, Input, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import "../style.css";

export default function OtherUserDetails({ filename }) {
  //Other User Details
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [mobileNo, setMobileNo] = useState(0);
  const [email, setEmail] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [file, setFile] = useState();
  const [dob, setDOB] = useState("");

  //Residential Adress Details
  const [district, setDistrict] = useState("");
  const [mandal, setMandal] = useState("");
  const [village, setVillage] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const navigate = useNavigate();
  const [review, setReview] = useState(false);

  //Review Part
  const handleSubmit = (e) => {
    e.preventDefault();
    setReview(true);
  };

  const handleStudentDetailsNext = () => {
    navigate("/student/high-school/payment");
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("https://project-wmxw.onrender.com/uploadPhoto", formData, { email })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    axios
      .post("https://project-wmxw.onrender.com/user_apply_personal_details", {
        name,
        dob,
        gender,
        age,
        aadhar,
        mobileNo,
        email,
        fatherName,
      })
      .then((res) => {})
      .catch((err) => console.log(err));

    axios
      .post("https://project-wmxw.onrender.com/user_apply_residential_details", {
        email,
        district,
        mandal,
        village,
        address,
        postalCode,
      })
      .then((res) => {})
      .catch((err) => console.log(err));

    axios
      .post("https://project-wmxw.onrender.com/applicaiton_emails", {
        email,
      })
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  const handleEdit = () => {
    setReview(false);
  };

  const handleNextPreview = () => {
    if (dob.length <= 0) {
      alert("Date of Birth is required");
    } else if (name.length <= 0) {
      alert("Name is required");
    } else if (fatherName.length <= 0) {
      alert("Father name is required");
    } else if (gender.length <= 0) {
      alert("Gender is required");
    } else if (mobileNo.length <= 0) {
      alert("Mobile number is required");
    } else {
      setReview(true);
    }
  };

  return (
    <div className="others-details-div">
      {!review ? (
        <div className="main-sub-div">
          <Typography component="h1" variant="h4" align="center">
            USER PASS Apply
          </Typography>
          <hr />
          <Typography
            variant="h6"
            gutterBottom
            style={{ margin: "20px 0", fontSize: "20px" }}
          >
            <spam>User Details</spam>
          </Typography>
          <div className="sub-divs">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="Name"
                  fullWidth
                  autoComplete="given-name"
                  variant="outlined"
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="father/Guardiansname"
                  name="father/Guardiansname"
                  label="Father/Guardian's Name"
                  fullWidth
                  autoComplete="family-name"
                  variant="outlined"
                  onChange={(e) => setFatherName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="dob"
                  name="dob"
                  label="Date of Birth"
                  type="date"
                  fullWidth
                  autoComplete="shipping address-level2"
                  variant="outlined"
                  onChange={(e) => setDOB(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  select
                  id="gender"
                  name="gender"
                  label="Gender"
                  fullWidth
                  autoComplete="given-name"
                  variant="outlined"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Female">Other</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="age"
                  name="age"
                  label="Age"
                  fullWidth
                  autoComplete="family-name"
                  variant="outlined"
                  onChange={(e) => setAge(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="aadhar"
                  name="aadhar"
                  label="Aadhar"
                  fullWidth
                  autoComplete="family-name"
                  variant="outlined"
                  onChange={(e) => setAadhar(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  type="number"
                  id="mobileNo"
                  name="mobileNo"
                  label="Mobile No"
                  fullWidth
                  autoComplete="family-name"
                  variant="outlined"
                  onChange={(e) => setMobileNo(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  autoComplete="family-name"
                  variant="outlined"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="photo"
                  name="photo"
                  label="Photo"
                  type="file"
                  fullWidth
                  autoComplete="family-name"
                  variant="outlined"
                  onChange={(e) => setFile(e.target.files[0])}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </div>
          <hr />
          <Typography
            variant="h6"
            gutterBottom
            style={{
              marginTop: "40px",
              marginBottom: "20px",
              fontSize: "20px",
            }}
          >
            <spam>Residential Address Details</spam>
          </Typography>
          <div className="sub-divs">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  select
                  id="district"
                  name="district"
                  label="District"
                  fullWidth
                  autoComplete="given-name"
                  variant="outlined"
                  onChange={(e) => setDistrict(e.target.value)}
                >
                  <MenuItem value="Adilabad">Adilabad</MenuItem>
                  <MenuItem value="BhadradriKothagudem">
                    Bhadradri Kothagudem
                  </MenuItem>
                  <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                  <MenuItem value="Jagtial">Jagtial</MenuItem>
                  <MenuItem value="Jayashankar">Jayashankar</MenuItem>
                  <MenuItem value="JogulambaGadwal">Jogulamba Gadwal</MenuItem>
                  <MenuItem value="Kamareddy">Kamareddy</MenuItem>
                  <MenuItem value="Karimnagar">Karimnagar</MenuItem>
                  <MenuItem value="Khammam">Khammam</MenuItem>
                  <MenuItem value="Kumuram Bheem">Kumuram Bheem</MenuItem>
                  <MenuItem value="Mahabubabad">Mahabubabad</MenuItem>
                  <MenuItem value="Mahabubnagar">Mahabubnagar</MenuItem>
                  <MenuItem value="Mancherial">Mancherial</MenuItem>
                  <MenuItem value="Medak">Medak</MenuItem>
                  <MenuItem value="MedchalMalkajgiri">
                    Medchal-Malkajgiri
                  </MenuItem>
                  <MenuItem value="Mulugu">Mulugu</MenuItem>
                  <MenuItem value="Nagarkurnool">Nagarkurnool</MenuItem>
                  <MenuItem value="Nalgonda">Nalgonda</MenuItem>
                  <MenuItem value="Narayanpet">Narayanpet</MenuItem>
                  <MenuItem value="Nirmal">Nirmal</MenuItem>
                  <MenuItem value="Nizamabad">Nizamabad</MenuItem>
                  <MenuItem value="Peddapalli">Peddapalli</MenuItem>
                  <MenuItem value="RajannaSiricilla">
                    Rajanna Siricilla
                  </MenuItem>
                  <MenuItem value="Rangareddy">Rangareddy</MenuItem>
                  <MenuItem value="Sangareddy">Sangareddy</MenuItem>
                  <MenuItem value="Siddipet">Siddipet</MenuItem>
                  <MenuItem value="Suryapet">Suryapet</MenuItem>
                  <MenuItem value="Vikarabad">Vikarabad</MenuItem>
                  <MenuItem value="Wanaparthy">Wanaparthy</MenuItem>
                  <MenuItem value="Warangal Urban">Warangal Urban</MenuItem>
                  <MenuItem value="WarangalRural">Warangal Rural</MenuItem>
                  <MenuItem value="YadadriBhuvanagiri">
                    Yadadri Bhuvanagiri
                  </MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  select
                  id="mandal"
                  name="mandal"
                  label="Mandal"
                  fullWidth
                  autoComplete="given-name"
                  variant="outlined"
                  onChange={(e) => setMandal(e.target.value)}
                >
                  <MenuItem value="Kalher">Kalher</MenuItem>
                  <MenuItem value="Kangti">Kangti</MenuItem>
                  <MenuItem value="Manoor">Manoor</MenuItem>
                  <MenuItem value="Nagilgidda">Nagilgidda</MenuItem>
                  <MenuItem value="Narayankhed">Narayankhed</MenuItem>
                  <MenuItem value="Sirgapoor">Sirgapoor</MenuItem>
                  <MenuItem value="Tadkal">Tadkal</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="village"
                  name="village"
                  label="Village"
                  fullWidth
                  autoComplete="family-name"
                  variant="outlined"
                  onChange={(e) => setVillage(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="address"
                  name="address"
                  label="Address(complete address)"
                  fullWidth
                  autoComplete="family-name"
                  variant="outlined"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="postalCode"
                  name="postalCode"
                  label="Postal Code"
                  fullWidth
                  autoComplete="family-name"
                  variant="outlined"
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </Grid>
            </Grid>
          </div>
          <Button
            type="text"
            onClick={handleNextPreview}
            variant="contained"
            style={{ marginBottom: "5px" }}
          >
            Next To Preview
          </Button>
        </div>
      ) : (
        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            backgroundColor: "white",
            padding: "25px",
            margin: "20px",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            style={{
              marginTop: "10px",
              marginBottom: "40px",
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            <spam>APPLICATION</spam>
          </Typography>
          <div style={{ display: "flex", flex: 1, margin: "20px" }}>
            <div style={{ flex: 1, margin: "20px" }}>
              <TableContainer component={Paper}>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{
                    marginLeft: "25%",
                    fontSize: "20px",
                  }}
                >
                  Student Details
                </Typography>
                <Table>
                  <TableHead style={{ backgroundColor: "#f2f2f2" }}>
                    <TableRow>
                      <TableCell>
                        <strong>Name</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Value</strong>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>{name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Father/ Guardian Name</TableCell>
                      <TableCell>{fatherName}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Date of Birth</TableCell>
                      <TableCell>{dob}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Gender</TableCell>
                      <TableCell>{gender}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Age</TableCell>
                      <TableCell>{age}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Aadhar</TableCell>
                      <TableCell>{aadhar}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Mobile No</TableCell>
                      <TableCell>{mobileNo}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Email</TableCell>
                      <TableCell>{email}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div style={{ flex: 1, margin: "20px" }}>
              <TableContainer component={Paper}>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{
                    marginLeft: "25%",
                    fontSize: "20px",
                  }}
                >
                  Residential Address Details
                </Typography>
                <Table>
                  <TableHead style={{ backgroundColor: "#f2f2f2" }}>
                    <TableRow>
                      <TableCell>
                        <strong>Name</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Value</strong>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>District</TableCell>
                      <TableCell>{district}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Mandal</TableCell>
                      <TableCell>{mandal}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Village</TableCell>
                      <TableCell>{village}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Address</TableCell>
                      <TableCell>{address}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Postal Code</TableCell>
                      <TableCell>{postalCode}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
          <div style={{ margin: "auto" }}>
            <Button
              type="text"
              onClick={handleEdit}
              style={{ marginRight: "8px" }}
              variant="outlined"
            >
              Edit
            </Button>
            <Button
              type="text"
              onClick={handleStudentDetailsNext}
              variant="outlined"
            >
              NEXT
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
