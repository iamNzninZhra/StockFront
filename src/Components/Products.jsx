/* eslint-disable no-unused-vars */
import React from 'react'
import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function Products() {
  return (
    <>

      <div style={{ backgroundColor: "#FFFDF0", boxShadow: "5px 5px 32px #e3e1d6", width: "1600px", height: "70px", marginTop: "300px", marginLeft: "30px", paddingTop: "25px", paddingRight: "20px", fontSize: "18px", fontWeight: "500", display: "flex", justifyContent: "space-between", borderTopLeftRadius: "5px", borderTopRightRadius: "5px", border: "1px #adb5bd solid" }}>
        <span style={{ marginRight: "-1270px" }} /> Product Information(From-To)
        <CloseButton />
      </div>

      <div style={{ backgroundColor: "#FFFDF0", boxShadow: "5px 5px 32px #e3e1d6", width: "1600px", height: "950px", marginLeft: "30px", paddingTop: "30px", fontSize: "21px", fontWeight: "620",border: "1px #adb5bd solid" }}>
        <span style={{ marginLeft: "40px" }} />Product Category
        <Form.Select aria-label="Default select example" style={{ width: "50%", marginLeft: "40px", marginTop: "15px", fontSize: "20px", fontWeight: "620" }}>
          <option style={{ fontSize: "18px", fontWeight: "620" }}>CLothes</option>
          <option value="1" style={{ fontSize: "18px", fontWeight: "620" }}>Shoes</option>
          <option value="2" style={{ fontSize: "18px", fontWeight: "620" }}>Bag</option>
          <option value="3" style={{ fontSize: "18px", fontWeight: "620" }}>Cosmetics</option>
        </Form.Select>

        <div style={{ paddingTop: "50px" }} /><span style={{ marginLeft: "40px", }} />Product Full Name
        <FloatingLabel controlId="floatingInput" label="Product Full Name" style={{ width: "500px", height: "50px", marginLeft: "40px", marginTop: "20px", fontSize: "18px", fontWeight: "normal" }}>
          <Form.Control type="input" placeholder="Product Full Name" />
        </FloatingLabel>

        <div style={{ paddingTop: "50px" }} /><span style={{ marginLeft: "40px", }} />Product Serial Number
        <FloatingLabel controlId="floatingInput" label="Serial Number" style={{ width: "500px", height: "50px", marginLeft: "40px", marginTop: "20px", fontSize: "18px", fontWeight: "normal" }}>
          <Form.Control type="input" placeholder="Serial Number" />
        </FloatingLabel>

        <div style={{ paddingTop: "50px" }} /><span style={{ marginLeft: "40px", }} />From Stock
        <Form.Select aria-label="Default select example" style={{ width: "50%", marginLeft: "40px", marginTop: "15px", fontSize: "20px", fontWeight: "620" }}>
          <option style={{ fontSize: "18px", fontWeight: "620" }}>Stocks</option>
          <option value="1" style={{ fontSize: "18px", fontWeight: "620" }}>Mashhad-Ferdowsi</option>
          <option value="2" style={{ fontSize: "18px", fontWeight: "620" }}>Tehran-Tajrish</option>
          <option value="3" style={{ fontSize: "18px", fontWeight: "620" }}>Isfahan-Vakil</option>
          <option value="3" style={{ fontSize: "18px", fontWeight: "620" }}>Mazandaran-Mazan</option>
        </Form.Select>

        <div style={{ paddingTop: "50px" }} /><span style={{ marginLeft: "40px", }} />To Stock
        <Form.Select aria-label="Default select example" style={{ width: "50%", marginLeft: "40px", marginTop: "15px", fontSize: "20px", fontWeight: "620" }}>
          <option style={{ fontSize: "18px", fontWeight: "620" }}>Stocks</option>
          <option value="1" style={{ fontSize: "18px", fontWeight: "620" }}>Semnan-Semnan</option>
          <option value="2" style={{ fontSize: "18px", fontWeight: "620" }}>Shairaz-Hafez</option>
          <option value="3" style={{ fontSize: "18px", fontWeight: "620" }}>Kohkeloye-va-Boyer Ahmad-Boyer</option>
          <option value="3" style={{ fontSize: "18px", fontWeight: "620" }}>Gheshm-Dargahan</option>
        </Form.Select>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{ width: "50%", marginLeft: "40px", marginTop: "50px" }}>
          <Form.Label>Report</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder='محصول... در تاریخ ... از انبار ... خارج و به انبار ... ارسال شده است.' />
        </Form.Group>




      </div>


























    </>
  )
}

export default Products