import React, { Component } from 'react';
import Notes from '../components/Notes/Notes';
import Form from '../components/Form/Form';
import DialogSet from '../components/DialogSet/DialogSet';
import Typography from '@material-ui/core/Typography';
import {firebaseInit,firebaseDbDelete,firebaseDbAdd,firebaseDbUpdate,firebaseDbChangeType} from '../Util/firebase';

let firebaseColRef;

class NoteBuild extends Component {

  state= {
    notes:[],
    heading:'',
    author:'',
    content:'',
    open:false,
    dialogheading:'',
    dialogauthor:'',
    dialogcontent:'',
    dialogId:'',
  }

  hanldeFavoriteIconClick(id,like){
    //Favorite icon update
    firebaseDbUpdate({like:!like},firebaseColRef,id)
  }

  dialogStateReset(){
    this.setState({
        open:false,
        dialogheading:'',
        dialogauthor:'',
        dialogcontent:'',
        dialogId:'',
    });
  }

  handleChange(e){
    //input area
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleEdit(field){
    //note edit
    this.setState({
      open: true,
      dialogheading:field.heading,
      dialogauthor :field.author,
      dialogcontent:field.content,
      dialogId     :field.id,
    });

  }

  handleDelete(id){
    //note delete
    firebaseDbDelete(id,firebaseColRef);
  }

  handleSubmit(e){
    //for  new note submit
    firebaseDbAdd({
      heading:this.state.heading,
      author: this.state.author,
      content:this.state.content,},firebaseColRef);
    this.setState({
      heading:'',
      author:'',
      content:'',
    });
    e.preventDefault();
   }

   handleDialogClose(){
     //close note edit dialog
     this.dialogStateReset();
   }

  handleDialogUpdate(e){
    //edited note submit
    firebaseDbUpdate({
      heading:this.state.dialogheading,
      author: this.state.dialogauthor,
      content:this.state.dialogcontent,
    },firebaseColRef,this.state.dialogId)
    this.dialogStateReset();
    e.preventDefault();
  }

  componentWillMount(){
    //init firebase
    firebaseColRef=firebaseInit();
  }

  componentDidMount(){

    firebaseColRef.onSnapshot( //listen for real time data updating
      docs=> docs.docChanges().forEach(
        change=>{
          let notes = firebaseDbChangeType(this.state.notes,change);
          this.setState({
            notes
          });
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
      dialogheading:this.state.dialogheading,
      dialogauthor:this.state.dialogauthor,
      dialogcontent:this.state.dialogcontent,
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
          noteLike={this.hanldeFavoriteIconClick.bind(this)}
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
