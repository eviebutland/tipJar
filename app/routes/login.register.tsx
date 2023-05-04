const Register = () => {
  return (
    <div className="centered-container">
      <h1>Login</h1>
      <form method="post" className="w-1/2">
        <label>
          Name: <input type="text" name="name" />
        </label>

        <div>
          <label>
            Email: <input type="text" name="email" />
          </label>
        </div>

        <label>
          Content: <textarea name="content" />
        </label>

        <button type="submit" className="priority">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
