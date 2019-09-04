import React from 'react';
import styles from "./form.module.scss";

interface HTMLBlockProps{
    template: string; 
}

const HTMLBlock = (props: HTMLBlockProps) => {
    return(
        <div className={styles.html_block}>
            <p>{props.template}</p>
            <br />
            <code>
                <p>CSS styling</p>
                .your-link 	&#123; <br />
                background-color: blue;  <br />
                border-radius: 30px; <br />
                height: 20px; <br />
                padding: 5px; <br />
                &#125;
            </code>
            <button type="button">Copy me</button>
        </div>
    )
}
export default HTMLBlock;