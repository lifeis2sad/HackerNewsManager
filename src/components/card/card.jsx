import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import { getCurrentStory } from "../actions/apis";
import { Comments } from '../comments/Comments'
import {Button, Link} from "@mui/material";
import {Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";


const useStyles = makeStyles(() => ({
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px'
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '30px'
    }
}));

const Card = (props) => {
    const classes = useStyles();
    const {idx} = useParams()
    const [story, setStory] = useState({});

    useEffect(() => {
        getCurrentStory(idx, setStory)
    }, []);

    const { title, kids, url , id, descendants, by} = story;

    return (
        <div>
            <Button  sx={{ position: 'fixed', top: '20px', left: '20px'}} onClick={()=>props.history.goBack()}>BACK</Button>
            <div>
                {
                    url ? (<Typography variant='h5' className={classes.title}>
                            {title}
                            <Link href={url} underline="hover">:link</Link>
                          </Typography>)
                        :
                        (<Typography variant='h5' className={classes.title}>
                            {title}
                        </Typography>)
                }
                <div className={classes.flex}>
                    <Typography variant='h6' >
                        Writen by: {by}
                    </Typography>

                    <Typography variant='h6' >
                        Date: {new Date(story.time * 1000).toLocaleDateString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric'
                    })}
                    </Typography>
                </div>

                <Typography variant='h6'>
                    Comments: {descendants}
                    <Button onClick={()=>getCurrentStory(idx, setStory)}><RefreshRoundedIcon/></Button>
                </Typography>


                {kids && <Comments commentIds={kids} root id={id}/>}
            </div>
        </div>
    );
};

export default Card;
