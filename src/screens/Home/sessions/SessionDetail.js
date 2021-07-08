import { useParams, Redirect, useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { ListWrapper, ProductWrapper } from "../../../styles";
import { Link } from "react-router-dom";
import { CardImage } from "../../../styles";
import { useEffect } from "react";
import { fetchUsers } from "../../../store/actions/authActions";
const SessionDetail = () => {
  const { sessionSlug } = useParams();
  console.log("hello");
  const dispatch = useDispatch();
  const history = useHistory();
  const sessions = useSelector((state) => state.sessionsReducer.sessions);

  // dispatch(fetchUsers());

  const session = sessions?.find((session) => session.slug === sessionSlug);
  const user = useSelector((state) => state.authReducer.user);
  const users = useSelector((state) => state.authReducer.users);
  const foundUser = users.find((user) => user.id === session.coachId);
  if (user.role === "member") {
    history.goBack();
  }
  console.log(foundUser);
  // if (!session) return <Redirect to="/" />;
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
          <h6>Availabe Slots : {session.capacity - session.bookedSlots}</h6>
          <h6>Assigned Coach :{foundUser.username} </h6>
        </ProductWrapper>
      </div>
    </div>
  );
};
export default SessionDetail;
