import type { V2_MetaFunction } from "@remix-run/node";
import { Menu } from "~/components/Menu";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div className="">
      <Menu></Menu>

      <h1>Tip Jar alternative!</h1>
      <h2>What is tip jar?</h2>
      <p>
        Tip Jar is a great way clients to get cashless tips from their
        customers. This project will be an alternative that allows me to learn
        how to use: Remix, Prisma, integration with payment services such as
        Apple pay.
      </p>
    </div>
  );
}
