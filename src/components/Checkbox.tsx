type CheckProps={
  value:string
}
export default function Checkbox(value:CheckProps){
    return(
      <label htmlFor={value.value} className="flex cursor-pointer items-start gap-4">
        <div className="flex items-center">
          &#8203;
          <input type="checkbox" className="size-4 rounded border-gray-300 accent-slate-500" id={value.value} />
        </div>
        <div>
          <strong className="font-medium text-gray-900"> {value.value} </strong>
        </div>
      </label>
    )
}