import React from 'react';
import { styled } from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../modules/todos';
import uuid from 'react-uuid';
import { useSelector } from 'react-redux';

function Form() {
  // style
  const StyledForm = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 30px 10px 20px;
    background-color: white;
    border-bottom: 1.5px solid #044704;
  `;

  const StyledInput = styled.input`
    margin-right: 10px;
  `;
  //
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  // state
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  return (
    <>
      <StyledForm>
        <div>
          <StyledInput
            type="text"
            placeholder="title"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <StyledInput
            type="text"
            name="contents"
            value={contents}
            onChange={e => setContents(e.target.value)}
            placeholder="contents"
          />
        </div>
        <button
          onClick={() => {
            dispatch(
              addTodo({
                id: uuid(),
                title,
                contents,
                isDone: false
              })
            );
          }}
        >
          추가하기
        </button>
      </StyledForm>
    </>
  );
}

export default Form;
