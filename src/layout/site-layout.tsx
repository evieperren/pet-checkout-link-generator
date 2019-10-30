import React, { Fragment } from 'react';
import Title from "../component/title/title";
import logo from "../assets/images/animal-healthcare.png";
import styles from "./site-layout.module.scss";
import LinkGenerator from "../pages/link-generator/link-generator";

const SiteLayout = () => {
    return(
        <Fragment>
            <div className={styles.header_container}>
                <img src={logo} alt="animal healthcare logo" className={styles.logo} />
            </div>
            <Title></Title>
            <div className={styles.outer_content_container}>
                <LinkGenerator></LinkGenerator>
            </div>
        </Fragment>
    )
}
export default SiteLayout;