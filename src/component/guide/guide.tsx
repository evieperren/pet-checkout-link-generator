import React, { Fragment } from 'react';
import styles from "./guide.module.scss";

const Guide = () => {
    return (
        <div className={styles.guide}>
            <h3>Step by step guide</h3>
            <ol>
                <li>Enter your 6 digit code - this would be given to your by the AHC representative</li>
                <br/>
                <li>Enter the text to display on your button - this is what the customer will see and click on</li>
                <br />
                <li>Choose your styling - If your wish to change your styling of the button in the future you are able return here and copy the new code snippet after your changes have been made</li>
                <br />
                <li>Copy and paste the HTML snippet - copy and paste the snippet into the HTML of the destination website</li>
                <br />
                <li>Give it a go!</li>
            </ol>
        </div>
    )
}

export default Guide;