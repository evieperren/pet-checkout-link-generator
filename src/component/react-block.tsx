import React from 'react';
import styles from "./form.module.scss";

interface ReactBlockProps {
    template: string
}

const ReactBlock = (props: ReactBlockProps) => {
    function copyToClipboard(){
        console.log(props.template)
    }
    return (
        <div className={styles.react_block}>
            <code>
                {props.template}
            </code>
            <button type="button" onClick={copyToClipboard}>Copy me</button>
        </div>
    )
}
export default ReactBlock;