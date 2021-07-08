import { useParams, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { ListWrapper, ProductWrapper } from "../../../styles";
import { Link } from "react-router-dom";
import { CardImage } from "../../../styles";
import SessionCard from "../sessions/SessionCard";
import { Button } from "@material-ui/core";
const ClassDetail = () => {
  const { classSlug } = useParams();
  const user = useSelector((state) => state.authReducer.user);
  const classes = useSelector((state) => state.classesReducer.classes);
  const clax = classes?.find((clax) => clax.slug === classSlug);
  const sessions = useSelector((state) => state.sessionsReducer.sessions);
  const filteredSessions = sessions.filter(
    (session) => session.classId === clax.id
  );

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
          <h6>{clax.price} JD</h6>
          <h6>{clax.type}</h6>
          <h6>{clax.date}</h6>
          <h4>Sessions :</h4>
          {user?.role === "admin" || user?.role === "owner" ? (
            <div style={{ justifyContent: "space-around" }}>
              <div>
                <Link to={`/classes/${clax.id}/session`}>
                  <Button variant="outlined" color="primary">
                    New Session
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div />
          )}
          <ListWrapper>
            {filteredSessions.map((x) => (
              <SessionCard session={x} clax={clax} />
            ))}
          </ListWrapper>
        </ProductWrapper>
      </div>
    </div>
  );
};
export default ClassDetail;
