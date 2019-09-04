import React from 'react';
import styles from "./App.module.scss";
import Form from "./component/form";

const App: React.FC = () => {
  console.log('render app');

  return (
    <div className="App">
      <div className={styles.outer_container}>
        <div className={styles.header_container}><h1>header placeholder</h1></div>
        <div className={styles.main_container}>
         <Form title="Fill in your practice ID" description="Example = 123456" ></Form>
        </div>
        <div className={styles.footer_container}>Footer placeholders</div>
      </div>
    </div>
  );
}

export default App;
