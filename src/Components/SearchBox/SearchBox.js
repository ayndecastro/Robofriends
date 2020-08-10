import React from 'react';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '45ch',
  },
}));

const SearchBox = ({ searchChange }) => {
  const classes = useStyles();
  return (
    <div>
      <TextField
        label='Search'
        id='standard-start-adornment'
        className={clsx(classes.margin, classes.textField)}
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
