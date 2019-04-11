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
    docRef.get()
          .then((snapshots)=>snapshots.forEach(
            doc=>{

              let tempState =
                [...this.state.notes,
                  {
                    heading: doc.data().heading,
                    author:  doc.data().author,
                    content: doc.data().content
                  }
                ];
              this.setState({
                notes:tempState
              })
            }
          ))
          .then(()=>console.log('read data successfully'))
          .catch(err=>{console.log(err)});

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
