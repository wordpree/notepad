import React, { Component } from 'react';
import Notes from '../components/Notes/Notes';

class NoteBuild extends Component {
  state= {
    info:[
      {
        id:1,
        title:'first note',
        content:'bla bla bla1',
        time:'09-04-2019',
        author:'Hai',
        img:''
      },
      {
        id:2,
        title:'second note',
        content:'bla bla bla2',
        time:'19-04-2019',
        author:'Haij',
        img:''
      },
      {
        id:3,
        title:'third note',
        content:'bla bla bla3',
        time:'29-04-2019',
        author:'Haih',
        img:''
      },
      {
        id:4,
        title:'fourth note',
        content:'bla bla bla3',
        time:'29-04-2019',
        author:'Haihe',
        img:''
      },
      {
        id:5,
        title:'third note',
        content:'bla bla bla3',
        time:'29-04-2019',
        author:'Haih',
        img:''
      }
    ]
  }
  render() {

    return (
      <div className="App">
        <Notes info = {this.state.info} />
      </div>
    );
  }
}

export default NoteBuild;
