import React, { useState, Fragment, useEffect } from 'react';
import styles from './form.module.scss';
import Template from '../template/template';
import CloseIcon from '../../assets/images/times-solid.svg';
import RequiredField from "../required-field/required-field";

export type ColourScheme = { value: "Black", displayName: "Black" } | { value: "DarkBlue", displayName: "Dark Blue" } | { value: "Maroon", displayName: "Maroon" } | { value: "Green", displayName: "Green" };

export const AllColourSchemes: Array<ColourScheme> = [
    { value: "Black", displayName: "Black"},
    { value: "DarkBlue", displayName: "Dark Blue" },
    { value: "Maroon", displayName: "Maroon" },
    { value: "Green", displayName: "Green" },
]

const Form = () => {
    const [practiceID, setPracticeID] = useState('');
    const [text, setText] = useState('Click here');
    const [popup, setPopup] = useState(false);
    const [isRendered, showRender] = useState(false)
    const [returnURL, setReturnURL] = useState('');

    const [colourScheme, setColourScheme] = useState<ColourScheme>({value: "Black", displayName: "Black"});
    const [colourSetting, setColourSettings] = useState({ colour: "white", background: "black" });

    
    useEffect(() => {
        switch (colourScheme.value) {
            case "DarkBlue":
                setColourSettings({ colour: "white", background: "darkblue"});
                break;
            case "Maroon":
                setColourSettings({ colour: "black", background: "maroon" });
                break;
            case "Green":
                setColourSettings({ colour: "black", background: "green" });
                break;
            case "Black":
                setColourSettings({ colour: "white", background: "black" });
                break;
        }
        
    }, [colourScheme]);

    console.log(colourSetting);
    
    

    const htmlContent = `<div style="
        font-family: Arial, Helvetica, sans-serif; 
        background-color: ${colourSetting.background}; 
        display: block;
        padding: 0.5rem 0;
        cursor: pointer;
        margin: 0;
        border: solid #8C8C8C 1px;
        color: ${colourSetting.colour};
        border-radius: 40px;
        text-decoration: none;
        text-align: center;
        font-size: 16px;
        margin: 20px 0;
        width: 300px;">
        <a href="https://www.simplyhealth.co.uk/vets-plan/animalhealthcare-pet-checkout/?practiceID=${practiceID}${returnURL}" target="_blank" style="color: white;
        text-decoration: none;">${text}</a></div>`;

    function handleOnChange(eventArg: React.FormEvent<HTMLInputElement>): void {
        setPracticeID(eventArg.currentTarget.value);
        if (practiceID === '') {
            showRender(false);
        } else {
            showRender(true);
        }
    }
    function handleReturnURL(eventArg: React.FormEvent<HTMLInputElement>): void {
        setReturnURL(eventArg.currentTarget.value);
    }
    function handleText(eventArg: React.FormEvent<HTMLSelectElement>): void {
        setText(eventArg.currentTarget.value);
    }
    function handleSelect(eventArg: React.FormEvent<HTMLSelectElement>): void {

        const colourScheme = AllColourSchemes.find(cs => cs.value === eventArg.currentTarget.value);
        if (colourScheme) {
            setColourScheme(colourScheme);
        }
    }

    return (
        <Fragment>
            <div className={styles.input_container}>
                <RequiredField></RequiredField>
                <label htmlFor="practiceID" className={styles.subheading}>Your practice ID*</label>
                <input type="text" name="practiceID" value={practiceID} onChange={handleOnChange} className={styles.input} />

                <label htmlFor="returnURL" className={styles.subheading}>Your return URL</label>
                <input type="text" name="returnURL" value={returnURL} onChange={handleReturnURL} className={styles.input} />

                <label htmlFor="button-text" className={styles.subheading}>Choose your text*</label>
                <select onChange={handleText} placeholder="Please select" id="button-text">
                    <option value="Click here to join">Click here to join</option>
                    <option value="Click to join our health plan">Click to join our health plan</option>
                    <option value="Click here to add your pet">Click here to add your pet</option>
                    <option value="Join">Join</option>
                    <option value="Add your pet to our health plan">Add your pet to our health plan</option>
                    <option value="Health plan application">Health plan application</option>
                    <option value="Apply now">Apply now</option>
                </select>

                <label htmlFor="size" className={styles.subheading}>Choose your styling*</label>
                <select onChange={handleSelect} placeholder="Please select" id="size" value={colourScheme.value}>
                    {AllColourSchemes.map((cs, index) => <option key={index} value={cs.value}>{cs.displayName}</option>)}
                
                </select>
                <h3 className={styles.subheading}>Preview</h3>
                <div className={styles.example_container}>
                    {isRendered && (
                        <div dangerouslySetInnerHTML={{
                            __html: htmlContent} } />
                    )}
                </div>
                <button onClick={() => setPopup(true)} className={styles.button}>Get code</button>
            </div>

            {popup && (
                <div className={styles.form_container}>
                    <div className={styles.link_container}>
                        <a onClick={() => setPopup(false)} className={styles.close}>
                            <img className={styles.closeIcon} src={CloseIcon} alt='close popup box' />
                        </a>
                        <div className={styles.template_container}>
                            <h4 className={styles.template_title}>Copy into your website...</h4>
                            <Template template={htmlContent} />
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    )
}
export default Form;