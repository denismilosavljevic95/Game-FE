import * as actionTypes from './actionTypes';
import { updateObject } from '../utils/utils';

const initialState = 
{
    lang: "srb",
    dataHome: {},
    dataMyPosts: []
}


const reducer = (state = initialState, action) => 
{
    switch ( action.type )
    {
        default:
          return state;
    }
}

export default reducer;