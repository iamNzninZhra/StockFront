/* eslint-disable no-unused-vars */
import React from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import '../index.css'

function Category() {
    return (
        <>
            <div style={{ backgroundColor: "#FFFDF0", boxShadow: "5px 5px 32px #e3e1d6", width: "1600px", height: "70vh", margin: "0 auto", paddingTop: "30px", fontSize: "21px", fontWeight: "620", border: "1px #adb5bd solid", fontFamily: "Yekan" }}>
                <span style={{ marginLeft: "40px" }} />Product Category
                <Form.Select aria-label="Default select example" style={{ width: "50%", marginLeft: "40px", marginTop: "15px", fontSize: "20px", fontWeight: "620" }}>
                    <option style={{ fontSize: "18px", fontWeight: "620" }}>Clothes</option>
                    <option value="1" style={{ fontSize: "18px", fontWeight: "620" }}>Shoes</option>
                    <option value="2" style={{ fontSize: "18px", fontWeight: "620" }}>Bag</option>
                    <option value="3" style={{ fontSize: "18px", fontWeight: "620" }}>Cosmetics</option>
                </Form.Select>

                <div style={{ paddingTop: "50px" }} />
                <span style={{ marginLeft: "40px" }} />Product Full Name
                <FloatingLabel controlId="floatingInput" label="Product Full Name" style={{ width: "500px", height: "50px", marginLeft: "40px", marginTop: "20px", fontSize: "18px", fontWeight: "normal" }}>
                    <Form.Control type="input" placeholder="Product Full Name" />
                </FloatingLabel>

                <div style={{ paddingTop: "50px" }} />
                <span style={{ marginLeft: "40px" }} />Product Serial Number
                <FloatingLabel controlId="floatingInputSerial" label="Serial Number" style={{ width: "500px", height: "50px", marginLeft: "40px", marginTop: "20px", fontSize: "18px", fontWeight: "normal" }}>
                    <Form.Control type="input" placeholder="Serial Number" />
                </FloatingLabel>

                <div style={{ paddingTop: "50px" }} />
                <span style={{ marginLeft: "40px" }} />Second Product Serial Number <small style={{ fontWeight: "400" }}>(In Case Serial Number Change)</small>
                <FloatingLabel controlId="floatingInputSecondSerial" label="Second Serial Number" style={{ width: "500px", height: "50px", marginLeft: "40px", marginTop: "20px", fontSize: "18px", fontWeight: "normal" }}>
                    <Form.Control type="input" placeholder="Second Serial Number" />
                </FloatingLabel>
            </div>
        </>
    );
}

export default Category;