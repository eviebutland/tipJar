import { Outlet } from "@remix-run/react";

const Tip = () => {
  return (
    <div>
      This is the hosting page for the tips.user page, if no id is provided then
      i could give some detail??
      <Outlet />
    </div>
  );
};

export default Tip;
