import {Button, Grow, Typography} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

import React, { useEffect, useState } from 'react';

import {getComment, getKids} from '../actions/apis';
import { Meta } from '../meta/Meta';
import { createMarkup } from '../utils/utils';


const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#fff',
    margin: '10px 0 0 40px',
  },
  comm: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    padding: '10px',
    borderRadius: '10px'
},
}));

const Kids = (kidComments) => {
  return (
      kidComments.kidComments.map((kid, i) => <div key={i}> <Comment commentId={kid.id} /> </div>)
  )
}

export const Comment = ({ commentId }) => {
  const [comment, setComment] = useState({});
  const [kidComments, setKidComments] = useState([]);

  useEffect(() => {
    getComment(commentId).then((data) => data && data.type && setComment(data));
  }, []);

  const { text, kids } = comment;
  const classes = useStyles();

  return (
    <Grow in timeout={500}>
      <div className={classes.root} >
      { comment && (
        <>
          <Meta article={comment} />
          <Typography
            className={classes.comm}
            variant='body2'
            dangerouslySetInnerHTML={createMarkup(text)}
          />
          { kids && <Button onClick={()=>getKids(commentId, setKidComments)}>view answers</Button>}

          {kidComments && <Kids kidComments={kidComments} />}
        </>
      )}
      </div>
    </Grow>
  );
};
