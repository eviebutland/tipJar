import type { V2_MetaFunction } from "@remix-run/node";
import { Menu } from "~/components/Menu";
import tipJarImg from '~/assets/home.png'
import { Footer } from '~/components/Footer';

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div>
      <Menu></Menu>

      <div className='flex flex-col justify-center items-center m-auto p-20'>

        <img className='h-[300px]' src={tipJarImg} alt='tip jar' />
        <h1 >Tip Jar alternative!</h1>
        <h2>What is tip jar?</h2>

        <p className='text-center'>
          Tip Jar is a great way clients to get cashless tips from their
          customers. This project will be an alternative that allows me to learn
          how to use: Remix, Prisma, integration with payment services such as
          Apple pay.
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
}
