import { MdOutlineWorkOutline, MdOutlineSchool } from "react-icons/md";
import { LuBaby } from "react-icons/lu";
import { TbError404Off } from "react-icons/tb";


const timelineData = [
  {
  id: "senior-se",
  type: "work",
  date: "Mar 2026 - present",
  title: "Senior Software Engineer",
  subtitle: "Nucleus Software Exports Limited, Noida",
  description:
    "Development and Support for Customer Acquisition System and Lending Management System for ICICI Bank.",
  icon: MdOutlineWorkOutline,
  iconColor: "rgb(24, 184, 139)",
  highlight: true,
  hideLineAfter: false,
},
  {
    id: "se",
    type: "work",
    date: "Sep 2023 - Mar 2026",
    title: "Software Engineer",
    subtitle: "Nucleus Software Exports Limited, Noida",
    description:
      "Development and Support for Customer Acquisition System and Lending Management System for ICICI Bank.",
    icon: MdOutlineWorkOutline,
    iconColor: "rgb(33, 150, 243)",
    hideLineAfter: false,
  },
  {
    id: "asst-se",
    type: "work",
    date: "Jan 2023 - Sep 2023",
    title: "Assistant Software Engineer",
    subtitle: "Nucleus Software Exports Limited, Noida",
    description:
      "Development and Support for Customer Acquisition System and Lending Management System for ICICI Bank.",
    icon: MdOutlineWorkOutline,
    iconColor: "rgb(233, 30, 99)",
    hideLineAfter: false,
  },
  {
    id: "btech",
    type: "education",
    date: "2019 - 2023",
    title: "Btech Hons. (Computer Science and Engineering)",
    subtitle: "Integral University, Lucknow",
    description: "Grade: 8.85",
    icon: MdOutlineSchool,
    iconColor: "rgb(33, 150, 243)",
    hideLineAfter: false,
  },
{
  id: "gap",
  type: "marker",
  display: "text", // "box" (dashed card) or "text" (plain label, no card)
  date: "2017 - 2019",
  //title: "Career Gap",
  description: "Break in professional employment.",
  icon: TbError404Off,
  iconColor: "#cc0000",
  hideLineAfter: false,
},
  {
    id: "intermediate",
    type: "education",
    date: "2016 - 2017",
    title: "Intermediate",
    description: "Percentage: 86%",
    icon: MdOutlineSchool,
    iconColor: "rgb(33, 150, 243)",
    hideLineAfter: false,
  },
  {
    id: "high-school",
    type: "education",
    date: "2014 - 2015",
    title: "High School",
    description: "CGPA: 8.6",
    icon: MdOutlineSchool,
    iconColor: "rgb(233, 30, 99)",
    hideLineAfter: false,
  },
  {
    id: "birth",
    type: "marker",
    date: "Jan 2001",
    display: "text", 
    icon: LuBaby,
    iconColor: "rgb(16, 204, 82)",
  hideLineAfter: true, // no connector segment between this node and the next
  },
];

export default timelineData;