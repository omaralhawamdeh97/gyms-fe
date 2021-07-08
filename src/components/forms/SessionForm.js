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
import { addSession } from "../../store/actions/sessionsActions";

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

export default function SessionForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const users = useSelector((state) => state.authReducer.users);
  const filtered = users.filter((user) => user.role === "coach");
  const { classId } = useParams();
  console.log(filtered, "filtered");
  let initialMember = {
    name: "",
    capacity: 0,
    bookedSlots: 0,
    coachId: null,
    classId: classId,
    to: "",
  };
  const [member, setMember] = useState(initialMember);

  const handleChange = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addSession(member));
    history.goBack();
  };
  console.log(member);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add Session
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <div className="ahmad"></div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Capacity"
                name="capacity"
                type="number"
                autoComplete="price"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Booked Slots"
                name="bookedSlots"
                type="number"
                autoComplete="price"
                onChange={handleChange}
              />
            </Grid>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="demo-simple-select-label">Coach</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="coachId"
                required
                onChange={handleChange}
              >
                {filtered.map((filtered) => (
                  <MenuItem value={filtered.id}>{filtered.username}</MenuItem>
                ))}
              </Select>
              <Typography variant="body2" color="textSecondary" align="center">
                Only assigned coaches can be set to sessions
              </Typography>
            </FormControl>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add Session
          </Button>
          <Grid container justify="flex-end">
            <Grid item></Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
