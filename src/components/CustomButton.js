import Button from '@material-ui/core/Button';
import React from 'react';

export default function CustomButton(props) {
    const{text, size, color, variant, onClick, ...other} = props
    
    return ( 
        <Button
        variant = {variant}
        size = {size}
        color = {color}
        onClick = {onClick}
        {...other}
        >
            {text}
        </Button>
    )
}