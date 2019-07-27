import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: process.env.REACT_NOTE_FIREBASE_APIKEY,
  authDomain: "notepad-b5762.firebaseapp.com",
  databaseURL: "https://notepad-b5762.firebaseio.com",
  projectId: "notepad-b5762",
  storageBucket: "notepad-b5762.appspot.com",
  messagingSenderId: "147878116265"
};

export function firebaseInit() {
  const firestore = firebase.apps.length ? firebase.app().firestore() : firebase.initializeApp(config).firestore()
  const firebaseRef ={
    dbCollectionRef:firestore.collection('notepad'),
    storageRef:firebase.storage().ref(),
  }
  return  firebaseRef;
}

export function firebaseDbUpdate(data,firebaseColRef,id){
  firebaseColRef.doc(id)
  .update(data)
  .catch(function(error) {
      console.error('Error updating document: ', error);
  });
}

export function firebaseDbDelete(id,firebaseColRef){
  firebaseColRef.doc(id).delete()
  .catch(
    error=> {console.error('Error removing document: ', error)}
  );
}

export function firebaseDbAdd(data,firebaseColRef){
  firebaseColRef.add(data)
  .catch(
    error=> {console.error('Error adding document: ', error)}
  );
}

export function firebaseDbChangeType(notes,change){
  let tempState =[];
  switch (change.type) {
    case 'added':
    tempState =
      [...notes,
        {
          heading: change.doc.data().heading,
          author : change.doc.data().author,
          content: change.doc.data().content,
          id     : change.doc.id,
          like   : change.doc.data().like,
          timeAdd: change.doc.data().timeAdd.toDate().toDateString(),
          imgUrl:  change.doc.data().imgUrl,
        }
      ];
      break;
    case 'removed':
    tempState =
      notes.filter(
        item=> change.doc.id !== item.id
      );
      break;
    case 'modified':
    tempState =
      notes.map(
        item=> {
          if (change.doc.id === item.id) {
            item.heading =change.doc.data().heading;
            item.author  =change.doc.data().author;
            item.content =change.doc.data().content;
            item.imgUrl  =change.doc.data().imgUrl;
            item.like    =change.doc.data().like;
          }
          return item;
        }
      );
      break;
    default:
      tempState=[];
  }
  return tempState;
}

export function firebaseImgUpload(storageRef,file){
  const _ = this;
  const uploadTask = storageRef.child('notes'+file.name).put(file) ;
  uploadTask.on('state_changed',
    snapshot=>{
      _.setState({uploadProgress:true});
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
    },
    err=>{
      switch (err.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          console.log('user canceled upload');
          break;
        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
        default:
      }
    },
    ()=>{
      uploadTask.snapshot.ref.getDownloadURL().then(function(imgUrl) {
        _.setState({imgUrl,uploadProgress:false});
      })
    }
  )
}
