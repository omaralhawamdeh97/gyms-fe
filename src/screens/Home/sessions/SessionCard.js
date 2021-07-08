import { Link } from "react-router-dom";
import { ProductWrapper, CardImage } from "../../../styles";
const SessionCard = ({ session, clax }) => {
  return (
    <ProductWrapper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/gyms/classes/${clax.slug}/sessions/${session.slug}`}>
        <p>{session.name}</p>
      </Link>
      <p>{clax.date}</p>
      <p>
        Slots Available:
        {parseInt(session.capacity) - parseInt(session.bookedSlots)}
      </p>
    </ProductWrapper>
  );
};
export default SessionCard;
