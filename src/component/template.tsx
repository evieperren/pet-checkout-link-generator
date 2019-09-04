import React from 'react';
import styles from "./form.module.scss";

interface TemplateProps{
    template: string; 
}

const Template = (props: TemplateProps) => {
    function copyToClipboard(){
        console.log(props.template);
    }
    return(
        <div className={styles.block}>
            <p>{props.template}</p>
            <br />
            <button type="button" onClick={copyToClipboard}>Copy me</button>
        </div>
    )
}
export default Template;