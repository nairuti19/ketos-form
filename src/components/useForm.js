import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/';

//Function that sets the values for form
export function useForm(initialValues, validateOnChange=false, validate) {
    const[values, setValues] = useState(initialValues);
    const[errors,setErrors] = useState({});

    //Function to handle the textfield input
    const handleInputChange = e => {
        const{name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
        if(validateOnChange)
            validate({[name]: value})
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

//Function to generate a form
export function CustomForm(props) {
    const classes = useStyles();
    const {children, ...other} = props;
    
    return (
        <form className={classes.root} {...other}>
            {props.children}
        </form>
    )    
}
