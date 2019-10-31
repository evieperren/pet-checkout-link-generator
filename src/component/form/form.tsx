import React, {useState, Fragment, useEffect} from 'react';
import styles from './form.module.scss';
import Template from '../template/template';
import FullExample from "../full-example/full-example";

import CloseIcon from '../../assets/images/times-solid.svg';
import { unwatchFile } from 'fs';

const Form = () => {
    const [practiceID, setPracticeID] = useState('');
    const [text, setText] = useState('');
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

    function handleText(eventArg: React.FormEvent<HTMLInputElement>):void{
        setText(eventArg.currentTarget.value);
    }

    function handleSelect(eventArg: React.FormEvent<HTMLSelectElement>):void{
        setClassname(eventArg.currentTarget.value);
    }
    
    let uniqueClassname = '';
    let styling = '';
    switch(classname){
        case 'form_large__2dtRX':
            uniqueClassname = 'large';
            console.log('i am large')
            styling = 'border: 1px solid grey; font-size: 16px; width: 30px; font-size: 70px; background-color: #fff; border-radius: 20px; padding: 5px;'
            break;
        case 'form_small__3Ej2V':
            uniqueClassname = 'small';
            styling = 'border: 1px solid grey; font-size: 16px; width: 30px; font-size: 70px; background-color: #fff; border-radius: 20px; padding: 5px;'
            break;
        default: 
            uniqueClassname = 'medium';
            styling = 'border: 1px solid grey; font-size: 16px; width: 30px; font-size: 70px; background-color: #fff; border-radius: 20px; padding: 5px;'
    }

    
    return(
        <Fragment>
            <div className={styles.input_container}>
                <label htmlFor="practiceID" className={styles.subheading}>Your practice ID</label>
                <input type="text" name="practiceID" value={practiceID} onChange={handleOnChange} className={styles.input}/>
                <label htmlFor="button-text" className={styles.subheading}>Choose your text</label>
                <input type="text" name="button-text" value={text} onChange={handleText} className={styles.input}/>
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
                            <Template template={`<div class="${uniqueClassname}" style="${styling}"><a href="${practiceID}" target="_blank">${text}</a></div>`} />
                            <h4 className={styles.template_title}>For HTML option 2...</h4>
                            <Template template={`<a href="${practiceID}" class="${uniqueClassname}" style="${styling}" target="_blank">${text}</a>`} />
                        </div>
                    </div>
                </div>       
            )}
          
        </Fragment>
    )
}
export default Form;