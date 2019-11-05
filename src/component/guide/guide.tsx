import React from 'react';
import styles from "./guide.module.scss";

const Guide = () => {
    return (
        <div className={styles.guide}>
            <h3>Step by step guide</h3>
            <ol>
                <li><h4>Enter your practice ID</h4> Your practice ID will be provided to you as a part of your joining instructions. The practice ID is specific to your practice, it's used to look up your practice details and plans. For example if your practice is '12345', the URL will look like:<p> https://www.simplyhealth.co.uk/animalhealthcare-checkout/?practiceid=<span className={styles.highlight}>12345</span></p></li>
            
                <li><h4>Optional: enter your return URL</h4><p>This point is not mandatory, however if you would like to redirect your clients back to your website once they have finished, you can add a return URL to the end of your URL created in step one.</p><p>A button will appear on the confirmation page which the client can use to be redirected to this URL. </p><p>https://www.simplyhealth.co.uk/animalhealthcare-checkout/?practiceid=12345<span className={styles.highlight}>&amp;returnurl=https://www.yourvetpractice.com/</span></p><i>Tip: Don't forget to into the (https) protocol when using a return URL. For example: https://www.yourvetpractice.com is valid, www.yourvetpractice.com is not valid.</i></li>
                <br/>
                <li><h4>Choose your text and styling</h4> If your wish to change your styling of the button in the future you are able return here and copy the new code snippet after your changes have been made.</li>
                <br/>
                <li><h4>'Get code' and copy</h4>Now you have created a URL and button in steps 1, 2 and 3 you can copy the code within 'get code' and put this into your website.</li>
                <br />
            </ol>
        </div>
    )
}

export default Guide;