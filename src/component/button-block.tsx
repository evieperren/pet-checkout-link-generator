import React from "react";
import styles from "./form.module.scss";

interface ButtonBlockProps {
    template: string;
}

const ButtonBlock = (props: ButtonBlockProps) => {
    function copyToClipboard(){
        console.log(props.template);
    }
    return(
        <div className={styles.button_block}>
            <code>
                {props.template}
            </code>
            <button type="button" onClick={copyToClipboard}>Copy me</button>
        </div>
    )
}
export default ButtonBlock;