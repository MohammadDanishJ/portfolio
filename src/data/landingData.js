import { BsFillChatFill } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";

// Single source of truth for the landing/hero section's content.
const landingData = {
  underConstruction: {
    show: true,
    text: "We're Under Construction",
  },

  name: "Mohammad Danish",
  roles: ["Web Developer", "Software Engineer", "Java Developer"],

  scrollAmount: 650, // px scrolled on scroll-down click

  aos: {
    duration: 2000,         // global Aos.init duration
    fadeDownDuration: 1000, // under-construction banner
    zoomOutDuration: 1000,  // name title
  },

  // Rendered in order. `type` drives how href is resolved in the component:
  //  - "mailto"   -> built from socialLinks.gmail + subject/body
  //  - "file"     -> resolved via a local import map (webpack needs a static
  //                  import to hash/copy the asset, so the file itself stays
  //                  imported in the component — this just points to it by id)
  //  - "external" -> uses `href` directly, as-is
  cta: [
    {
      id: "contact",
      type: "mailto",
      label: "Contact",
      icon: BsFillChatFill,
      iconPosition: "left",
      subject: "Want to Hire. Source: Portfolio",
      body: "Hey Mohd Danish, I reached you from your Portfolio.",
    },
    {
      id: "resume",
      type: "file",
      label: "Resume",
      icon: FaExternalLinkAlt,
      iconPosition: "right",
      fileName: "Mohd_Danish_Senior_Software_Engineer_Resume.pdf",
    },
  ],
};

export default landingData;