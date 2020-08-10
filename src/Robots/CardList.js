import React from 'react';
import Card from './Card';
import { Paper, Grid, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(8),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    background: '#4dd0e1',
  },
}));
const CardList = ({ robots }) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {robots.map((user, i) => {
          return (
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Card
                  id={user.id}
                  name={user.name}
                  username={user.username}
                  email={user.email}
                />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default CardList;
