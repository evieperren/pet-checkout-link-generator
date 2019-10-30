import React, { Fragment } from 'react';
import styles from "./guide.module.scss";

const Guide = () => {
    return (
        <div>
            <h2>Step by Step guide</h2>
            <ol>
                <li>enter your 6 digit code - this would be given to your by the AHC representative</li>
                <li>Enter the text to display on your button - this is what the customer will see and click on</li>
                <li>choose your styling - If your wish to change your styling of the button in the future you are able return here and copy the new code snippet after your changes have been made</li>
                <li>copy and paste the HTML snippet - copy and paste the snippet into the HTML of the destination website</li>
                <li>give it a go!</li>
            </ol>
        </div>
    )
}

export default Guide;