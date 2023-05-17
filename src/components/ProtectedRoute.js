import { Route, Navigate } from 'react-router-dom';

function Protected({ component: Component, ...props }) {
  return (
    <Route>
      {props.loggedIn ? <Component {...props} /> : <Navigate to="/signin" />}
    </Route>
  );
}

export default Protected; 