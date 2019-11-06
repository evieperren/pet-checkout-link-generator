import React, { Fragment } from 'react';
import Form from "../../component/form/form";
import Guide from "../../component/guide/guide"
import styles from './link-generator.module.scss';

const LinkGenerator = () => {
    return (
        <div className={styles.content_container}>
            <p className={styles.content_container_p}>Below is a step by step guide for allowing your customers to start a path to purchase via our checkout. Each practice has a unique 'Pets Online Join' web page. To access your specific web page you will need to know your specific URL. Below will explain how to find out your practice URL and create a button to use on your website.</p>
            <div className={styles.container}>
                <Guide></Guide>
                <Form></Form>
            </div>
        </div>
    )
}

export default LinkGenerator;