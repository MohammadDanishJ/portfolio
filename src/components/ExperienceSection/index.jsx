import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import timelineData from "../../data/timelineData";
import "./styles.css";

const TimelineNode = React.forwardRef(({ entry, side }, iconRef) => {
  const Icon = entry.icon;
  const asText = entry.type === "marker" && entry.display === "text";

  return (
    <div className={`timeline-node timeline-node--${side}`}>
      <div
        className="timeline-icon"
        ref={iconRef}
        style={{ background: entry.iconColor }}
      >
        {Icon && <Icon />}
      </div>

      {asText ? (
        <span className="timeline-text-marker">
          {entry.date}
          {entry.title && ` — ${entry.title}`}
        </span>
      ) : (
        <div
          className={`timeline-card timeline-card--${entry.type}${
            entry.highlight ? " timeline-card--highlight" : ""
          }`}
          style={{ "--arrow-color": entry.iconColor }}
        >
          <span className="timeline-date">{entry.date}</span>
          {entry.title && <h3 className="timeline-title">{entry.title}</h3>}
          {entry.subtitle && (
            <h4 className="timeline-subtitle">{entry.subtitle}</h4>
          )}
          {entry.description && (
            <p className="timeline-description">{entry.description}</p>
          )}
        </div>
      )}
    </div>
  );
});

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const iconRefs = useRef([]);
  const [segments, setSegments] = useState([]);

  const measure = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerTop = container.getBoundingClientRect().top;
    const centers = iconRefs.current.map((el) => {
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      return rect.top - containerTop + rect.height / 2;
    });

    const nextSegments = [];
    for (let i = 0; i < centers.length - 1; i += 1) {
      if (timelineData[i].hideLineAfter) continue; // skip this connector
      if (centers[i] == null || centers[i + 1] == null) continue;
      nextSegments.push({ top: centers[i], height: centers[i + 1] - centers[i] });
    }
    setSegments(nextSegments);
  }, []);

  useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  return (
  <div className="custom-timeline" ref={containerRef}>
    <div className="timeline-top-stub" />
    {segments.map((seg, i) => (
      <div
        key={i}
        className="timeline-line-segment"
        style={{ top: seg.top, height: seg.height }}
      />
    ))}
    {timelineData.map((entry, index) => (
      <TimelineNode
        key={entry.id}
        entry={entry}
        side={index % 2 === 0 ? "left" : "right"}
        ref={(el) => (iconRefs.current[index] = el)}
      />
    ))}
  </div>
);
};

export default ExperienceSection;