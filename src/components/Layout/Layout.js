import React from 'react';
import Header from '../Header/Header';
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
        <NoteBuild />
      </main>
    </React.Fragment>
  );
};

export default Layout;
