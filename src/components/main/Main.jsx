import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getStories} from "../actions/apis";
import Story from "./story/Story";
import Loader from "../loader/Loader";
import {Button} from "@mui/material";


const Main = () => {
    const dispatch = useDispatch()
    const stories = useSelector(state => state.stories.items)
    const isFetching = useSelector(state => state.stories.isFetching)


    useEffect(()=>{
        dispatch(getStories())
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getStories())
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Button  sx={{ position: 'fixed', top: '20px', left: '20px'}} onClick={() => dispatch(getStories())}>Reload</Button>
        <div>
            {
                isFetching === false
                ?
                    stories.map(({ data: story }) => (
                    <Story key={story.id} story={story} />
                ))
                :
                    <Loader />
            }
        </div>
        </>
    );
};

export default Main;