import React, { useEffect } from 'react';
import '../css/App.css';
import UserDetails from '../containers/details';
import UserList from '../containers/list';

const App = props => {
  useEffect(() => {
    props.fetchList();
  }, [])
  return (
    <div className="home-container">
      {props.data.showList && <div className="user-list">
        <h1>User List:</h1>
        <UserList />
      </div>}
      {props.data.showDetails && <div className="user-details">
        <h1>User Details:</h1>
        <UserDetails />
      </div>}
    </div>
  );
}

export default App;
