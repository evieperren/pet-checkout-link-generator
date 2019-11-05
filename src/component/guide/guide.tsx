import React from 'react';
import styles from "./guide.module.scss";

const Guide = () => {
    return (
        <div className={styles.guide}>
            <h3>Step by step guide</h3>
            <ol>
                <li><p>Enter your practice ID</p> Your practice ID will be provided to you as a part of your joining instructions. The practice ID is specific to your practice, it's used to look up your practice details and plans. For example if your practice is '12345', the URL will look like:<p> https://www.simplyhealth.co.uk/animalhealthcare-checkout/?practiceid=<span className={styles.highlight}>12345</span></p></li>
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