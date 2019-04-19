import React, { Component } from 'react';
import Notes from '../components/Notes/Notes';
import Form from '../components/Form/Form';
import DialogSet from '../components/DialogSet/DialogSet';
import Typography from '@material-ui/core/Typography';
import firebase from '../Util/firebase';

class NoteBuild extends Component {

  state= {
    notes:[],
    heading:'',
    author:'',
    content:'',
    open:false,
    dialogHeading:'',
    dialogAuthor:'',
    dialogContent:'',
    dialogId:'',
  }

  handleDialogClose(){

    this.setState({
        open:false,
    });
  }

  handleChange(e){

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleEdit(field){

    this.setState({
      open: true,
      dialogHeading:field.heading,
      dialogAuthor :field.author,
      dialogContent:field.content,
      dialogId     :field.id,
    });

  }

  handleDelete(id){

    firebase.firestore().collection('notepad').doc(id).delete()
    .catch(
      error=> {console.error('Error removing document: ', error)}
    );
  }

  handleSubmit(e){

    firebase.firestore().collection('notepad')
    .add({
      heading:this.state.heading,
      author: this.state.author,
      content:this.state.content,
    })
    .catch(
      error=> {console.error('Error adding document: ', error)}
    );
    this.setState({
      heading:'',
      author:'',
      content:'',
    });
    e.preventDefault();
   }

  handleDialogUpdate(e){

    e.preventDefault();
    firebase.firestore().collection('notepad').doc(this.state.dialogId)
    .update({
      heading:this.state.dialogHeading,
      author: this.state.dialogAuthor,
      content:this.state.dialogContent,
    })
    .catch(function(error) {
        console.error('Error updating document: ', error);
    });
    this.setState({open:false});
  }

  componentWillMount(){

    const docRef= firebase.firestore().collection('notepad');
    docRef.onSnapshot( //listen rfor eal time data updating
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
          if (change.type === 'modified'){
            tempState =
              this.state.notes.map(
                item=> {
                  if (change.doc.id === item.id) {
                    item.heading =change.doc.data().heading;
                    item.author  =change.doc.data().author;
                    item.content =change.doc.data().content;
                  }
                  return item;
                }
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

  getDialogData(){
    return {
      dialogHeading:this.state.dialogHeading,
      dialogAuthor:this.state.dialogAuthor,
      dialogContent:this.state.dialogContent,
    }
  }

  render() {

    return (
      <div className="App">
        <Typography
              variant='h5'
              paragraph={true}
              align='center'
              style={{marginTop:'1em',}}
        >
          Compose Your Note Below
        </Typography>
        <Form
          onChange={this.handleChange.bind(this)}
          onSubmit={this.handleSubmit.bind(this)}
          currentData={this.getCurrentData()}
        />
        <Notes
          info = {this.state.notes}
          noteDelete={this.handleDelete.bind(this)}
          noteEdit={this.handleEdit.bind(this)}
        />
        <DialogSet
          data={this.getDialogData()}
          open={this.state.open}
          onDialogClose={this.handleDialogClose.bind(this)}
          onDialogUpdate={this.handleDialogUpdate.bind(this)}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

export default NoteBuild;
