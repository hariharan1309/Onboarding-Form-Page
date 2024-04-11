import { useState } from "react";
import Checkbox from "./Checkbox";
type Check='false' | 'true'


export default function Submit(){
    const [checked, setChecked] = useState<Check>('false');
    const [showStatus, setShowStatus] = useState<Check>('false');
    const handleClick=()=>{
        setChecked(checked==='false'?'true':'false');
    }
    return(
        <section className="flex flex-col items-center p-10 justify-around text-center">
            <div className="flex" onChange={handleClick}>
                <Checkbox value=" I confirm that the information provided is accurate to the best of my knowledge."/>
                <span className="text-red-500 px-1">*</span>
            </div>
            <div className="flex py-2">
                <button type="submit" className="text-white bg-gray-800 w-[100px] p-2 rounded-md font-medium hover:bg-gray-950"
                    onClick={()=>{
                        setShowStatus('true');
                        setTimeout(() => {
                            setShowStatus('false');
                        },900);
                    }}
                >Submit</button>
            </div>
            {showStatus==='true' ? (
                checked==='true'? <p className="text-green-500 text-sm font-medium animate-ping">Form Submitted Successfully !!!</p> : <p className="text-red-500 text-sm font-medium animate-ping">Please Confirm the Information</p>
            ):''}
        </section>
    )
}