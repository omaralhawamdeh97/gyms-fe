import { useParams, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { ListWrapper, ProductWrapper } from "../../../styles";
import FormControl from "@material-ui/core/FormControl";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { useDemoData } from "@material-ui/x-grid-data-generator";

import { CardImage } from "../../../styles";
import ClassCard from "../Classes/ClassCard";
import { useState } from "react";
import SearchBar from "../../../components/SearchBar";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const GymDetail = () => {
  const styles = useStyles();
  console.log("gymdeta");
  const [query, setQuery] = useState("");

  const { gymSlug } = useParams();
  const [filterBy, setFilterBy] = React.useState("");
  const gyms = useSelector((state) => state.gymsReducer.gyms);
  const gym = gyms?.find((gym) => gym.slug === gymSlug);
  const classes = useSelector((state) => state.classesReducer.classes);
  const classList = classes?.filter(
    (clax) =>
      clax.gymId === gym.id || clax.name.toLowerCase() === query.toLowerCase()
  );
  const filterByName = classList.filter((clax) =>
    clax.name.toLowerCase().includes(query.toLowerCase())
  );

  const filterByAvailable = classList.filter(
    (clax) => clax.isAvailable === true
  );
  console.log(filterByAvailable);
  if (!gym) return <Redirect to="/" />;
  const handleChange = (event) => {
    setFilterBy(event.target.value);
  };

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
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <SearchBar setQuery={setQuery} />
            <FormControl
              style={{ marginRight: "50px" }}
              variant="filled"
              className={styles.formControl}
            >
              <InputLabel id="demo-simple-select-filled-label">
                Filter By
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={filterBy}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"date"}>Date</MenuItem>
                <MenuItem value={"available"}>Available</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button variant="outlined" color="primary">
            New Class
          </Button>
          <ListWrapper>
            {filterBy === "available"
              ? filterByAvailable.map((x) => <ClassCard clax={x} />)
              : !query
              ? classList.map((x) => <ClassCard clax={x} />)
              : filterByName.map((x) => <ClassCard clax={x} />)}
          </ListWrapper>
        </ProductWrapper>
      </div>
    </div>
  );
};
export default GymDetail;
