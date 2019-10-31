import React, { Fragment } from 'react';
import Form from "../../component/form/form";
import Guide from "../../component/guide/guide"
import FullExample from "../../component/full-example/full-example";
import styles from './link-generator.module.scss';

const LinkGenerator = () => {
    return (
        <div className={styles.content_container}>
            <p className={styles.content_container_p}>Below is a step by step guide for allowing your customers to start a path to purchase via our checkout. It works by using your individual code to send customers directly to our checkout on behalf of your practice. Plans you have allowed to be sold online will generate for them to be selected. We will collect the customers and their pet’s details to be sent to your systems. </p>
            <div className={styles.container}>
                <Guide></Guide>
                <Form></Form>
            </div>
        </div>
    )
}

export default LinkGenerator;