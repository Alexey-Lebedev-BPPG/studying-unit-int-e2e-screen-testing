import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export const Users = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(resp.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div data-testid='users-page'>
      {users.map((user) => (
        <Link data-testid='user-item' to={`/users/${user.id}`} key={user.id}>
          {user.name}
        </Link>
      ))}
    </div>
  );
};
