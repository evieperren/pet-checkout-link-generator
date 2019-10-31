import React, { useState, Fragment } from 'react';
import copy from 'copy-to-clipboard';
import styles from './template.module.scss';

interface TemplateProps{
    template: string; 
}

const Template = (props: TemplateProps) => {
    const [textValue, setTextValue] = useState('Copy');

    function copyToClipboard(){
        copy(props.template);
        setTextValue('Copied');
    }
    return(
        <Fragment>
            <div className={styles.template_block}>
                <p className={styles.p}>{props.template}</p>
            </div>
            <button type="button" onClick={copyToClipboard} className={styles.button}>{textValue}</button>
        </Fragment>
    )
}
export default Template; 
