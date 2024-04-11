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
    <main className="w-full max-h-full relative transition-transform duration-300 overflow-hidden">
      <Progress value={pageIndex} />
      <div className="w-full max-h-[100vh]  flex overflow-visible" style={{ transform: `translateX(-${pageIndex * 100}%)`} }>
       <div className="flex flex-col w-full  shrink-0 grow-0">
        <Form1 nextPage={nextPage} />
       </div>
        <div className="flex flex-col w-full  shrink-0 grow-0 overflow-x-hidden">
          <Form2 nextPage={nextPage}/>
        </div>
      <div className="flex flex-col w-full  shrink-0 grow-0 overflow-x-hidden">
        <Submit/>
       </div>
      </div>
    </main>
  );
}
