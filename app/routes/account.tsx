import { useLoaderData } from "@remix-run/react";
import { Menu } from "~/components/Menu";
import { db } from "~/utils/db.server";

export const loader = async () => {
  try {
    return await db.user.findUnique({
      // update to use current user details
      where: { email: "evie.butland@gmail.com" },
    });
  } catch (error) {
    console.log(error);
  }
};

const Account = () => {
  const data = useLoaderData<typeof loader>();
  console.log(data);

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
      <Menu></Menu>
      <form onSubmit={handleSubmit}>
        <h1 className="mt-2">Account details</h1>

        <div>
          <label>
            Name:
            <input value={data?.name} className="border"></input>
          </label>

          <label>
            Email: <input value={data?.email}></input>
          </label>

          <label>
            Password:
            <input value={data?.password}></input>
          </label>

          <label>
            Bio:
            <textarea value={data?.bio}></textarea>
          </label>

          <label>
            Role:
            <input value={data?.role}></input>
          </label>

          <label>
            Profile picture:
            <input value={data?.profilePicture}></input>
          </label>
        </div>
        <h2>Payment information</h2>
        <div className="flex space-x-4">
          <label>
            Card Number:
            <input value={data?.cardNo}></input>
          </label>

          <label>
            Sort code:
            <input value={data?.payment.sortCode}></input>
          </label>
        </div>
        <button type="submit">Save changes</button>
      </form>
    </div>
  );
};

export default Account;
