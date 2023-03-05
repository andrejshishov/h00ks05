/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewTodo from '../NewTodo';
import TodoList from '../TodoList/TodoList';
import Footer from '../Footer/Footer';

import './App.css';

export default function App() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('All');

  const createTodoItem = (label, sec) => {
    const time = Number.isNaN(sec) ? 0 : Number(sec);
    return {
      label,
      status: false,
      date: new Date(),
      id: uuidv4(),
      fulltime: time,

    };
  }

  const addItem = (label, sec) => {
    const newItem = createTodoItem(label, sec);

    setItems((todoItems) => [...todoItems, newItem]);
  };

  const deleteItem = (id) => {
      const idx = items.findIndex((el) => el.id === id);
      const newData = [
        ...items.slice(0, idx),
        ...items.slice(idx + 1),
      ];
      setItems(newData)
  };

const toggleProperty = (id, property) => {
  const index = items.findIndex((el) => el.id === id);
  const oldItem = items[index];
  const newItem = {
      ...oldItem,
      [property]: !oldItem[property],
  };
  setItems(() => [
        ...items.slice(0, index),
        newItem,
        ...items.slice(index + 1),
    ]);
}

  const changeTitle = (id, text) => {
        const index = items.findIndex((el) => el.id === id);
        const oldItem = items[index];

        const newItem = { ...oldItem, label: text };

        const newData = [
            ...items.slice(0, index),
            newItem,
            ...items.slice(index + 1),
        ];

        setItems(newData);
};

const changeDeadline = (id, newDeadline) => {
  const index = items.findIndex((el) => el.id === id);
  const oldItem = items[index];

  const newItem = {
      ...oldItem,
      fulltime: newDeadline,
  };
  const newData = [
      ...items.slice(0, index),
      newItem,
      ...items.slice(index + 1),
  ];
  setItems(newData);
};

  const onClearCompleted = () => {
      const compArr = [...items].filter((el) => !el.status);
      setItems(compArr)
  };

   return (
    <section className='todoapp'>
      <NewTodo onItemAdded={addItem}/>
    <section className='main'>
      <TodoList
      items={ items }
      toggleProperty={toggleProperty}
      onDeleted={deleteItem }
      filter={filter}
      changeTitle={changeTitle}
      changeDeadline={changeDeadline}
      />
      <Footer
      left={items.filter((item) => item.status === false).length}
      filter={filter}
      setFilter={setFilter}
      clearCompleted={onClearCompleted }/>
    </section>
    </section>
  )
}
