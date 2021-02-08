import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/';

export function useForm(initialValues) {

    const[values, setValues] = useState(initialValues);
    const[errors,setErrors] = useState({});

    const handleInputChange = e => {
        const{name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
    }      
}

const useStyles = makeStyles(theme=>({
    root:{
        '& .MuiFormControl-root': {
            width: '90%',
            margin: theme.spacing(1)
        }
    }
}))

export function CustomForm(props) {

    const classes = useStyles();
    const {children, ...other} = props;
    
    return (
        <form className={classes.root} {...other}>
            {props.children}
        </form>
    )    
}
