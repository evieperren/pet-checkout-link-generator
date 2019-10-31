import React, {useState, Fragment, useEffect} from 'react';
import styles from './form.module.scss';
import Template from '../template/template';
import FullExample from "../full-example/full-example";

import CloseIcon from '../../assets/images/times-solid.svg';

const Form = () => {
    const [practiceID, setPracticeID] = useState('');
    const [text, setText] = useState('');
    const [classname, setClassname] = useState(styles.medium);
    const [popup, setPopup] = useState(false);
    

    function handleOnChange(eventArg: React.FormEvent<HTMLInputElement>):void{
        setPracticeID(eventArg.currentTarget.value);
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
                <label>Your practice ID</label>
                <input type="text" value={practiceID} onChange={handleOnChange} className={styles.input}/>
                <label>Choose your text</label>
                <input type="text" value={text} onChange={handleText} className={styles.input}/>
                <label>Choose your styling</label>
                <select onChange={handleSelect} placeholder="Please select">
                    <option value={styles.large}>Large</option>
                    <option value={styles.medium}>Medium</option>
                    <option value={styles.small}>Small</option>
                </select>
                <label>Preview</label>
                <div className={styles.example_container}>
                    <div className={classname}>
                        <a id={styles.example} className={classname} href='#'>{text}</a>
                    </div>
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
                            <Template template={`<div class="${uniqueClassname}" style="${styling}"><a href="${practiceID}">${text}</a></div>`} />
                            <h4 className={styles.template_title}>For HTML option 2...</h4>
                            <Template template={`<a href="${practiceID}" class="${uniqueClassname}" style="${styling}">${text}</a>`} />
                        </div>
                    </div>
                </div>       
            )}
          
        </Fragment>
    )
}
export default Form;