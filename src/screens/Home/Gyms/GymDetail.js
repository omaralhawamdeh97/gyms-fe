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
import { Link } from "react-router-dom";

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

  const [query, setQuery] = useState("");
  const user = useSelector((state) => state.authReducer.user);
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

          justifyContent: "center",
        }}
      >
        <ProductWrapper>
          <h3 style={{ marginTop: "20px", marginBottom: "10px" }}>
            {gym.name}
          </h3>
          <CardImage alt={gym.name} src={gym.image} style={{ height: 600 }} />
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

                <MenuItem value={"available"}>Availablity</MenuItem>
              </Select>
            </FormControl>
          </div>
          {user?.role === "admin" || user?.role === "owner" ? (
            <div style={{ justifyContent: "space-around" }}>
              <div>
                <Link to={`/gyms/${gym.id}/classes`}>
                  <Button variant="outlined" color="primary">
                    New Class
                  </Button>
                </Link>
              </div>
              <Link to={`/gyms/${gym.id}/coaches`}>
                <Button variant="outlined" color="primary">
                  Assign a coach
                </Button>
              </Link>
            </div>
          ) : (
            <div />
          )}
          <h3 style={{ marginTop: "20px", marginBottom: "10px" }}>Classes :</h3>
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
