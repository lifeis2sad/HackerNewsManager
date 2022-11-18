import React from 'react';
import { Container } from '@mui/material';
import { Comment } from './Comment';


export const  Comments = ({ commentIds }) => {


  return (
    <Container disableGutters={true}>

      { commentIds.map(
        (id, i) =>
          id && (
            <div key={i} >
              <Comment commentId={id} />
            </div>
          )
      )}

    </Container>
  );
};
