import { Route } from "react-router";
export default function PrivateRoute({ component: RouteComponent, ...rest }) {
  return (
    <Route
      {...rest}
      render={(routeProps) => <RouteComponent {...routeProps} />}
    />
  );
}
