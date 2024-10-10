import { NextResponse } from "next/server";
import { connectDb } from "@/lib/config/db";
import { User } from "@/lib/models/userModel";

connectDb();

//Post API
export async function POST(request) {
  const { name, email } = await request.json();
  const user = await User.create({
    name,
    email,
  });
  return NextResponse.json("User Added");
}
//Get API

export async function GET(request) {
  const res = await User.find({});

  return NextResponse.json(res);
}

export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");
  await User.findByIdAndDelete(id);
  return NextResponse.json("User Deleted");
}
