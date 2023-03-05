import PropTypes from 'prop-types';
import './Footer.css';
// eslint-disable-next-line no-unused-vars
import Filters from "../Filters/Filters";

// eslint-disable-next-line object-curly-spacing, object-curly-newline
const Footer = ({left, filter, setFilter, clearCompleted}) => (
    <footer className="footer">
        <span className="todo-count">{left} items left</span>
        <Filters
        filter={filter}
        setFilter={setFilter}/>
        <button className="clear-completed"
        onClick={clearCompleted}>Clear completed</button>
    </footer>
);

export default Footer;

Footer.defaultProps = {
  clearCompleted: () => {},
  left: 0,
};

Footer.propTypes = {
  clearCompleted: PropTypes.func,
  left: PropTypes.number,
};