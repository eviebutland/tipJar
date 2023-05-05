import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ActionArgs } from "@remix-run/node";
import { db } from "~/utils/db.server";
import { Form } from "@remix-run/react";

// By exporting the action - we do not need to have a submit function linked to the form. It is all handled here
export const action = async ({ request }: ActionArgs) => {
  try {
    const form = await request.formData();

    const formData = {
      name: form.get("name"),
      email: form.get("email"),
      password: form.get("password"),
      bio: form.get("bio"),
      role: form.get("role"),
      profilePicture: form.get("profilePicture"),
      payment: {
        cardNo: form.get("cardNo"),
        sortCode: form.get("sortCode"),
      },
    };
    console.log("form data here", formData);

    const newUser = await db.user.create({
      data: {
        ...formData,
      },
    });
    console.log(newUser);
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

const Register = () => {
  function handleViewPassword() {
    console.log("change input type password to text");
  }
  return (
    <div className="centered-container">
      <h1>Register</h1>
      <Form method="post" action="/register" className="w-1/2">
        <label>
          Name: <input type="text" name="name" />
        </label>

        <label>
          Email: <input type="text" name="email" />
        </label>

        <label>
          Password:
          <div className="flex items-center">
            <input
              type="password"
              name="password"
              className="flex-1 mr-2"
              autoComplete="yes"
            />

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
      </Form>
    </div>
  );
};

export default Register;
