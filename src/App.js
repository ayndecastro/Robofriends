import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './Components/Robots/CardList';
// import { robots } from './Components/Robots/robots';
import SearchBox from './Components/SearchBox/SearchBox';
import { Typography, makeStyles } from '@material-ui/core';
import Scroll from './Components/Scroll/scroll';

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: 'SEGA LOGO FONT',
    margin: theme.spacing(4),
    padding: theme.spacing(4),
    color: '#b3e5fc',
  },
}));

function App() {
  const classes = useStyles();
  const [state, setState] = useState({ robots: [] });
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchMyRobots = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const robots = data;

    setState({ robots: robots });
    setLoading(false);
  };

  useEffect(() => {
    fetchMyRobots();
  }, []);

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
      <Scroll>
        {!loading ? <CardList robots={filteredRobots} /> : <h1>Loading...</h1>}
      </Scroll>
    </div>
  );
}

export default App;
