import { Outlet } from "@remix-run/react";

const Account = () => {
  return (
    <div>
      Account profile screen where the users can update their details
      <Outlet />
    </div>
  );
};

export default Account;
