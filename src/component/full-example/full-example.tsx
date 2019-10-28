import React from 'react';
import styles from './full-example.module.scss';

const FullExample = () => {
    return (
        <div>
            <h3>Full Code Example</h3>
            <p>Copy and paste the code example to your website.</p>
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
                        &lt;a href="path-to-checkout" class="small"&gt;
                        <span className={styles.white}>Click here </span>
                        &lt;/button&gt;
                    </span>
                    <br />
                    <span className={styles.second_indent}>&lt;/section&gt;</span><br />
                    <span className={styles.first_indent}>&lt;/body&gt;</span><br />
                    <span className={styles.blue}>&lt;/html&gt;</span>
                </pre>
            </div>
        </div>
    )
}

export default FullExample;