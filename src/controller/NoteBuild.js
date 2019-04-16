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

  handleDelete(id){

    firebase.firestore().collection('notepad').doc(id).delete().then(function() {
      console.log("Document successfully deleted!");
    })
    .catch(function(error) {
      console.error("Error removing document: ", error);
    });
  }

  handleSubmit(e){

    firebase.firestore().collection('notepad')
    .add({
      heading:this.state.heading,
      author: this.state.author,
      content:this.state.content,
    })
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
          let tempState;
          if (change.type === 'added') {
            tempState =
              [...this.state.notes,
                {
                  heading: change.doc.data().heading,
                  author : change.doc.data().author,
                  content: change.doc.data().content,
                  id     : change.doc.id,
                }
              ];
          }

          if (change.type === 'removed'){
            tempState =
              this.state.notes.filter(
                item=> change.doc.id !== item.id
              );
          }

          this.setState({
            notes:tempState
          })

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
        <Notes info = {this.state.notes} noteDelete={this.handleDelete.bind(this)}/>
      </div>
    );
  }
}

export default NoteBuild;
