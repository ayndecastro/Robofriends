import React from 'react';

const Card = ({ id, name, username, email }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
      <h5>{username}</h5>
      <h5>{email}</h5>
    </div>
  );
};

export default Card;
