import Select from "react-select";
import { useState } from "react";
type OptionsProp={
  topic:string,
  option:{value:string,label:string}[]
}

export default function InputSelect({topic,option}:OptionsProp) {
  const [selectedOption, setSelectedOption] =useState<{value: string; label: string;} | null>(null)

  return (
    <div className="flex flex-col w-full">
      <div className="font-medium py-1">{topic}</div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={option}
        placeholder="Please Choose an Option..."
        unstyled
        className="ring-gray-500 ring-2 w-full rounded-md focus:shadow-md focus:ring-gray-600 transition-transform duration-300"
        classNames={{
          option:()=>"bg-gray-50 hover:bg-gray-300 py-2 px-4 my-[0.5px] cursor-pointer",
          control:()=>"bg-white rounded-md pl-4 pr-2",
          dropdownIndicator:(state)=>`transform ${state.selectProps.menuIsOpen ? 'rotate-180 ' : 'rotate-0'}`,
          menuList:()=>"z-10 mt-px] w-[95%] mx-auto bg-white rounded-b-md",
        }}
      />
    </div>
  );
}