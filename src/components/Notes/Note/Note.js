import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Rating from 'material-ui-rating';

const styles = {
  avatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#9c27b0',
  },
  card: {
    backgroundColor:'#5c6bc0',
    '&:hover': {
      backgroundColor: fade('#5c6bc0',0.9)
    }
  },
  title: {
    color:'white',
  },
  subheader: {
    color:'white',
  }
};


const Note = ({singleInfo,classes})=>{

  return (

      <Card className={classes.card}>
        <CardHeader
          classes={{
            title: classes.title,
            subheader: classes.subheader
          }}
          title={singleInfo.title}
          subheader={singleInfo.time}
          avatar={
            <Avatar className={classes.avatar}>{singleInfo.author}</Avatar>
          }
        >
        </CardHeader>
        <CardMedia></CardMedia>
        <CardContent>
          <div className='content'>
            <p>{singleInfo.content}</p>
          </div>
        </CardContent>
        <Rating value={3} max={5} />
      </Card>

  );
}

export default withStyles(styles)(Note);
