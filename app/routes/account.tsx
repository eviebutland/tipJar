import { useLoaderData } from "@remix-run/react";
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

  const handleUpdateUser = (value) => {
    console.log(value);
  };

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
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="text-lg">Account details</h1>
        <label>
          Name: <input value={data?.name} onChange={handleUpdateUser}></input>
        </label>

        <label>
          Email: <input value={data?.email} onChange={handleUpdateUser}></input>
        </label>

        <label>
          Password:
          <input value={data?.password} onChange={handleUpdateUser}></input>
        </label>

        <label>
          Bio:
          <input value={data?.bio} onChange={handleUpdateUser}></input>
        </label>

        <label>
          Role:
          <input value={data?.role} onChange={handleUpdateUser}></input>
        </label>

        <label>
          Profile picture:
          <input
            value={data?.profilePicture}
            onChange={handleUpdateUser}
          ></input>
        </label>
        <hr />

        <p>Payment information</p>
        <label>
          Card Number:
          <input
            value={data?.payment.cardNo}
            onChange={handleUpdateUser}
          ></input>
        </label>

        <label>
          Sort code:
          <input
            value={data?.payment.sortCode}
            onChange={handleUpdateUser}
          ></input>
        </label>

        <button type="submit">Save changes</button>
      </form>
    </div>
  );
};

export default Account;
