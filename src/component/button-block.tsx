import React from "react";
import styles from "./form.module.scss";

interface ButtonBlockProps {
    template: string;
}

const ButtonBlock = (props: ButtonBlockProps) => {
    return(
        <div className={styles.button_block}>
            <code>
                {props.template}
            </code>
            <button type="button">Copy me</button>
        </div>
    )
}
export default ButtonBlock;