import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewTodo.css';

export default function NewTodo({ onItemAdded }) {
  const [label, setLabel] = useState('');
  const [time, setTime] = useState({ mins: '', secs: '' });

  const onLabelChange = (e) => {
    if (e.target.value.length === 1) {
        const labelCorrect = e.target.value.trim().replace(/ +/g, ' ');
        setLabel(labelCorrect);
    } else {
      setLabel(e.target.value);
    }
};

  const onSubmit = (e) => {
    e.preventDefault();
    const sec = Math.abs(Number(time.mins) * 60) + Math.abs(Number(time.secs));
     onItemAdded(label, sec);

    setLabel('');
    setTime({ mins: '', secs: '' })
};

    return (
    <header className="header">
            <h1>todos</h1>
      <form className="new-todo-form" onSubmit={onSubmit}>
      <input type="text"
           className="new-todo"
           placeholder="What needs to be done?"
           autoFocus
           onChange={onLabelChange}
           value={label}
           required/>
           <input name="mins" value={time.mins} className="new-todo-form__timer" placeholder="Min"
           onChange={(e) => setTime((prev) => ({ ...prev, mins: e.target.value }))}
         />
          <input name="secs" value={time.secs} className="new-todo-form__timer" placeholder="Sec"
          onChange={(e) => setTime((prev) => ({ ...prev, secs: e.target.value }))}
        />
          <input className="hidden" type="submit" />
      </form>
    </header>
    );
  }

NewTodo.defaultProps = {
  onItemAdded: () => {},
};

NewTodo.propTypes = {
  onItemAdded: PropTypes.func,
};