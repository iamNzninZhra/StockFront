/* eslint-disable no-unused-vars */
import React from 'react'
import { Form, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'
function AppearanceInfo() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", fontFamily: "Yekan" }} className='flex-container flex-xl-wrap'>
                {/* <div style={{}} /><span style={{}} />Weight */}
                <FloatingLabel controlId="floatingInput" label="Weight" style={{ width: "250px", height: "50px", marginLeft: "40px", marginTop: "80px", fontSize: "18px", fontWeight: "normal" }}>
                    <Form.Control type="input" placeholder="Weight" />
                </FloatingLabel>
                {/* <div style={{ paddingTop: "50px" }} /><span style={{ marginLeft: "40px", }} />Width */}
                <FloatingLabel controlId="floatingInput" label="Width" style={{ width: "250px", height: "50px", marginLeft: "40px", marginTop: "80px", fontSize: "18px", fontWeight: "normal" }}>
                    <Form.Control type="input" placeholder="Width" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInput" label="Length" style={{ width: "250px", height: "50px", marginLeft: "-540px", marginTop: "200px", fontSize: "18px", fontWeight: "normal" }}>
                    <Form.Control type="input" placeholder="length" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInput" label="Height" style={{ width: "250px", height: "50px", marginLeft: "40px", marginTop: "200px", fontSize: "18px", fontWeight: "normal" }}>
                    <Form.Control type="input" placeholder="Height" />
                </FloatingLabel>

            </div>
        </>
    )
}

export default AppearanceInfo