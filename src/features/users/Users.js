import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchUsers, getUsers, getLoading } from './usersSlice';

import styles from './Users.module.css';

const Users = () => {
  const users = useSelector(getUsers);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.column}>Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item) => (
          <tr key={item.id}>
            <td className={styles.column}>{item.name ? item.name : 'N/A'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Users;
