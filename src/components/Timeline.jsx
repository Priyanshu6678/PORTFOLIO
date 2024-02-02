import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';

export default function Component() {
  const TimeLines = [
    {
        date: "April 2020",
        title: "Learned programming for the first time",
        body: "The first programming language I learned was JAVA. It was a school-level course, and I have gone through basics of patterns, sorting, etc."
    },
    {
        date: "March 2021",
        title: "Informatics Practices: A Game Changer",
        body: "In my high school at DJPS, I opted for Informatics Practices instead of CS, and it was the best decision. I got to learn Python libraries like pandas, numpy, matplotlib, etc. Also, I learnt a lot about SQL."
    },
    {
        date: "July 2022",
        title: "Learned the Frontend Basics",
        body: "By the time of my high school IP courses, I learnt HTML, CSS, and JavaScript by myself by following YouTube tutorials and finally managed to get a certificate of completion from freeCodeCamp on 'Responsive Web Design'."
    },
    {
        date: "April 2023",
        title: "Flask and Django",
        body: "I learnt basics of Flask in Python and then moved on to Django framework for backend development."
    },
    {
        date: "May 2023",
        title: "Busy Giving My NEET Exam",
        body: "On 7th May 2023, I appeared in NEET exam and did pretty well."
    },
    {
        date: "June 2023",
        title: "Learning Tailwind CSS",
        body: "Having a grip on CSS, I went for the Tailwind CSS framework and made as many projects with Tailwind."
    },
    {
        date: "August 2023",
        title: "React JS, THE GOD",
        body: "React is very popular in the market right now and it's not only the reason for me to learn it, it makes my code very clean, arranged, and dynamic in a more robust way."
    },
    {
        date: "Now",
        title: "Learning Never Ends",
        body: "As a process of learning these languages, I make new projects, do experimentations, and learn new things."
    }
];



  return (
   <div className="space-y-8">
    <h1 className="text-4xl text-center font-bold border-4 bg-green-900 text-white border-transparent p-2 rounded-lg">My Journey</h1>
    <Timeline className="ml-4">
      {TimeLines.map((item, index) => (
        <Timeline.Item key={index}>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time className="text-white md:text-md" id="timelineTime">{item.date}</Timeline.Time>
            <Timeline.Title id="timelinetitle" className="text-xl lg:text-lg">{item.title}</Timeline.Title>
            <Timeline.Body id="timelinebody" className="text-slate-450 text-sm md:text-base lg:text-lg">
              {item.body}
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
   </div>
  );
}
