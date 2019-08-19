import React from "react";
import Link from "next/link";
export default function NavbarMeniu(props) {
  const btnRouteColor = routeName =>
    props.tab === routeName || typeof props.tab === "undefined"
      ? { color: "#3498db" }
      : { color: "rgb(158, 155, 155)" };
  // console.log(homeColorBtn);
  return (
    <>
      <li>
        <Link href="/">
          <a style={btnRouteColor("Home")}>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/portfolios">
          <a style={btnRouteColor("Protfolios")}>Protfolios</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a style={btnRouteColor("Blog")}>Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a style={btnRouteColor("Contact")}>Contact</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a style={btnRouteColor("About")}>About</a>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <a style={btnRouteColor("Login")}>Login</a>
        </Link>
      </li>
    </>
  );
}
