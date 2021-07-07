import { useSelector } from "react-redux";
import ClassCard from "./ClassCard";
import { ListWrapper } from "../../../styles";
const ClassList = () => {
  const Classes = useSelector((state) => state.classesReducer.Classes);
  const classList = Classes?.map((x) => <ClassCard clax={x} />);
  return (
    <div>
      <h2>Classes:</h2>
      <ListWrapper>{classList}</ListWrapper>
    </div>
  );
};
export default ClassList;
