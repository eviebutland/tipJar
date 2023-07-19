import type { ActionArgs, V2_MetaFunction } from "@remix-run/node";
import { Response, redirect } from "@remix-run/node";

import {
  isRouteErrorResponse,
  useRouteError,
  Meta,
  Form,
  Link,
} from "@remix-run/react";
import { Layout } from '~/components/Layout';
// import { ErrorBoundary } from "~/errorBoundary";
import { validateLogin } from "~/utils/formValidation";
import { login } from "~/utils/login.server";
// import { badRequest } from "~/utils/request.server";

export const meta: V2_MetaFunction = () => {
  return [
    {
      description: "This is the login page",
      title: "Login",
    },
  ];
};
// isRouteErrorResponse can be used to gracefully handle expected user errors
// such as 401, 403, 404
export const ErrorBoundary = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <p>This error was an expected user error</p>
        <strong>{error.data}</strong>
        <br />
        <a href="/login">Go to login</a>
        <p>or</p>
        <a href="/register">Register for an account</a>
      </div>
    );
  }
  return <div>There was an error </div>;
};

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
    console.log("IS VALID", isValid);
    // throw new Error("Testing Error Boundary");
    throw new Response(isValid?.error[0], { status: 404 });

    // return badRequest({
    //   fieldErrors: isValid.errors,
    //   fields: isValid,
    //   formError: isValid.message,
    // });
  } else {
    const user = await login(formData);

    console.log(user);
    if (!user) {
      throw new Response("No user found", { status: 404 });
    }
    return redirect(`/account/${user?.id}`);
  }
};

const Login = () => {
  // const data = useActionData();

  function handleSubmit() {
    redirect("/account");
  }

  return (
    <Layout withJs={true}>
      <div className='centered-container'>
        <Meta></Meta>

        <Form onSubmit={handleSubmit} method="post">
          <label>
            Email: <input type="text" name="email" />
          </label>

          <label>
            Password: <input type="password" name="password" />
          </label>
          <button type="submit">Login</button>
        </Form>

        {/* {data?.formError && <ErrorBoundary error={data}></ErrorBoundary>} */}
        <p>Don't have an account?</p>
        {/* Prefetch will get the page content */}
        <Link to="/register" prefetch="intent">
          Register
        </Link>
      </div>
    </Layout>
  );
};

export default Login;
