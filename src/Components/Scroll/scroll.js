import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  scroll: {
    overflowY: 'scroll',
    border: 'solid black 5px',
    height: '900px',
  },
}));

const Scroll = (props) => {
  const classes = useStyles();
  return <div className={classes.scroll}>{props.children}</div>;
};

export default Scroll;
