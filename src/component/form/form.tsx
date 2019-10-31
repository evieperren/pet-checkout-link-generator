import React, {useState, Fragment} from 'react';
import styles from './form.module.scss';
import Template from '../template/template';
import FullExample from "../full-example/full-example";
import paw from "../../assets/images/exotic.svg";
import CloseIcon from '../../assets/images/times-solid.svg';


const Form = () => {
    const [practiceID, setPracticeID] = useState('');
    const [text, setText] = useState('Click here');
    const [classname, setClassname] = useState(styles.medium);
    const [popup, setPopup] = useState(false);
    const [isRendered, showRender] = useState(false)
    
    function handleOnChange(eventArg: React.FormEvent<HTMLInputElement>):void{
        setPracticeID(eventArg.currentTarget.value);
        if(practiceID === ''){
            showRender(false);
        } else {
            showRender(true);
        }
    }
    
    function handleText(eventArg: React.FormEvent<HTMLSelectElement>):void{
        setText(eventArg.currentTarget.value);
    }
    function handleSelect(eventArg: React.FormEvent<HTMLSelectElement>):void{
        setClassname(eventArg.currentTarget.value);
    }
    
    let uniqueClassname = '';
    let styleDiv = '';
    let styleAnchor = '';
    let styleImage = '';
    switch(classname){
        case 'form_large__2dtRX':
            uniqueClassname = 'large';
            console.log('i am large')
            styleDiv = 'font-family: Arial, Helvetica, sans-serif; background-color: #449FE2; width: 140px; height: 45px; border-radius: 15px; display: flex; align-items: center; padding: 2px;'
            styleAnchor = 'font-size: 18px; text-decoration: none; color: #fff;'
            styleImage = 'width: 40px;'
            break;
        case 'form_small__3Ej2V':
            uniqueClassname = 'small';
            styleDiv = 'font-family: Arial, Helvetica, sans-serif; background-color: #449FE2; width: 120px; height: 40px; border-radius: 15px; display: flex; align-items: center; padding: 2px;'
            styleAnchor = 'font-size: 16px; text-decoration: none; color: #fff;'
            styleImage = 'width: 35px;'
            break;
        default: 
            uniqueClassname = 'medium';
            styleDiv = 'font-family: Arial, Helvetica, sans-serif; background-color: #449FE2; width: 100px; height: 35px; border-radius: 15px;display: flex; align-items: center; padding: 2px;'
            styleAnchor = 'font-size: 14px; text-decoration: none; color: #fff;'
            styleImage = 'width: 30px;'
    }

    
    return(
        <Fragment>
            <div className={styles.input_container}>
                <label htmlFor="practiceID" className={styles.subheading}>Your practice ID</label>
                <input type="text" name="practiceID" value={practiceID} onChange={handleOnChange} className={styles.input}/>

                <label htmlFor="button-text" className={styles.subheading}>Choose your text</label>
                <select onChange={handleText} placeholder="Please select" id="button-text">
                    <option value="Click here">Click here</option>
                    <option value="Purchase">Purchase</option>
                    <option value="Buy">Buy</option>
                </select>

                <label htmlFor="size" className={styles.subheading}>Choose your styling</label>
                <select onChange={handleSelect} placeholder="Please select" id="size">
                    <option value={styles.large}>Large</option>
                    <option value={styles.medium}>Medium</option>
                    <option value={styles.small}>Small</option>
                </select>

                <h3 className={styles.subheading}>Preview</h3>
                <div className={styles.example_container}>
                    {isRendered && (
                        <div className={classname}>
                            <img src={paw} className={classname} alt="paw"/>
                            <a id={styles.example} className={classname} href='#'>{text}</a>
                        </div>
                    )}
                </div>
                <button onClick={() => setPopup(true)} className={styles.button}>Get code</button>
                <FullExample></FullExample>
            </div>

            {popup && (
                <div className={styles.form_container}>
                    <div className={styles.link_container}>
                        <a onClick={() => setPopup(false)} className={styles.close}>
                            <img className={styles.closeIcon} src={CloseIcon} alt='close popup box'/>
                        </a>
                        <div className={styles.template_container}>
                            <h4 className={styles.template_title}>For HTML...</h4>
                            <Template template={`<div class="${uniqueClassname}" style="${styleDiv}">
                            <img src=${paw} style="${styleImage}" alt="paw"/>
                            <a href="${practiceID}" style="${styleAnchor}" target="_blank">${text}</a></div>`} />
                        </div>
                    </div>
                </div>       
            )}
          
        </Fragment>
    )
}
export default Form;