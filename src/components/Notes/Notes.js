import React from 'react';
import Note from './Note/Note';
import Search from '../Search/Search';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme=> ({
  root: {
    maxWidth:'100%',
    margin:'auto',
    justifyContent:'center',
    [theme.breakpoints.up('md')]: {
      justifyContent:'flex-start',
    },
  },
  item: {
    [theme.breakpoints.down('md')]: {
      flexGrow: 1,
    }
  }
})

const Notes = (props)=>{
  let {info,classes,noteDelete,noteEdit,noteLike,searchTerm} = props;

  return (
    //filter out unmatching criteria
    <Search searchTerm={searchTerm} notes={info}>
      {data=>
        <Grid container spacing={40} className={classes.root} >
          {
            data.map(item=>
              <Grid key={item.id} item xs={12} md={6} lg={4} className={classes.item} >
                <Note
                  singleInfo={item}
                  onDelete={()=>noteDelete(item.id)}
                  onEdit={()=>noteEdit(item)}
                  onLike={()=>noteLike(item.id,item.like)}
                />
              </Grid>
            )
          }
        </Grid>
      }
    </Search>
  );
}

export default withStyles(styles)(Notes);
