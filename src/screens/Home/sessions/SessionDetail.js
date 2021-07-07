import { useParams, Redirect, useHistory } from "react-router";
import { useSelector } from "react-redux";
import { ListWrapper, ProductWrapper } from "../../../styles";
import { Link } from "react-router-dom";
import { CardImage } from "../../../styles";
const SessionDetail = () => {
  const { sessionSlug } = useParams();
  const history = useHistory();
  const sessions = useSelector((state) => state.sessionsReducer.sessions);
  const session = sessions?.find((session) => session.slug === sessionSlug);
  const user = useSelector((state) => state.authReducer.user);
  if (user.role === "member") {
    history.replace("/");
  }

  if (!session) return <Redirect to="/" />;
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
          <h3>{session.name}</h3>
          <h6>
            Capacity : {session.capacity}/{session.bookedSlots}
          </h6>
        </ProductWrapper>
      </div>
    </div>
  );
};
export default SessionDetail;
