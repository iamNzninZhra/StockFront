/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react';
import Loading from './Loading';

function ProductDataBase() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <div style={{ width: "100%", height: "85px", backgroundColor: "#FFFAEC", display: "flex", justifyContent: "space-around", alignItems: "center", }}>
                <p style={{ fontSize: "23px", }}>ID</p>
                <p style={{ fontSize: "23px", }}>Product Name</p>
                <p style={{ fontSize: "23px", }}>Serial Number</p>
                <p style={{ fontSize: "23px", }}>General Information</p>
                <p style={{ fontSize: "23px", }}>From Stock</p>
                <p style={{ fontSize: "23px", }}>To Stock</p>
                <p style={{ fontSize: "23px", }}>Date Of Departure</p>
                <p style={{ fontSize: "23px", }}>Summary</p>


            </div>

        </>
    )
}

export default ProductDataBase