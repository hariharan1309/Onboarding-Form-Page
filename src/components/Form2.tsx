import Checkbox from "./Checkbox";
import Header2 from "./Header2";
import InputSelect from "./InputSelect";

const InputOptions = [
  {
    topic: "Do you currently run an online business?",
    option: [
      { value: 'Yes, I do', label: 'Yes, I do' },
      { value: 'No, just exploring', label: 'No, just exploring' }
    ]
  },
  {
    topic: "I primarily identify as a:",
    option: [
      { value: 'Freelancer or Consultant (project-based work)', label: 'Freelancer or Consultant (project-based work)' },
      { value: 'Beginner with some experience in the field', label: 'Beginner with some experience in the field' },
      { value: 'I prefer not to answer', label: 'I prefer not to answer' }
    ]
  },
  {
    topic: "Are you already teaching or offering online content?",
    option: [
      { value: 'Yes, I do', label: 'Yes, I do' },
      { value: `No, I'm just getting started sharing my knowledge`, label: `No, I'm just getting started sharing my knowledge` },
      { value: 'I prefer not to answer', label: 'I prefer not to answer' }
    ]
  },
  {
    topic: "How big is your current audience (email list, social media followers, subscribers, etc.)?",
    option: [
      { value: 'Nil', label: 'Nil' },
      { value: '(1-1000) people', label: '(1-1000) people' },
      { value: '(1001-100,000) people', label: '(1001-100,000) people' },
      { value: 'more than 100,000 people', label: 'more than 100,000 people' }
    ]
  },
  {
    topic: "Which topic is most relevant to your business or content?",
    option: [
      { value: 'Photo or Video', label: 'Photo or Video' },
      { value: 'Programming and Technology', label: 'Programming and Technology' },
      { value: 'Entrepreneurship', label: 'Entrepreneurship' }, // Fixed typo in "Entrepreneurship"
      { value: 'Health and Wellness', label: 'Health and Wellness' },
      { value: 'Business and Finance', label: 'Business and Finance' },
      { value: 'Science and Nature', label: 'Science and Nature' }
    ]
  },
  {
    topic: "Approximately how much money do you make charging for your knowledge today (in courses, consulting, books, speaking, etc.)? We ask this so that we can provide you with relevant resources for the size and stage of your business.",
    option: [
      { value: 'under $5000 per year', label: 'under $5000 per year' },
      { value: 'between $5000 to $10000 per year', label: 'between $5000 to $10000 per year' }, // Corrected the value string
      { value: 'above $10000 per year', label: 'above $10000 per year' },
      { value: 'I prefer not to answer', label: 'I prefer not to answer' }
    ]
  },
  {
    topic: "How many content or training materials (videos, worksheets, downloads, etc.) have you already prepared?",
    option: [
      { value: `None - I'm just getting started`, label: `None - I'm just getting started` },
      { value: 'Beginner - up to 5', label: 'Beginner - up to 5' }, // Changed "upto" to "up to"
      { value: 'Intermediate - up to 20', label: 'Intermediate - up to 20' }, // Changed "upto" to "up to"
      { value: 'Advanced - above 20', label: 'Advanced - above 20' }
    ]
  }
];

const CheckBoxValues=[
  "Create an online course",
  "Create a coaching program",
  "Create a digital download (ebook, article, template, worksheet, etc.)",
  "Create a community of forum",
  "Create a pre-sell",
  "I'm not sure of it",
  "Something else (please tell us more)",
]

export default function Form2({ nextPage }: { nextPage: () => void}) {
  return (
    <section className="border-t-2flex flex-col mx-auto gap-5 py-5 w-[min(600px,80%)]">
      <div className="flex items-start justify-start">
        <Header2 />
      </div>
      <div className="  flex flex-col gap-5">
        {InputOptions.slice(0,InputOptions.length-1).map((input, index) => (
          <li key={index} className=" list-none ">
            <InputSelect topic={input.topic} option={input.option} />
          </li>
        ))}
      </div>
      <div className=" flex flex-col gap-2">
        <div className="font-medium py-1">{`What are you hoping to do first on Teachable (Select up tgo 3 to get started as quickly as posible)`}</div>
        {CheckBoxValues.map((value,index)=>(
          <li className="list-none" key={index}>
            <Checkbox value={value} />
          </li>
        ))}
      </div>
      <InputSelect topic={InputOptions[InputOptions.length-1].topic} option={InputOptions[InputOptions.length-1].option} />
      <div className="flex justify-end w-full py-5">
          <button className="ring-2 ring-slate-700 w-[100px] p-1 rounded-[4px] focus:ring-slate-800 focus:shadow-sm" type="button">
            <span className="font-medium" onClick={nextPage}>Next</span>
          </button>
      </div>
    </section>
  );
}
