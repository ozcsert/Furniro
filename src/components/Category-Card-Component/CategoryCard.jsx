import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CategoryCard.scss';

const CategoryCard = ({ title, description, categories }) => {
  return (
    <div className="category-card">
      <h2 className="category-card__title">{title}</h2>
      <p className="category-card__description">{description}</p>
      <div className="category-card__grid">
        {categories.map((category, index) => (
          <Link to={`/${category.name.toLowerCase()}`} key={index} className="category-card__item">
            <div className="category-card__image-container">
              <img src={category.image} alt={category.name} className="category-card__image" />
            </div>
            <h3 className="category-card__category-name">{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CategoryCard;