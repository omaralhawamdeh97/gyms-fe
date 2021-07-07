import { Link } from "react-router-dom";
import { ProductWrapper, CardImage } from "../../../styles";
const ClassCard = ({ clax }) => {
  return (
    <ProductWrapper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/gyms/classes/${clax.slug}`}>
        <CardImage alt={clax.name} src={clax.image} />
      </Link>
      <p>{clax.name}</p>
    </ProductWrapper>
  );
};
export default ClassCard;
