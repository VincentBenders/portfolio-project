import React from "react";
import { Component } from "react";
import { Link, Outlet } from "react-router";

export default class Layout extends Component {
  render() {
    return (
      <>
        <nav
          className={
            "font-mono text-[#f6f7f8] bg-white space-x-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700 p-5"
          }
        >
          <Link
            className={
              "bg-[#DD2D4A] hover:bg-[#b84256] font-bold py-2 px-4 rounded"
            }
            to={"/portfolio"}
          >
            Portfolio
          </Link>
          <Link
            className={
              "bg-[#DD2D4A] hover:bg-[#b84256] font-bold py-2 px-4 rounded"
            }
            to={"/"}
          >
            About Me
          </Link>
        </nav>
        <main>
          <Outlet />
        </main>
      </>
    );
  }
}
