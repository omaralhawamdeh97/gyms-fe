import { Link } from "react-router-dom";
import { GymCardDiv, CardImage } from "../../../styles";
const GymCard = ({ gym }) => {
  return (
    <GymCardDiv>
      <Link to={`/gyms/${gym.slug}`}>
        <CardImage alt={gym.name} src={gym.image} />
      </Link>
      <p>{gym.name}</p>
    </GymCardDiv>
  );
};
export default GymCard;
