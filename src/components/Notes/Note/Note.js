import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = {
  avatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#FF7A66',
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
  },
  ficon: {
    color: '#9fa8da'
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
          <Typography component='p'>
            {singleInfo.content}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="Add to favorites" >
            <FavoriteIcon className={classes.ficon}/>
          </IconButton>
        </CardActions>
      </Card>

  );
}

export default withStyles(styles)(Note);
