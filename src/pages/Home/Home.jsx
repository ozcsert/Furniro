import CategoryCard from '../../components/Category-Card-Component/CategoryCard';
import Dining from '../../assets/Home/dining.png';
import Living from '../../assets/Home/living.png';
import Bedroom from '../../assets/Home/bedroom.png';


const categories = [
  { name: 'Dining', image: Dining },
  { name: 'Living', image: Living },
  { name: 'Bedroom', image: Bedroom },
];

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <CategoryCard
      title="Browse The Range"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      categories={categories}
    />
  </div>
);

export default Home;