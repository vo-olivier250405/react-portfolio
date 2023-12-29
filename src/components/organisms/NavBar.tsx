import { useRef, RefObject } from "react";
import { Links, Description } from "../molecules";

const links: { [key: string]: string } = {
  "About me": "",
  Projects: "",
  Skills: "",
  "Contact me": "",
};

export const NavBar = () => {
  const descriptionTargetScroll = useRef<HTMLElement>(null);
  const aboutMeTargetScroll = useRef<HTMLElement>(null);
  const projectsTargetScroll = useRef<HTMLElement>(null);
  const contactMeTargetScroll = useRef<HTMLElement>(null);
  const handleOnClick = (target: RefObject<HTMLElement>) => {
    target.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <section ref={descriptionTargetScroll}>
        <Description />
        <div className="links">
          <button onClick={() => handleOnClick(descriptionTargetScroll)}>
            Description
          </button>
          <button onClick={() => handleOnClick(aboutMeTargetScroll)}>
            About Me
          </button>
          <button onClick={() => handleOnClick(projectsTargetScroll)}>
            Projects
          </button>
          <button onClick={() => handleOnClick(contactMeTargetScroll)}>
            Contact me
          </button>
        </div>
      </section>
      <section ref={aboutMeTargetScroll}>
        <h1>ABOUT ME</h1>
      </section>
      <section ref={projectsTargetScroll}>
        <h1>PROJECTS</h1>
      </section>
      <section ref={contactMeTargetScroll}>
        <h1>CONTACT ME</h1>
      </section>
    </div>
  );
};
