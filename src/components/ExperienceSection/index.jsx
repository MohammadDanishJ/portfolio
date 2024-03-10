import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWorkOutline, MdOutlineSchool } from "react-icons/md";
import { LuBaby } from "react-icons/lu";
import { TbError404Off } from "react-icons/tb";
import "./styles.css";

const ExperienceSection = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Sep 2023 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdOutlineWorkOutline />}
      >
        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Nucleus Software Exports Limited, Noida
        </h4>
        <p>
          Development and Support for Customer Acquisition System and Lending
          Management Sytem for ICICI Bank.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jan 2023 - Sep 2023"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdOutlineWorkOutline />}
      >
        <h3 className="vertical-timeline-element-title">
          Assistant Software Engineer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Nucleus Software Exports Limited, Noida
        </h4>
        <p>
          Development and Support for Customer Acquisition System and Lending
          Management Sytem for ICICI Bank
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2019 - 2023"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdOutlineSchool />}
      >
        <h3 className="vertical-timeline-element-title">
          Btech Hons. (Computer Science and Engineering)
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Integral University, Lucknow
        </h4>
        <p>Grade: 8.85</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: "#cc0000", color: "#fff" }}
        date="2017 - 2019"
        icon={<TbError404Off />}
      />

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2016 - 2017"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdOutlineSchool />}
      >
        <h3 className="vertical-timeline-element-title">Intermediate</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Bright Way Inter College, Lucknow
        </h4>
        <p>Percentage: 86%</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2014 - 2015"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<MdOutlineSchool />}
      >
        <h3 className="vertical-timeline-element-title">High School</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Bright Way Inter College, Lucknow
        </h4>
        <p>CGPA: 8.6</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<LuBaby />}
        date="Jan 2001"
      />
    </VerticalTimeline>
  );
};

export default ExperienceSection;
