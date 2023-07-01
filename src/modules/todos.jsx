import React from 'react';
import uuid from 'react-uuid';

const initialState = [
  {
    id: uuid(),
    title: 'test1',
    contents: 'contents',
    isDone: false
  },
  {
    id: uuid(),
    title: 'test2',
    contents: 'contents',
    isDone: false
  },
  {
    id: uuid(),
    title: 'test3',
    contents: 'contents',
    isDone: true
  }
];

// action type
const ADD_TODO = 'todos/ADD_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
const SWITCH_TODO = 'todos/SWITCH_TODO';

//action creator
export const addTodo = payload => {
  return {
    type: ADD_TODO,
    payload
  };
};

export const deleteTodo = payload => {
  return {
    type: DELETE_TODO,
    payload
  };
};

export const switchTodo = payload => {
  return {
    type: SWITCH_TODO,
    payload
  };
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter(todo => {
        return todo.id !== action.payload;
      });
    case SWITCH_TODO:
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo;
        } else {
          return { ...todo, isDone: !todo.isDone };
        }
      });
    default:
      return state;
  }
};

export default todos;
