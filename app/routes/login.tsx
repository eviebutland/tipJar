import { redirect } from "@remix-run/node";
// import { Outlet } from "@remix-run/react";

const Login = () => {
  function handleSubmit() {
    console.log("redirect to account");
    redirect("/account");
  }
  function handleRedirectToRegister() {
    console.log("redirect to regitser");
    redirect("/register", 303);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email: <input type="text" name="email" />
        </label>

        <label>
          Password: <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>

      <p>Don't have an account?</p>
      <button onClick={handleRedirectToRegister}>Register</button>
      {/* <Outlet /> */}
    </div>
  );
};

export default Login;
