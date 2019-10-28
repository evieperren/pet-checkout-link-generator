import React, { Fragment } from 'react';
import Form from "../../component/form/form";
import Guide from "../../component/guide/guide"
import FullExample from "../../component/full-example/full-example";

const LinkGenerator = () => {
    return (
        <Fragment>
            <Guide></Guide>
            <Form></Form>
            <FullExample></FullExample>
        </Fragment>
    )
}

export default LinkGenerator;