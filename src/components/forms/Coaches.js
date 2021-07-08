import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useEffect } from "react";
import { fetchUsers } from "../../store/actions/authActions";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      HealthCenter.co
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Coaches() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  //   useEffect(() => {
  //     dispatch(fetchUsers());
  //   }, []);
  const users = useSelector((state) => state.authReducer.users);
  const filtered = users.filter(
    (user) => user.role === "member" || user.role === "coach"
  );
  //   const { classId } = useParams();
  console.log(filtered.id, "filtered");
  let initialMember = {
    role: "",
  };
  const [member, setMember] = useState(initialMember);

  const handleChange = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };
  const [id, setId] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(addSession(member));
    history.goBack();
  };
  console.log(id, "id");
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Assign a new coach
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <div className="ahmad"></div>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel id="demo-simple-select-label">Member</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="role"
              required
              onChange={handleChange}
            >
              {filtered.map((filtered) => (
                <MenuItem value={setId(`coach`)}>{filtered.username}</MenuItem>
              ))}
            </Select>
            <Typography variant="body2" color="textSecondary" align="center">
              Only assigned members or coaches can be set to gym coaches
            </Typography>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Assign to coach
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
