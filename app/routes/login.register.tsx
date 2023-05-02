const Register = () => {
  return (
    <div>
      <form method="post">
        <div>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Email: <input type="text" name="email" />
          </label>
        </div>

        <div>
          <label>
            Content: <textarea name="content" />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
