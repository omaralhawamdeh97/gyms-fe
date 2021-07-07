import { useParams, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { ListWrapper, ProductWrapper } from "../../../styles";
import { Link } from "react-router-dom";
import { CardImage } from "../../../styles";
import ClassList from "../Classes/ClassList";
const GymDetail = () => {
  const { gymSlug } = useParams();
  const gyms = useSelector((state) => state.gymsReducer.gyms);
  const gym = gyms?.find((gym) => gym.slug === gymSlug);

  if (!gym) return <Redirect to="/" />;
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
          <h3>{gym.name}</h3>
          <CardImage alt={gym.name} src={gym.image} />
          <h4>Classes:</h4>
          <ClassList />
        </ProductWrapper>
      </div>
    </div>
  );
};
export default GymDetail;
