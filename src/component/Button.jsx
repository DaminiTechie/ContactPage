import React from 'react';

const Button = (props) => {
    const baseStyle = {
        padding: '18px 10px',
        minWidth: '220px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        fontSize: '16px',
        border: 'none',
        cursor:'pointer'
    };

    const primaryStyle = {
        ...baseStyle,
        backgroundColor: 'black',
        color: 'white',
    };

    const outlineStyle = {
        ...baseStyle,
        backgroundColor: 'transparent',
        color: 'black',
        border: '1px solid black',
        width:'100%'

    };

    return (
        <button style={props.isOutline ? outlineStyle : primaryStyle}>
            {props.icon}
            {props.text}
        </button>
    );
};

export default Button;
