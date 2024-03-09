import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { todoAtom } from './store/atoms/todoAtom';
import { filterAtom } from './store/atoms/filterAtom';
import { filterSelector } from './store/selector/filterSelector';

const Dashboard = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [displayTodos, setDisplayTodos] = useState([]);
  const [descriptionFilter, setDescriptionFilter] = useRecoilState(filterAtom);
  const [getTodos, setTodos] = useRecoilState(todoAtom);
  useEffect(() => {
    console.log(getTodos);
    setDisplayTodos(getTodos);
  }, [getTodos])
  function handleSubmit(e) {
    e.preventDefault();
    console.log(getTodos);
    setTodos(prev => [...prev, { title, description }]);

  }
  const filteredTodos = useRecoilValue(filterSelector);
  useEffect(() => {
    setDisplayTodos(filteredTodos);
  }, [descriptionFilter]);

  const handleChange = (e) => {
    setDescriptionFilter(e.target.value);

  };
  return (
    <div>
      <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='description' />
      <input type="text" value={descriptionFilter} onChange={handleChange} placeholder='description filter' />
      <button onClick={handleSubmit}>submit</button>
      <ul>
        {
          getTodos.length > 0 &&
          displayTodos.map((x, i) => {
            return (<li key={i}>title: {x.title} description: {x.description}</li>);
          })
        }
      </ul>
    </div>
  );
}

export default Dashboard;