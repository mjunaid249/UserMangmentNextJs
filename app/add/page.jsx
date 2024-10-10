"use client";
import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Slide, toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Add() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formData);
  async function submithandler() {
    const res = await axios.post("/api/user", formData);
    console.log(res.data);

    setFormData({
      name: "",
      email: "",
    });
  }
  return (
    <form
      className="flex max-w-md flex-col gap-4 mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        if (formData.email !== "" && formData.name !== "") {
          submithandler();
          toast.success("User Added", {
            autoClose: 1500,
            theme: "light",
            transition: Slide,
            position: "top-right",
          });
          router.push("/");
        } else {
          toast.error("Please the form!", {
            autoClose: 1500,
            theme: "light",
            transition: Slide,
            position: "top-right",
          });
        }
      }}
    >
      <h1 className="text-2xl font-bold m-6">Add User</h1>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Your Name" />
        </div>
        <TextInput
          id="name"
          type="text"
          value={formData.name}
          name="name"
          placeholder="Name"
          onChange={changeHandler}
          color="dark"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your Email" />
        </div>
        <TextInput
          id="email"
          onChange={changeHandler}
          type="email"
          value={formData.email}
          placeholder="Email"
          color="dark"
          name="email"
        />
      </div>
      <Button type="submit" color="dark">
        Submit
      </Button>
    </form>
  );
}
