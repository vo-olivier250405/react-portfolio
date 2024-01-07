import { RefObject, useRef } from "react";
import { AboutMe, Description, NavBar, Projects } from "../molecules";

export const AllSections = () => {
  const allScrollsTarget: { [key: string]: RefObject<HTMLElement> } = {
    homeTargetScroll: useRef<HTMLElement>(null),
    aboutMeTargetScroll: useRef<HTMLElement>(null),
    projectsTargetScroll: useRef<HTMLElement>(null),
    contactMeTargetScroll: useRef<HTMLElement>(null),
    skillsTargetScroll: useRef<HTMLElement>(null),
  };

  return (
    <div>
      <NavBar allScrollTargets={allScrollsTarget} />
      <section ref={allScrollsTarget["homeTargetScroll"]} className="home">
        <Description />
      </section>
      <section ref={allScrollsTarget["aboutMeTargetScroll"]}>
        <AboutMe />
      </section>
      <section ref={allScrollsTarget["projectsTargetScroll"]}>
        <Projects />
      </section>
      <section ref={allScrollsTarget["skillsTargetScroll"]}>
        <h1>SKILLS</h1>
      </section>
      <section ref={allScrollsTarget["contactMeTargetScroll"]}>
        <h1>CONTACT ME</h1>
      </section>
    </div>
  );
};
