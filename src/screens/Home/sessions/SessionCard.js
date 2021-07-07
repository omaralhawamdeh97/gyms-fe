import { Link } from "react-router-dom";
import { ProductWrapper, CardImage } from "../../../stylesles";
const SessionCard = ({ session }) => {
  return (
    <ProductWrapper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/gyms/classes/${session.slug}`}>
        <p>{session.name}</p>
      </Link>
    </ProductWrapper>
  );
};
export default SessionCard;
