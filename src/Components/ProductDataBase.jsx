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
            <div>
                
            </div>

        </>
    )
}

export default ProductDataBase