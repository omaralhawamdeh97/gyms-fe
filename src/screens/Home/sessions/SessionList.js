import { useSelector } from "react-redux";
import SessionCard from "./SessionCard";
import { ListWrapper } from "../../../styles";
const SessionList = () => {
  const Sessions = useSelector((state) => state.sessionsReducer.Sessions);
  const sessionList = Sessions?.map((session) => (
    <SessionCard session={session} />
  ));
  return (
    <div>
      <h2>Sessions:</h2>
      <ListWrapper>{sessionList}</ListWrapper>
    </div>
  );
};
export default SessionList;
