import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { db } from "~/utils/db.server";

const Register = () => {
  async function handleSubmit() {
    try {
      const newUser = await db.user.create({
        data: {
          name: "Evie 2",
          email: "test@tes.com",
          password: "Encrypted hased password",
          bio: "This is a test user",
          role: "Developer",
          profilePicture: "",
          payment: {
            cardNo: 123,
            sortCode: 123456,
          },
        },
      });

      return newUser;
    } catch (error) {
      console.log("Error creating new user", error);
    }
  }

  function handleViewPassword() {
    console.log("change input type password to text");
  }
  return (
    <div className="centered-container">
      <h1>Register</h1>
      <form method="post" className="w-1/2" onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" name="name" />
        </label>

        <label>
          Email: <input type="text" name="email" />
        </label>

        <label>
          Password:
          <div className="flex items-center">
            <input type="password" name="password" className="flex-1 mr-2" />

            <FontAwesomeIcon
              icon={faEye}
              onClick={handleViewPassword}
            ></FontAwesomeIcon>
          </div>
        </label>

        <label>
          Bio: <textarea name="bio" />
        </label>

        <label>
          Role: <input type="text" name="role" />
        </label>

        <label>
          Profile picture: <input type="text" name="profilePicture" />
        </label>

        <hr />

        <section>
          <h2>Payment information</h2>
          <label>
            Card no: <input type="number" name="cardNo" />
          </label>
          <label>
            Sort code: <input type="number" name="sortCode" />
          </label>
        </section>

        <button type="submit" className="priority">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
