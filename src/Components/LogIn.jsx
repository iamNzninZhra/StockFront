import React from 'react'
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import '../index.css'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Button from 'react-bootstrap/Button';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Loading from './Loading';


export default function Login() {

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Box sx={{ display: 'flex', justifyContent: 'left', marginLeft: "37px" }}>
        <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })} sx={{ fontSize: "20px" }}>
          Log In
        </Button>
      </Box>
    </React.Fragment>
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch or loading process
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />
  };

  return (
    <>
      <div style={{ margin: "100px 610px", fontSize: "21px", fontWeight: "500" }}>
        <Typography sx={{ fontSize: "30px", marginTop: "20px", marginLeft: "30px", fontFamily: "Yekan", backgroundColor: "#007bff", width: "550px", height: "75px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px", color: "#fff", fontWeight: "400", boxShadow: "5px 5px 32px #e3e1d6" }}>
          <span style={{ marginLeft: "20px", lineHeight: "2.7" }} />Stock User
        </Typography>

        <div style={{ backgroundColor: "#FFFDF0", boxShadow: "5px 5px 32px #e3e1d6", width: "550px", height: "500px", marginLeft: "30px", lineHeight: "3.5", fontWeight: "620", }} />

        <div style={{ marginTop: "-475px" }} /><span style={{ marginLeft: "40px" }} />Email Address
        <FloatingLabel controlId="floatingInput" label="Enter Email" style={{ width: "500px", height: "50px", marginLeft: "40px", marginTop: "15px", fontSize: "18px", fontWeight: "normal" }}>
          <Form.Control type="input" placeholder="Password" />
        </FloatingLabel>

        <div style={{ marginTop: "20px" }} /><span style={{ marginLeft: "40px" }} />Password
        <FloatingLabel controlId="floatingPassword" label="Password" style={{ width: "500px", height: "50px", marginLeft: "40px", marginTop: "15px", fontSize: "18px", fontWeight: "normal" }}>
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>

        <Form.Group controlId="formFile" className="mb-3" style={{ width: "500px", height: "50px", marginLeft: "40px", marginTop: "25px", fontSize: "18px", fontWeight: "normal" }}>
          <Form.Label style={{ marginLeft: "5px", fontSize: "21px", fontWeight: "500" }}>File Input</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Form>
          {['checkbox'].map((type) => (
            <div key={`default-${type}`} className="mb-3" style={{ marginLeft: "40px", marginTop: "50px", fontWeight: "400", fontSize: "18px" }}>
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`Check Me Out`}
              />
            </div>
          ))}
        </Form>
        <Box sx={{ width: 500 }}>
          {buttons}
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            message="Successfully Log In!"
            key={vertical + horizontal}
          />
        </Box>


        {/* <Button as="input" type="submit" value="Submit" style={{ marginLeft: "40px", marginTop: "20px" }} /> */}

      </div>
    </>
  );
};