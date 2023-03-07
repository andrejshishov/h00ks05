import PropTypes from 'prop-types';
import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { formatDistanceToNowStrict } from "date-fns";
import Timer from '../TodoTimer';
import './TodoListItem.css';

export default function TodoListItem({
 label, toggleProperty, id, date, onDeleted, status, changeTitle, fulltime, changeDeadline,
}) {
  const [labelState, setLabelState] = useState(label);

  const [edit, setEdit] = useState(false);

 const onLabelChange = (e) => {
    setLabelState(e.target.value)
};

const onSubmit = (e) => {
    e.preventDefault();
    changeTitle(e.target.id, labelState);
    setEdit(false);
};

        const field = edit ? (
            <form className='' onSubmit={onSubmit} id={id}>
                <input
                    type='text'
                    className='edit'
                    placeholder='Editing task'
                    onChange={onLabelChange}
                    value={labelState}
                    required
                />
            </form>
        ) : (
            <div className='view'>
                <input
                    id={id.toString()}
                    className='toggle'
                    type='checkbox'
                    onChange={() => toggleProperty(id, 'status')}
                    checked={status}
                />
                <label htmlFor={id} >
                    <span className={status ? 'completed description colorcompleted' : 'description' }>{labelState}</span>
                    <span className="created">
                    <Timer
                    changeDeadline={changeDeadline}
                    fulltime={fulltime}
                    status={status}
                    id={id}
                />
            </span>
                    <span className='created'>created {formatDistanceToNowStrict(date)} ago</span>
                </label>
                <button
                    type='button'
                    className='icon icon-edit float-right'
                    onClick={() => setEdit(true)}
                />
                <button
                    type='button'
                    className='icon icon-destroy float-right'
                    onClick={() => onDeleted(id)}
                />
            </div>
        );

        return <li className={edit ? 'editing' : ''}>{field}</li>;
    }

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
};