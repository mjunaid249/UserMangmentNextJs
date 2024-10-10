"use client";
import Link from "next/link";
import { Button, Navbar } from "flowbite-react";

export default function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          User Management
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="/">
          <Button label={2} color="light" className="w-full">
            Home
          </Button>
        </Navbar.Link>
        <Navbar.Link as={Link} href="/add">
          <Button
            color="dark"
            className="w-full flex items-center justify-center text-center"
          >
            Add User
          </Button>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
