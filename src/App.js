import React, { useState } from 'react';
import './App.css';
import CardList from './Robots/CardList';
import { robots } from './Robots/robots';
import SearchBox from './SearchBox/SearchBox';
import { Typography, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  title: {
    fontFamily: 'SEGA LOGO FONT',
    margin: theme.spacing(4),
    padding: theme.spacing(4),
    color: '#b3e5fc',
  },
}));

function App() {
  const classes = useStyle();
  const [state, setstate] = useState({ robots: robots });
  const [search, setSearch] = useState('');

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredRobots = state.robots.filter((robot) => {
    return robot.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className='App'>
      <Typography variant='h1' className={classes.title} gutterBottom>
        robofriends
      </Typography>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  );
}

export default App;
