import { RefObject, useRef } from "react";
import { Description, NavBar } from "../molecules";

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
        <h1>ABOUT ME</h1>
      </section>
      <section ref={allScrollsTarget["projectsTargetScroll"]}>
        <h1>PROJECTS</h1>
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
