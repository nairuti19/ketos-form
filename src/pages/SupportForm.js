import React from "react";
import { Grid, makeStyles, Typography, Container } from "@material-ui/core/";
import { useForm, CustomForm } from "../components/useForm";
import TextInput from "../components/TextInput";
import CustomButton from "../components/CustomButton";

//Setting initial values for the form fields
const initialValues = {
  id: 0,
  firstName: "",
  lastName: "",
  email: "",
  requestMessage: "",
};

//Adding styles to the component
const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    backgroundColor: "#3879B6",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& .MuiTypography-root": {
      alignSelf: "flex-start",
      marginBottom: theme.spacing(2),
    },
    "& .MuiTypography-body1": {
      marginBottom: theme.spacing(4),
    },
    "& .MuiGrid-root": {
      marginBottom: theme.spacing(1),
    },
  },
}));

//Function to generate a random user id
function uidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

//Function to store customer details
export const addCustomer = async (firstName, lastName, email, requestMessage) => {
    const id = uidGenerator(); 
    const response = await fetch(`https://6aspa9vplk.execute-api.us-east-2.amazonaws.com/dev/customer`, {
        method: 'POST',
        body:JSON.stringify({
          "firstname":firstName,"email": email, "lastname":lastName, "complaint":requestMessage, "id": id
            },
        ),
        headers: {
            "Content-type": 'application/json',
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Methods":"OPTIONS,POST,GET"
        }
    });
    return await response.json();
}


export default function SupportForm() {
  //Validation function to ensure required fields and correct format
  const validate = (fieldValues = values) => {
    let validateTemp = { ...errors };
    if ("firstName" in fieldValues)
      validateTemp.firstName = values.firstName ? "" : "Valid first Name is required";
    if ("lastName" in fieldValues)
      validateTemp.lastName = values.lastName ? "" : "Valid last Name is required";
    if ("email" in fieldValues)
      validateTemp.email = values.email ? "" : "Valid email is required";
      validateTemp.emailFormat = /$^|.+@.+..+/.test(values.email)
        ? ""
        : "Email is not valid";
    if ("requestMessage" in fieldValues)
      validateTemp.requestMessage = values.requestMessage
        ? ""
        : "Problem description is required";
    setErrors({
      ...validateTemp,
    });
    if (fieldValues == values)
      return Object.values(validateTemp).every((x) => x == "");
  };

  //Callback for Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addCustomer(values.firstName, values.lastName, values.email, values.requestMessage).then(r=>r);
    if (validate()) {
      window.alert('Form successfully submitted')
    }
  };

  const { values, setValues, errors, setErrors, handleInputChange } = useForm(
    initialValues,
    true,
    validate
  );

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <Typography variant="h4" className={classes.root}>
          Let us help you
        </Typography>
        <Typography>
          Please describe your issue and we'll get in touch
        </Typography>
        <CustomForm onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextInput
                name="firstName"
                label="First Name"
                value={values.firstName}
                onChange={handleInputChange}
                error={errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
                multiline
                rows={4}
                name="requestMessage"
                label="Please describe the problem"
                value={values.requestMessage}
                onChange={handleInputChange}
                error={errors.requestMessage}
              />
            </Grid>
            <CustomButton
              fullWidth
              variant="contained"
              size="large"
              color="primary"
              text="Submit"
              type="submit"
              className={classes.submit}
            />
          </Grid>
        </CustomForm>
      </div>
    </Container>
  );
}
