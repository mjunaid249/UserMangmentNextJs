"use client";

import axios from "axios";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";
import { RiDeleteBin2Fill } from "react-icons/ri";

export default function Home() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get("/api/user");
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (id) => {
    const res = await axios.delete("/api/user", {
      params: {
        id: id,
      },
    });
    getUsers();
    toast.info("User deleted", {
      autoClose: 1500,
      theme: "light",
      transition: Slide,
      position: "top-right",
    });
  };

  return (
    <div class="relative mt-10 overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full mt-5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              No.
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr
                key={index}
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.name}
                </th>
                <td class="px-6 py-4">{user.email}</td>

                <td class="px-6 py-4 text-right">
                  <Button color="dark" onClick={() => deleteUser(user._id)}>
                    <RiDeleteBin2Fill />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
