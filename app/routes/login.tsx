import { Outlet } from "@remix-run/react";

const Login = () => {
  return (
    <div>
      This is the login screen
      <Outlet />
    </div>
  );
};

export default Login;
