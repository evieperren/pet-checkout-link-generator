import React, { Fragment } from 'react';

const Guide = () => {
    return (
        <Fragment>
            <p>Below is a step by step guide for allowing your customers to start a path to purchase via our checkout. It works by using your individual code to send customers directly to our checkout on behalf of your practice. Plans you have allowed to be sold online will generate for them to be selected. We will collect the customers and their pet’s details to be sent to your systems. </p>
            <h2>Step by Step guide</h2>
            <ol>
                <li>enter your 6 digit code - this would be given to your by the AHC representative</li>
                <li>Enter the text to display on your button - this is what the customer will see and click on</li>
                <li>choose your styling - If your wish to change your styling of the button in the future you are able return here and copy the new code snippet after your changes have been made</li>
                <li>copy and paste the HTML snippet - copy and paste the snippet into the HTML of the destination website</li>
                <li>give it a go!</li>
            </ol>
        </Fragment>
    )
}

export default Guide;