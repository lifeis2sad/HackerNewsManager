import React from 'react';
import Moment from 'react-moment';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@mui/material';


export const Meta = ({ article: { by, time } }) => {

  return (
    <List sx={{ borderRadius: 5, backgroundColor: 'rgba(127, 255, 212, 0.2)', width: '100%', p: 0}} >
      {by && (
        <>
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText
              primary={by}
              secondary={
                <Typography component='span' variant='body2'>
                  <Moment unix format='MMM, DD YYYY • hh:mm a'>
                    {time}
                  </Moment>
                </Typography>
              }
            />
          </ListItem>
        </>
      )}
    </List>
  );
};
