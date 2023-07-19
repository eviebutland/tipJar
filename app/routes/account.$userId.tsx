import {  Form, useOutletContext } from "@remix-run/react";
import { redirect } from "@remix-run/node";

interface Props {
  data: unknown
}

function handleRedirect () {
  redirect('/login')
  console.log('go somewhere else')
}
const Account = (props: Props) => {
  const [data, _] = useOutletContext();

  console.log('data', data)
  const handleSubmit = async () => {
    try {
      return await db.user.update({
        where: { email: "evie.butland@gmail.com" },
        data: {
          bio: "New bio",
        },
      });
    } catch (error) {
      console.log("error updating user", error);
    }
  };
  

  return (
    <div className="centered-container">
      <Form onSubmit={handleSubmit} onChange={handleRedirect}>
        <h1 className="mt-2">Account details</h1>

        <div>
          <label>
            Name:
            <input value={data?.name} className="border"></input>
          </label>

          <label>
            Email: <input value={props.data?.email}></input>
          </label>

          <label>
            Password:
            <input value={props.data?.password}></input>
          </label>

          <label>
            Bio:
            <textarea value={props.data?.bio}></textarea>
          </label>

          <label>
            Role:
            <input value={props.data?.role}></input>
          </label>

          <label>
            Profile picture:
            <input value={props.data?.profilePicture}></input>
          </label>
        </div>
        <h2>Payment information</h2>
        <div className="flex space-x-4">
          <label>
            Card Number:
            <input value={props.data?.cardNo}></input>
          </label>

          <label>
            Sort code:
            <input value={props.data?.sortCode}></input>
          </label>
        </div>
        <button type="submit">Save changes</button>
      </Form>
    </div>
  );
};

export default Account;
