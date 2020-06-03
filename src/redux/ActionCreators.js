import * as ActionTypes from './ActionTypes';

import { DISHES } from '../shared/dishes';
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

//this is a thunk because it is returning a function ,here dispatch is a inner function
export const fetchDishes = () => (dispatch) => {

    //loading dishes
    dispatch(dishesLoading(true));
    //after 2 sec delay add dishes 
    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}


//these 3 are returning a action tyoe 
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});