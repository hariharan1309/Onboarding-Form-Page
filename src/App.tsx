import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Progress from "./components/Progress";
import Submit from "./components/Submit";
import { useState } from "react";

export default function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const nextPage = () => {
      setPageIndex((prev) => {
          if(prev === 2){
              console.log(pageIndex)
              return 0;
          }
               console.log(pageIndex)
              return prev + 1;
        })};
 
  return (
    <main className="w-full max-h-full relative overflow-x-hidden">
      <Progress value={pageIndex} />
      <div className="w-full max-h-[100vh] transition-transform duration-300  flex " style={{ transform: `translateX(-${pageIndex * 100}%)`} }>
       <div className="flex flex-col w-full  shrink-0 grow-0 overflow-y-hidden">
        <Form1 nextPage={nextPage} />
        
       </div>
        <div className="flex flex-col w-full  shrink-0 grow-0 overflow-x-hidden relative">
          <Form2 nextPage={nextPage}/>
          <div className="absolute text-white top-[50%] right-0 z-30 text-center">
              <button className="bg-slate-800 rounded-md px-5 py-3 my-3 mx-5 flex items-center justify-between gap-2  ">
              <img src="/images/question.png" alt="" className="w-5 h-5 bg-white rounded-full" />
              <span>Hello</span></button>
          </div>
        </div>
      <div className="flex flex-col w-full h-full  shrink-0 grow-0 overflow-y-hidden">
        <Submit/>
       </div>
      </div>
    </main>
  );
}
