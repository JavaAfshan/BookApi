import Home from "./dummy/views/Home/index";


export default function App() {
  return (
   <div className="">
     <h1 className="text-5xl font-bold pb-4  mb-4  text-center">
    National Book Store
  </h1>
  {
    /*@ts-expect-error Server Component*/
  }
  
  <Home/>
   </div>

  )
}
