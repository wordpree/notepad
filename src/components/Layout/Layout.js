import React from 'react';
import Header from '../Header/Header';
import Form from '../Form/Form';
import NoteBuild from '../../controller/NoteBuild';

const Layout = ()=>{
  const style={
    maxWidth:'90%',
    margin: 'auto'
  }
  return (
    <React.Fragment>
      <Header />
      <main className="content-entry" style={style} >
        <Form />
        <NoteBuild />
      </main>
    </React.Fragment>
  );
};

export default Layout;
