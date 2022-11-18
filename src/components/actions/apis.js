import axios from 'axios'
import {setIsFetching, setStories} from "../../reducers/storiesReducer";

export const BASE_API_URL = 'https://hacker-news.firebaseio.com/v0';
export const itemUrl = `${BASE_API_URL}/item/`;


export const getStories = () => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const { data: storyIds } = await axios.get(`${BASE_API_URL}/newstories.json`)
        const stories = await Promise.all(storyIds.slice(0, 100).map(getStory));
        dispatch(setStories(stories))
    }
}

export const getKids = async (commentId, setKidComment) => {
    try {
        const comment = await axios.get(`${itemUrl + commentId}.json`)
        const kidsArray = comment.data.kids

        kidsArray.map(async id => await axios.get(`${itemUrl + id}.json`))
        const kidcomms = await Promise.all(kidsArray.map(async id => await axios.get(`${itemUrl + id}.json`).then(({ data }) => data)));
        setKidComment(kidcomms)
    } catch (error) {
        console.log('Error while getting list of kids.');
    }
};

const getStory = async (id) => {
    try {
        const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
        return story;
    } catch (error) {
        console.log('Error while getting a story.');
    }
};

export const getComment = async (commentId) => {
    try {
        const res = await axios
            .get(`${itemUrl + commentId}.json`)
            .then(({ data }) => data);
        return res;
    } catch (error) {
        console.log('Error while getting a comment.');
    }
};

export const getCurrentStory = async (id, setStory) => {
    const response = await axios.get(`${BASE_API_URL}/item/${id}.json`)
    setStory(response.data)
}