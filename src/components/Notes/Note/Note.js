import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Tooltip from '@material-ui/core/Tooltip';
import { fade } from '@material-ui/core/styles/colorManipulator';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';

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
  },
  eicon: {
    color: '#283593'
  },
  dicon: {
    color:'#283593',
    '&:hover':{
      color:'#1a237e'
    }
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1.25em'
  },
};

const Note = (props)=>{

  let {singleInfo,classes,onDelete,onEdit,onLike} = props;
  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardHeader
          classes={{
            title: classes.title,
            subheader: classes.subheader
          }}
          title={singleInfo.heading}
          subheader={singleInfo.time}
          avatar={
            <Avatar className={classes.avatar}>{singleInfo.author}</Avatar>
          }
        >
        </CardHeader>
        {/*<CardMedia></CardMedia>*/}
        <CardContent>
          <Typography component='p'>
            {singleInfo.content}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Fab aria-label="Add to favorites" size='small' onClick={onLike} color={singleInfo.like? 'primary':'inherit'} >
            <Tooltip title="Like" placement="bottom" TransitionComponent={Zoom}>
              <FavoriteIcon className={classes.ficon}/>
            </Tooltip>
          </Fab>
          <Fab aria-label="Edit" size='small' onClick={onEdit}>
            <Tooltip title="Edit" placement="bottom" TransitionComponent={Zoom}>
              <EditIcon className={classes.eicon}/>
            </Tooltip>
          </Fab>
          <Fab aria-label="Delete" size='small' onClick={onDelete}>
            <Tooltip title="Delete" placement="bottom" TransitionComponent={Zoom}>
              <DeleteIcon className={classes.dicon}/>
            </Tooltip>
          </Fab>
        </CardActions>
      </Card>

    </React.Fragment>

  );
}

export default withStyles(styles)(Note);
