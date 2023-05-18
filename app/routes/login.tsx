import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { ErrorBoundary } from "~/errorBoundary";
import { validateLogin } from "~/utils/formValidation";
import { login } from "~/utils/login.server";
import { badRequest } from "~/utils/request.server";

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();

  const formData = {
    email: form.get("email"),
    password: form.get("password"),
  };

  let isValid: boolean = false;
  if (formData.email && formData.password) {
    isValid = validateLogin(formData);
  }

  if (isValid?.errors?.length) {
    return badRequest({
      fieldErrors: isValid.errors,
      fields: isValid,
      formError: isValid.message,
    });
  } else {
    try {
      const user = login(formData);
      return redirect(`/tip/${user.id}`);
    } catch (error) {
      console.log(error);
    }
  }
};

const Login = () => {
  const data = useActionData();

  function handleSubmit() {
    redirect("/account");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} method="post">
        <label>
          Email: <input type="text" name="email" />
        </label>

        <label>
          Password: <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>

      {data?.formError && <ErrorBoundary error={data}></ErrorBoundary>}
      <p>Don't have an account?</p>
      <a href="/register">Register</a>
    </div>
  );
};

export default Login;
