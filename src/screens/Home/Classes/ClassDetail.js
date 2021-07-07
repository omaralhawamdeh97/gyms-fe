import { useParams, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { ListWrapper, ProductWrapper } from "../../../styles";
import { Link } from "react-router-dom";
import { CardImage } from "../../../styles";
const ClassDetail = () => {
  const { classSlug } = useParams();
  const classes = useSelector((state) => state.classesReducer.classes);
  const clax = classes?.find((clax) => clax.slug === classSlug);

  if (!clax) return <Redirect to="/" />;
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "65px",
          justifyContent: "center",
        }}
      >
        <ProductWrapper className="col-lg-4 col-md-6 col-sm-6">
          <h3>{clax.name}</h3>
          <CardImage alt={clax.name} src={clax.image} />
        </ProductWrapper>
      </div>
    </div>
  );
};
export default ClassDetail;
