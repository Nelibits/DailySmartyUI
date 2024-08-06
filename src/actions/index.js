import { SET_RECENT_POSTS } from './types';

import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data.posts);
            dispatch({
                type: SET_RECENT_POSTS,
                payload: response.data.posts
            })
        })
    }
}