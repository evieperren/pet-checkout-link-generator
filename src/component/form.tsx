import React, { Fragment , useState} from 'react';
// import styles from './form.module.scss';
// import * as copy from 'copy-to-clipboard';
import Template from './template';

interface FormProps {
    title: string;
    description: string;
}

const Form = (props: FormProps) => {
    const [practiceID, setPracticeID] = useState('');
    const [text, setText] = useState('');
   
    function handleOnChange(eventArg: React.FormEvent<HTMLInputElement>):void{
        setPracticeID(eventArg.currentTarget.value);
    }
    function handleText(eventArg: React.FormEvent<HTMLInputElement>):void{
        setText(eventArg.currentTarget.value);
    }
    // function copyToClipboard(){
    //     const templatestring = "<a href=http:\\somedomain.co.uk?practiceId=<PLACEHOLDER> target=_blank />";
    //     const finalString = templatestring.replace("<PLACEHOLDER>", practiceID);
    //     const finalString2 = `<a href="${practiceID}">Click here</a>`;
    //     console.log(finalString);
    // }
    return(
      <Fragment>
          <label>{props.title}</label>
          <p>{props.description}</p>
          <input type="text" value={practiceID} onChange={handleOnChange} />
          <label>Choose your text</label>
          <input type="text" value={text} onChange={handleText}/>
          <br/>
          <Template template={`<div className="your-link"><a href="${practiceID}">${text}</a></div>`}/>
          <Template template={`<a href="${practiceID}">${text}</a>`}/>
          <Template template={`<Link to="/${practiceID}">${text}</Link>`}/>
          <Template template={`<a ng-href="${practiceID}">${text}</a>`}/>
      </Fragment>
    )
}
export default Form;