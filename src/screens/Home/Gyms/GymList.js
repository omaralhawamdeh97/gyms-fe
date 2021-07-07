import { useSelector } from "react-redux";
import GymCard from "./GymCard";
import { ListWrapper } from "../../../styles";
const GymList = () => {
  const gyms = useSelector((state) => state.gymsReducer.gyms);
  const gymList = gyms?.map((gym) => <GymCard gym={gym} />);
  return (
    <div>
      <h2>Gyms:</h2>
      <ListWrapper>{gymList}</ListWrapper>
    </div>
  );
};
export default GymList;
