import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        {/* this component will be aware of the links function above */}
        <Links />
      </head>

      <body>
        {/* Outlet is used on parent components to position the child  */}
        <Outlet />
        <ScrollRestoration />
        <Scripts />

        {/* Live reload is a component used in development */}
        <LiveReload />
      </body>
    </html>
  );
}
