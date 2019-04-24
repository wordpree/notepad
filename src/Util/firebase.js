import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCK3qVnAYjXV9WJPAABgpxskR9ojmXwR4g",
  authDomain: "notepad-b5762.firebaseapp.com",
  databaseURL: "https://notepad-b5762.firebaseio.com",
  projectId: "notepad-b5762",
  storageBucket: "notepad-b5762.appspot.com",
  messagingSenderId: "147878116265"
};

export function firebaseInit() {
  const firestore = firebase.apps.length ? firebase.app().firestore() : firebase.initializeApp(config).firestore()
  return firestore.collection('notepad');
}

export function firebaseDbUpdate(data,firebaseColRef,id){
  firebase.firestore().collection('notepad').doc(id)
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
