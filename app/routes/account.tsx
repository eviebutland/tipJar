import { Outlet, useLoaderData } from '@remix-run/react'
import { Layout } from '~/components/Layout'
import { db } from "~/utils/db.server";
export const loader = async () => {
    try {
      return await db.user.findUnique({
        // update to use current user details
        where: { email: "evie.butland@gmail.com" },
      });
    } catch (error) {
    //   handleRedirect()
      console.log(error);
      throw new Response(null, {
        status: 404,
        statusText: "Not Found",
      });
    }
  };
export const account = () => {
    const data = useLoaderData<typeof loader>();
    console.log(data);
  
    console.log('coming inot here')
    return (
        <Layout withJs={true}>
            <div>
                
                <Outlet context={data}/>
                <p>here!</p>
            </div>
        </Layout>
    )
}