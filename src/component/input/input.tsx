import React, { Fragment , useState} from 'react';


const Input = () =>{
    const [practiceID, setPracticeID] = useState('');
    const [text, setText] = useState('');

    function handleOnChange(eventArg: React.FormEvent<HTMLInputElement>): void {
        setPracticeID(eventArg.currentTarget.value);
    }
    function handleText(eventArg: React.FormEvent<HTMLInputElement>): void {
        setText(eventArg.currentTarget.value);
    }

    return(
        <Fragment>
            <input type="text" value={practiceID} onChange={handleOnChange} />
            <label>Choose your text</label>
            <input type="text" value={text} onChange={handleText} />
        </Fragment>
    )
}
export default Input;