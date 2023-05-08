import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ActionArgs } from "@remix-run/node";
import { db } from "~/utils/db.server";
import { Form } from "@remix-run/react";
import { useActionData } from "@remix-run/react";
import { badRequest } from "~/utils/request.server";
import type { Prisma } from "@prisma/client";
// By exporting the action - we do not need to have a submit function linked to the form. It is all handled here
export const action = async ({ request }: ActionArgs) => {
  try {
    const form = await request.formData();

    console.log(form);
    const formData: Prisma.UserCreateInput = {
      name: form.get("name") as string,
      email: form.get("email") as string,
      password: form.get("password") as string,
      bio: form.get("bio") as string,
      role: form.get("role") as string,
      profilePicture: form.get("profilePicture") as string,
      payment: {
        cardNo: parseInt(form.get("cardNo") as string),
        sortCode: parseInt(form.get("sortCode") as string),
      },
    };
    console.log("form data here", formData);

    const newUser = await db.user.create({
      data: {
        ...formData,
      },
    });

    console.log(newUser);
    badRequest({
      fieldErrors: [],
      fields: formData,
      formError: null,
    });

    return newUser;
  } catch (error) {
    console.log("THE ERROR IS:", error);
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: "Form not submitted correctly.",
    });
  } finally {
    return null;
  }
};

const Register = () => {
  function handleViewPassword() {
    console.log("change input type password to text");
  }

  const actionData = useActionData<typeof action>();
  return (
    <div className="centered-container">
      <h1>Register</h1>
      <Form method="post" action="/register" className="w-1/2">
        <label>
          Name:
          <input defaultValue={actionData?.name} type="text" name="name" />
        </label>

        <label>
          Email:{" "}
          <input type="text" defaultValue={actionData?.email} name="email" />
        </label>

        <label>
          Password:
          <div className="flex items-center">
            <input
              defaultValue={actionData?.password}
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
          Bio: <textarea name="bio" defaultValue={actionData?.bio} />
        </label>

        <label>
          Role:{" "}
          <input type="text" name="role" defaultValue={actionData?.role} />
        </label>

        <label>
          Profile picture:{" "}
          <input
            type="text"
            name="profilePicture"
            defaultValue={actionData?.profilePicture}
          />
        </label>

        <hr />

        <section>
          <h2>Payment information</h2>
          <label>
            Card no:
            <input
              type="number"
              name="cardNo"
              defaultValue={actionData?.payment.cardNo}
            />
          </label>
          <label>
            Sort code:{" "}
            <input
              type="number"
              name="sortCode"
              defaultValue={actionData?.payment.sortCode}
            />
          </label>
        </section>
        {actionData?.fieldErrors?.name ? (
          <p className="form-validation-error" id="name-error" role="alert">
            {actionData.fieldErrors.name}
          </p>
        ) : null}
        <button type="submit" className="priority">
          Register
        </button>
      </Form>
    </div>
  );
};

export default Register;
