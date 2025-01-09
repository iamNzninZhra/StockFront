/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FloatingActionButton from './FloatingActionButton';
import Loading from './Loading';

function Products() {

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
    return <Loading />; // Show loading spinner while loading
  }

  return (
    <>

      {/* <AppBar /> */}
      {/* <div style={{ backgroundColor: "#FFFDF0", boxShadow: "5px 5px 32px #e3e1d6", width: "1600px", height: "70px", margin: "50px auto", paddingTop: "25px", paddingRight: "20px", fontSize: "18px", fontWeight: "500", display: "flex", justifyContent: "space-between", borderTopLeftRadius: "5px", borderTopRightRadius: "5px", border: "1px #adb5bd solid" }}>
        <span style={{ marginRight: "-1270px" }} /> Product Information(From-To)
        <CloseButton />
      </div> */}
      <FloatingActionButton />

      {/* <div style={{ borderBottom: "2px solid #AAB99A", marginTop: "50px", width: "80%", margin: "50px auto" }}></div> */}

      {/* <div style={{ borderBottom: "2px solid #AAB99A", width: "80%", margin: "80px auto" }}></div> */}
      {/* </div> */}

    </>
  )
}

export default Products