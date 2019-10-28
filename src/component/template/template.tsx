import React, { useState } from 'react';
import styles from "../form/form.module.scss";
import copy from 'copy-to-clipboard';

interface TemplateProps{
    template: string; 
}

const Template = (props: TemplateProps) => {
    const [textValue, setTextValue] = useState('Copy me');

    function copyToClipboard(){
        copy(props.template);
        setTextValue('Copied!')
    }
    return(
        <div className={styles.block}>
            <p id="my-text-area">{props.template}</p>
            <button type="button" onClick={copyToClipboard}>{textValue}</button>
        </div>
    )
}
export default Template; 
