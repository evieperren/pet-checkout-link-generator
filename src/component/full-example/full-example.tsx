import React, { Fragment } from 'react';
import styles from './full-example.module.scss';

const FullExample = () => {
    return (
        <Fragment>
            <h3 className={styles.title}>Full code example</h3>
            <p>Copy and paste the code example to your website:</p>
            <div className={styles.code_container}>
                <pre>
                    <span className={styles.blue}>&lt;html&gt;</span>
                    <br/>
                    <span className={styles.first_indent}>&lt;head&gt;</span><br />
                    <span className={styles.second_indent}>
                        &lt;title&gt;
                            <span className={styles.white}>Your Website Title</span>
                        &lt;/title&gt;
                    </span>
                    <br />
                    <span className={styles.first_indent}>&lt;/head&gt;</span>
                    <br />
                    <span className={styles.first_indent}>&lt;body&gt;</span>
                    <br />
                    <span className={styles.second_indent}>
                        &lt;h1&gt;
                        <span className={styles.white}>Your Website Title</span>
                        &lt;/h1&gt;
                    </span>
                    <br />
                    <span className={styles.second_indent}>&lt;section&gt;</span><br />
                    <span className={styles.third_indent}>
                        &lt;p&gt;
                        <span className={styles.white}>Want to purchase a pet plan ?</span>
                        &lt;/p&gt;
                    </span>
                    <br />
                    <span className={styles.third_indent}>
                        &lt;a <span className={styles.pink}>href="http://path-to-checkout.com"</span> target="_blank" <span>class="small"</span><span className={styles.green}> style="border: 1px solid grey; font-size: 16px; width: 30px; font-size: 70px; background-color: #fff; border-radius: 20px; padding: 5px;"</span>&gt;
                        <span className={styles.white}>Click here</span>
                        &lt;/a&gt;
                    </span>
                    <br />
                    <span className={styles.second_indent}>&lt;/section&gt;</span><br />
                    <span className={styles.first_indent}>&lt;/body&gt;</span><br />
                    <span className={styles.blue}>&lt;/html&gt;</span>
                </pre>
            </div>
        </Fragment>
    )
}

export default FullExample;