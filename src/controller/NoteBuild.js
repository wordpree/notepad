import React, { Component } from 'react';
import Notes from '../components/Notes/Notes';
import Form from '../components/Form/Form';
import firebase from '../Util/firebase';

class NoteBuild extends Component {

  state= {
    notes:[],
    heading:'',
    author:'',
    content:'',
  }

  handleChange(e){

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e){

    const docRef= firebase.firestore().collection('notepad');
    docRef.add({
      heading:this.state.heading,
      author: this.state.author,
      content:this.state.content,
    }).then(()=>console.log('set data successfully'))
      .catch(err=>{console.log(err)});
    this.setState({
      heading:'',
      author:'',
      content:'',
    });
    e.preventDefault();
   }

  componentWillMount(){

    const docRef= firebase.firestore().collection('notepad');
    docRef.onSnapshot(
      docs=> docs.docChanges().forEach(
        change=>{
          if (change.type === 'added') {
            let tempState =
              [...this.state.notes,
                {
                  heading: change.doc.data().heading,
                  author:  change.doc.data().author,
                  content: change.doc.data().content
                }
              ];
            this.setState({
              notes:tempState
            })
          }
        })
    )
  }

  getCurrentData(){
    return {
      heading:this.state.heading,
      author:this.state.author,
      content:this.state.content
    }
  }

  render() {

    return (
      <div className="App">
        <Form
          onchange={this.handleChange.bind(this)}
          onsubmit={this.handleSubmit.bind(this)}
          currentData={this.getCurrentData()}
        />
        <Notes info = {this.state.notes} />
      </div>
    );
  }
}

export default NoteBuild;
