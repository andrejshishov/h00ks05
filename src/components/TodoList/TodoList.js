import { PropTypes } from 'prop-types';
// eslint-disable-next-line no-unused-vars
import TodoListItem from '../TodoListItem';
import './TodoList.css';

export default function TodoList({
 items, onDeleted, toggleProperty, filter, changeTitle, changeDeadline,
}) {
    // eslint-disable-next-line no-shadow
    function filterItems(items, filter) {
      if (filter === 'active') {
        return items.filter((item) => item.status === false);
      }
      if (filter === 'completed') {
        return items.filter((item) => item.status === true);
      }
      return items;
    }

    const elements = filterItems(items, filter).map((item) => (
      <TodoListItem
      {...item}
      key={item.id}
      onDeleted={onDeleted}
      changeTitle={changeTitle}
      toggleProperty={toggleProperty}
      changeDeadline={(newDeadline) => changeDeadline(item.id, newDeadline)
    }
      />
    ));

    return (
      <ul className='todo-list'>
        { elements }
      </ul>
    );
}

TodoList.defaultProps = {
  onDeleted: () => {},
  changeTitle: () => {},
}

TodoList.propTypes = {
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  changeTitle: PropTypes.func,
};
