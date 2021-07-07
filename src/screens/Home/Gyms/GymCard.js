import { Link } from "react-router-dom";
import { ProductWrapper, CardImage } from "../../../styles";
const GymCard = ({ gym }) => {
  return (
    <ProductWrapper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/gyms/${gym.slug}`}>
        <CardImage alt={gym.name} src={gym.image} />
      </Link>
      <p>{gym.name}</p>
    </ProductWrapper>
  );
};
export default GymCard;
