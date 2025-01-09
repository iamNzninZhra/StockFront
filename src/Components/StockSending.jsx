/* eslint-disable no-unused-vars */
import React from 'react'
import { Form } from 'react-bootstrap';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'

function StockSending() {
    return (
        <>
            <div style={{ margin: "50px 50px", fontFamily: "Yekan" }}>
                <Form.Label style={{ fontSize: "25px", marginLeft: "40px" }}>From Stock</Form.Label>
                <Form.Select aria-label="Default select example" style={{ width: "50%", marginLeft: "40px", marginTop: "15px", fontSize: "21px", fontWeight: "620" }}>
                    <option style={{ fontSize: "18px", fontWeight: "620" }}>Stocks</option>
                    <option value="1" style={{ fontSize: "18px", fontWeight: "620" }}>Mashhad-Ferdowsi</option>
                    <option value="2" style={{ fontSize: "18px", fontWeight: "620" }}>Tehran-Tajrish</option>
                    <option value="3" style={{ fontSize: "18px", fontWeight: "620" }}>Isfahan-Vakil</option>
                    <option value="3" style={{ fontSize: "18px", fontWeight: "620" }}>Mazandaran-Mazan</option>
                </Form.Select>

                <Form.Label style={{ fontSize: "25px", marginLeft: "40px", marginTop: "50px" }}>To Stock</Form.Label>
                <Form.Select aria-label="Default select example" style={{ width: "50%", marginLeft: "40px", marginTop: "15px", fontSize: "21px", fontWeight: "620" }}>
                    <option style={{ fontSize: "18px", fontWeight: "620" }}>Stocks</option>
                    <option value="1" style={{ fontSize: "18px", fontWeight: "620" }}>Semnan-Semnan</option>
                    <option value="2" style={{ fontSize: "18px", fontWeight: "620" }}>Shairaz-Hafez</option>
                    <option value="3" style={{ fontSize: "18px", fontWeight: "620" }}>Kohkeloye-va-Boyer Ahmad-Boyer</option>
                    <option value="3" style={{ fontSize: "18px", fontWeight: "620" }}>Gheshm-Dargahan</option>
                </Form.Select>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{ width: "50%", marginLeft: "40px", marginTop: "50px" }}>
                    <Form.Label style={{ fontSize: "25px" }}>Report</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder='محصول... در تاریخ ... از انبار ... خارج و به انبار ... ارسال شده است.' />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3" style={{ width: "500px", height: "50px", marginLeft: "40px", marginTop: "25px", fontSize: "18px", fontWeight: "normal" }}>
                    <Form.Label style={{ marginLeft: "5px", fontSize: "25px", fontWeight: "500" }}>Product Photo</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Stack direction="row" spacing={2} sx={{ marginLeft: "40px", marginTop: "60px", marginBottom: "20px", width: "300px", height: "40px", fontWeight: "900" }}>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Stack>
            </div>

        </>
    )
}

export default StockSending