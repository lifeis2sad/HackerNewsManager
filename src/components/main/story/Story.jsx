import React from 'react';
import {NavLink as RouterLink} from "react-router-dom";
import {Typography, ListItem, ListItemButton, Grow} from '@mui/material';


const Story = (props) => {
    const story = props.story

    return (
        <>
            <Grow in timeout={1250}>
                <ListItem disablePadding >
                    <ListItemButton divider sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100px'}} component={RouterLink} to={`/${story.id}`}>
                        <Typography variant='h6' align='center'>{story.title}</Typography>
                        <div >
                            <Typography variant='subtitle1' sx={{display: 'inline-block', marginRight: '40px'}}>Author: {story.by}</Typography>
                            <Typography variant='subtitle1' sx={{display: 'inline-block', marginRight: '40px'}}>Rating: {story.score}</Typography>
                            <Typography variant='subtitle1' sx={{display: 'inline-block', marginRight: '40px'}} >Posted: {new Date(story.time * 1000).toLocaleDateString('en-US', {
                                hour: 'numeric',
                                minute: 'numeric'
                            })}</Typography>
                        </div>
                    </ListItemButton>
                </ListItem>
            </Grow>




        {/*<div className="story">*/}
        {/*    <div className="story-header">*/}
        {/*        <div className="story-header-name"><NavLink to={`/${story.id}`}>{story.title}</NavLink></div>*/}
        {/*        /!*<div className="story-header-name">{story.title}</div>*!/*/}
        {/*        <div className="story-header-stars">Количество звезд: {story.score}</div>*/}
        {/*    </div>*/}
        {/*    /!*<div className="story-last-commit">Последний коммит: {story.updated_at}</div>*!/*/}
        {/*    <a href={story.url} className="story-link">Ссылка на новость</a>*/}
        {/*    {new Date(story.time * 1000).toLocaleDateString('en-US', {*/}
        {/*        hour: 'numeric',*/}
        {/*        minute: 'numeric'*/}
        {/*    })}*/}
        {/*</div>*/}
        </>
    );
};

export default Story;
