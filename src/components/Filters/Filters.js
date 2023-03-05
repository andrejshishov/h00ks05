import PropTypes from 'prop-types';
import './Filters.css';

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'completed', label: 'Completed' },
];

// eslint-disable-next-line object-curly-spacing
export default function Filters({filter, setFilter}) {
  // eslint-disable-next-line object-curly-spacing

  const filterState = (e) => {
    const isActive = 'selected';
    if (e.target.classList.contains(isActive)) {
        return;
    }
    setFilter(e.target.textContent);
};

      const buttons = filterButtons.map((filterBtn) => (
            <li key={filterBtn.name}>
                <button
                    className={filter === filterBtn.name ? 'selected' : ' '}
                    type='button'
                    onClick={filterState}
                    label={filterBtn.name}>

                    {filterBtn.name}
                </button>
            </li>
        ))

        return (
          <ul className="filters">
            { buttons }
          </ul>
      );
}

Filters.defaultProps = {
  filter: 'all',
  onFilterChange: () => {},
};

Filters.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};
