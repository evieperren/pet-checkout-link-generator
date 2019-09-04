import React from 'react';
import styles from "./form.module.scss";

interface AngularBlockProps {
    template: string
}

const AngularBlock = (props: AngularBlockProps) => {
    function copytoclipboard(){
        console.log(props.template);
    }
    return(
        <div className={styles.angular_block}>
            <code>
               {props.template}
            </code>
            <button type="button" onClick={copytoclipboard}>Copy me</button>
        </div>
    )
}
export default AngularBlock;