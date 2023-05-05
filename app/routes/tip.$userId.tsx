import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

export const loader = async ({ params }: LoaderArgs) => {
  try {
    const user = await db.user.findUnique({
      where: { id: params.userId },
      select: {
        name: true,
        bio: true,
        profilePicture: true,
        email: true,
        role: true,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const TipsUser = () => {
  const user = useLoaderData<typeof loader>();

  return (
    <div className="max-w-1/2">
      {user?.profilePicure && <div>image here</div>}

      <div className="bg-blue-500 rounded-sm">
        <p className="text-white font-bold text-lg">{user?.name}</p>
      </div>
      <p>{user?.role}</p>
      <div>
        <p>{user?.bio}</p>
      </div>
    </div>
  );
};

export default TipsUser;
