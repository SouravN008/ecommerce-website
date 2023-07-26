import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, makeStyles } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(2),
  },
  stepper: {
    padding: theme.spacing(3, 0),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
  },
}));

const CreateOrderPage = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Select Products', 'Enter Address', 'Confirm Order'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleConfirmOrder = () => {
    // Implement the order creation logic here using the selected products and address
    // Use the API endpoint /orders to create an order
    // Use the API endpoint /addresses to add the address
    console.log('Order confirmed');
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} className={classes.stepper} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length ? (
        <div>
          <Typography variant="h5" gutterBottom>
            Your order is confirmed.
          </Typography>
        </div>
      ) : (
        <div>
          {/* Render the content for each step here */}
          {/* You can create separate components for each step and conditionally render them based on the activeStep */}
          {/* For example: */}
          {activeStep === 0 && <Step1 />}
          {activeStep === 1 && <Step2 />}
          {activeStep === 2 && <Step3 />}

          <div className={classes.buttonContainer}>
            {activeStep !== 0 && (
              <Button onClick={handleBack}>Back</Button>
            )}
            <Button variant="contained" color="primary" onClick={activeStep === steps.length - 1 ? handleConfirmOrder : handleNext}>
              {activeStep === steps.length - 1 ? 'Confirm Order' : 'Next'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateOrderPage;
