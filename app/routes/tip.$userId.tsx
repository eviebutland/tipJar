import type { LoaderArgs } from "@remix-run/node";
import { Response } from "@remix-run/node";
import {
  useLoaderData,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import { db } from "~/utils/db.server";

export const ErrorBoundary = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <div>
        <p>Use doesn't not exist</p>
        <p>{error?.error}</p>
      </div>
    );
  }
  return <div>There was an error </div>;
};

export const loader = async ({ params }: LoaderArgs) => {
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

  if (!user) {
    throw new Response("No user was found", { status: 404 });
  }
  return user;
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
