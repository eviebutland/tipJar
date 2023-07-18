import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Scripts } from "@remix-run/react";
import { Form, isRouteErrorResponse, useRouteError } from "@remix-run/react";
import { useActionData } from "@remix-run/react";

import type { Prisma } from "@prisma/client";
import { validateUserForm } from "~/utils/formValidation";

import { createUser } from "~/utils/register.server";


export const ErrorBoundary = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error) && error.status === 400) {
    return (
      <div>
        Please check the form fields
        <p>{error?.error}</p>
      </div>
    );
  }
};

// By exporting the action - we do not need to have a submit function linked to the form. It is all handled here
export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();

  const formData: Prisma.UserCreateInput = {
    name: form.get("name") as string,
    email: form.get("email") as string,
    password: form.get("password") as string,
    bio: form.get("bio") as string,
    role: form.get("role") as string,
    profilePicture: form.get("profilePicture") as string,
    cardNo: parseInt(form.get("cardNo") as string),
    sortCode: parseInt(form.get("sortCode") as string),
  };

  const isValid = validateUserForm(formData);

  if (isValid?.errors?.length) {
    throw new Response("Form is not valid", { status: 400 });
  } else {
    const newUser = createUser(formData);

    if (!newUser) {
      throw new Error("Unable to create user");
    }
    return redirect(`/tip/${newUser.id}`);
  }
};

const Register = () => {
  function handleViewPassword() {
    console.log("change input type password to text");
  }

  const actionData = useActionData<typeof action>();

  return (
    <div className="centered-container">
      
      <Scripts></Scripts>
      <h1>Register</h1>
      <Form method="post" action="/register" className="w-1/2">
        <label>
          Name:
          <input
            defaultValue={actionData?.name}
            type="text"
            name="name"
            aria-invalid={actionData?.fields.path === "name"}
          />
        </label>

        <label>
          Email:
          <input
            type="text"
            defaultValue={actionData?.email}
            name="email"
            aria-invalid={actionData?.fields.path === "email"}
          />
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
              aria-invalid={actionData?.fields.path === "password"}
            />

            <button
              className="plain w-6 h-6"
              onClick={handleViewPassword}
              type="button"
            >
              <FontAwesomeIcon size="sm" icon={faEye}></FontAwesomeIcon>
            </button>
          </div>
        </label>

        <label>
          Bio:
          <textarea
            name="bio"
            defaultValue={actionData?.bio}
            aria-invalid={actionData?.fields.path === "bio"}
          />
        </label>

        <label>
          Role:
          <input
            type="text"
            name="role"
            defaultValue={actionData?.role}
            aria-invalid={actionData?.fields.path === "role"}
          />
        </label>

        <label>
          Profile picture:
          <input
            type="text"
            name="profilePicture"
            defaultValue={actionData?.profilePicture}
            aria-invalid={actionData?.fields.path === "profilePicture"}
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
              aria-invalid={actionData?.fields.path === "cardNo"}
              defaultValue={actionData?.cardNo}
            />
          </label>
          <label>
            Sort code:
            <input
              type="number"
              name="sortCode"
              defaultValue={actionData?.sortCode}
              aria-invalid={actionData?.fields.path === "sortCode"}
            />
          </label>
        </section>

        <button type="submit" className="priority">
          Register
        </button>
      </Form>
      {/* Before this, the website did not use any javascript */}
      {/* <Scripts /> */}
    </div>
  );
};

export default Register;
