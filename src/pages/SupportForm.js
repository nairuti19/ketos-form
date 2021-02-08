import React from 'react';
import {Grid} from '@material-ui/core/';
import { useForm, CustomForm } from '../components/useForm';
import TextInput from '../components/TextInput';
import CustomButton from '../components/CustomButton';

const initialValues = {
    id: 0, 
    firstName: '',
    lastName: '',
    email: '', 
    requestMessage: '',
}

export default function SupportForm() {

    const validate = () => {
        let validateTemp = {}
        validateTemp.firstName = values.firstName?"":"This field is required"
        validateTemp.lastName = values.lastName?"":"This field is required"
        validateTemp.emailFormat = (/$^|.+@.+..+/).test(values.email) ? "" : "Email is not valid."
        validateTemp.email = values.email?"":"This field is required"
        validateTemp.requestMessage = values.requestMessage?"":"This field is required"
        setErrors({
            ...validateTemp
        })
        return Object.values(validateTemp).every(x => x == "")
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(validate()){}
            window.alert('testing...')
    }

    const{
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialValues);

    return ( 
        <CustomForm onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                <TextInput
                  name="firstName"
                  label="First Name"
                  value={values.firstName}
                  onChange={handleInputChange}
                  error={errors.firstName}
                  />
                </Grid>
                <Grid item xs={6}>
                <TextInput
                    variant="outlined"
                    label="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleInputChange}
                    error={errors.lastName}
                    />
                </Grid>
                <Grid item xs={12}>
                <TextInput
                   name="email"
                   label="Email Address"
                   value={values.email}
                   onChange={handleInputChange}
                   error={errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                <TextInput
                   name="requestMessage"
                   label="Please describe the problem"
                   value={values.requestMessage}
                   onChange={handleInputChange}
                   error={errors.requestMessage}
                  />
                </Grid>
                <Grid item xs={12}>
                <CustomButton
                variant = "contained"
                size = "large"
                color = "primary"
                text= "Submit"
                type="submit"/>
                </Grid>
            </Grid>
        </CustomForm>
    )
}