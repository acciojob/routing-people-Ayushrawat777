import React from 'react';
import { BrowserRouter , Routes, Route, useParams} from 'react-router-dom';
import Home from './Home';
import UserDetails from './UserDetail';
import users from './users';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route
            path="/users/:id"
            element={<UserDetailsWrapper />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
const UserDetailsWrapper = (props) => {
  const { id } = useParams();
  const user = users.find(user => user.id === parseInt(id));
  return user ? <UserDetails user={user} /> : <div>User not found</div>;
};

export default App;
