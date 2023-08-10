import { API_BASE_URL } from "@/app/utils/constants";
import Link from "../../../../../node_modules/next/link";

const getBooksDetail = async (id: number) => { 
  const res = await fetch(`${API_BASE_URL}/books/${id}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Something went Wrong");
  }
  return res.json();
};

const BookDetail = async ({ params, }: {
  params: { id: number },
}) => {
  const BookDetail = await getBooksDetail(params.id)
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-12 ">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{BookDetail?.name}</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">Author: {BookDetail?.author}</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">Type: {BookDetail?.type}</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">Price: {BookDetail?.price}</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">Current Stock: {BookDetail?.["current-stock"]}</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">Available: {BookDetail?.available ? "True" : "False"}</p>
          </div>
        </div>
 
      </div>
    </div>
  )
}
export default BookDetail