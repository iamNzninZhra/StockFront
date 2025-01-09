/* eslint-disable no-unused-vars */
import React from 'react'
import { helix } from 'ldrs'
import { styled } from '@mui/material/styles';
import { Margin } from '@mui/icons-material';

helix.register()

function Loading() {

    const loadingStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#FFFDF0',
    };

    return (
        <>
            <div style={loadingStyle}>
                <l-helix
                    size="45"
                    speed="2.5"
                    color="black"
                >
                </l-helix>
            </div>

        </>
    )
}

export default Loading