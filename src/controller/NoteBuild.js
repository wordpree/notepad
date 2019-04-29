import React, { Component } from 'react';
import Notes from '../components/Notes/Notes';
import Form from '../components/Form/Form';
import DialogSet from '../components/DialogSet/DialogSet';
import Typography from '@material-ui/core/Typography';
import {firebaseInit,firebaseDbDelete,firebaseDbAdd,firebaseDbUpdate,firebaseDbChangeType,firebaseImgUpload} from '../Util/firebase';

let firebaseRef ={};

class NoteBuild extends Component {

  state= {
    notes:[],
    heading:'',
    author:'',
    content:'',
    imgUrl:null,
    uploadProgress:false,
    open:false,
    dialogheading:'',
    dialogauthor:'',
    dialogcontent:'',
    dialogId:'',
  }

  hanldeFavoriteIconClick(id,like){
    //Favorite icon update
    firebaseDbUpdate({like:!like},firebaseRef.dbCollectionRef,id);
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

  handleUpLoad(e){
    //upload area
    const file = e.target.files[0];
    if (file) {
      firebaseImgUpload.call(this,firebaseRef.storageRef,file);
    }
    e.preventDefault();
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
    firebaseDbDelete(id,firebaseRef.dbCollectionRef);
  }

  handleSubmit(e){

    e.preventDefault();
    if(this.state.imgUrl) {
      //for  new note submit
      firebaseDbAdd({
        heading:this.state.heading,
        author: this.state.author,
        timeAdd:new Date(),
        content:this.state.content,
        imgUrl:this.state.imgUrl,
      },firebaseRef.dbCollectionRef);
      this.setState({
        heading:'',
        author:'',
        content:'',
        imgUrl:null,
      });
    }
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
    },firebaseRef.dbCollectionRef,this.state.dialogId)
    this.dialogStateReset();
    e.preventDefault();
  }

  componentWillMount(){
    //init firebase
    firebaseRef =firebaseInit();
  }

  componentDidMount(){

    firebaseRef.dbCollectionRef.onSnapshot( //listen for real time data updating
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
          onUpLoad={this.handleUpLoad.bind(this)}
          isBtnDisabled={this.state.uploadProgress}
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
