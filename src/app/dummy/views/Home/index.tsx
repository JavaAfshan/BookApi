
import { API_BASE_URL } from "@/app/utils/constants";
import Link from "../../../../../node_modules/next/link";


const getBooksList = async () => {
  const res = await fetch(`${API_BASE_URL}/books`);
  console.log(res);
  if (!res.ok) {
    throw new Error("Something went Wrong");
  }
  return res.json();
};

const Home = async () => {
  const books = await getBooksList();
  return (
    <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
      {books?.map((item: any) => (
         <Link href={`/bookDetail/${item.id}`} key={item.id}>
          <div className="item bg-red-200 rounded-md">
            <img src="https://picsum.photos/400/300" className="rounded-t-md w-full" alt="" />
            <div className="px-2 py-4">
              <h2 className="font-extrabold text-2xl" >{item.name}</h2>
              <p>Type: {item.type}</p>
              <p className="font-bold">
                Available: {item.available ? "True" : "False"}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Home;