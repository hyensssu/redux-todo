import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { deleteTodo, switchTodo } from '../modules/todos';
import { Link } from 'react-router-dom';

function List() {
  //
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  // style
  const StyledH2 = styled.h2`
    margin: 20px;
    font-size: 30px;
    font-weight: 700;
  `;

  const StyledList = styled.div`
    width: 300px;
    border: 1px solid black;
    padding: 20px;
    margin: 20px;
    display: flex;
    justify-content: space-between;

    flex-direction: column;
  `;

  const StyledContents = styled.p`
    margin-bottom: 8px;
  `;

  const StyledButton = styled.div`
    display: flex;
  `;

  //

  // isDone?

  const todoList = todos.filter(todo => todo.isDone === false);
  const doneList = todos.filter(todo => todo.isDone === true);

  return (
    <>
      <StyledH2>todo..</StyledH2>
      {todoList.map(todo => {
        return (
          <StyledList key={todo.id}>
            <StyledContents>{todo.title}</StyledContents>
            <StyledContents>{todo.contents}</StyledContents>
            <StyledButton>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>삭제</button>
              <button onClick={() => dispatch(switchTodo(todo.id))}>
                {todo.isDone ? '완료취소' : '완료'}
              </button>
            </StyledButton>
            <br />
            <Link to={`/${todo.id}`}>상세페이지</Link>
          </StyledList>
        );
      })}
      <StyledH2>done..</StyledH2>
      {doneList.map(todo => {
        return (
          <StyledList key={todo.id}>
            <StyledContents>{todo.title}</StyledContents>
            <StyledContents>{todo.contents}</StyledContents>
            <StyledButton>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>삭제</button>
              <button onClick={() => dispatch(switchTodo(todo.id))}>
                {todo.isDone ? '완료취소' : '완료'}
              </button>
            </StyledButton>
            <br />
            <Link to={`/${todo.id}`}>상세페이지</Link>
          </StyledList>
        );
      })}
    </>
  );
}

export default List;
