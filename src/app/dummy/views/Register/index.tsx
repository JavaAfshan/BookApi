"use client";
import { API_BASE_URL } from "@/app/utils/constants";
import { sign } from "crypto";
import { useState } from "react";
import { useRouter } from "../../../../../node_modules/next/navigation";

const Register = () => {
  const router=useRouter();
  const [form, setForm] = useState({
    clientName: "",
    clientEmail: "",
  });

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
    console.log("afshan", event.target.name);
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/register`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error("Something went Wrong");
      }
      const result=await response.json();
      localStorage.setItem("authToken",result.accessToken);
      router.back();

    }
    catch (error) {
      alert(error)
    }
  }



  const handleSubmitOrder = async (e: any) => {
    e.preventDefault();
    const authToken = localStorage.getItem("authToken");
    try {
      const response = await fetch(`/api/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          bookId: 1,
          customerName: "John",
        }),
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error("Something went Wrong");
      }
      const result = await response.json();
      console.log(result);
      router.back();
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="w-full max-w-xs mx-auto  justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>
            Client Name
          </label>
          <input className=" focus:shadow-outline" name="clientName" type="text" placeholder="Enter Client Name" value={form.clientName} required
            onChange={handleChange} />
        </div>
        <div className="mb-6">
          <label>
            Client Email
          </label>
          <input className="  mb-3 focus:shadow-outline" name="clientEmail" type="email" placeholder="Enter Client Email" value={form.clientEmail} required
            onChange={handleChange} />
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-red-300 hover:bg-pink-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
<button className="bg-red-300 hover:bg-pink-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  onClick={handleSubmitOrder}>
          Submit Order</button>
    </div>
  )
}
export default Register;

function signUpApiCall(body: any) {
  throw new Error("Function not implemented.");
}
