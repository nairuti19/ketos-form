import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/';

export function useForm(initialValues) {

    const[values, setValues] = useState(initialValues);

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
    return (
        <form className={classes.root}>
            {props.children}
        </form>
    )    
}
