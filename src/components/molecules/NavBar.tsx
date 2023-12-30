import { RefObject } from "react";
import { Button } from "../atoms";

type navBarProps = {
  allScrollTargets: { [key: string]: RefObject<HTMLElement> };
};

export const NavBar = (props: navBarProps) => {
  const handleOnClick = (target: RefObject<HTMLElement>) => {
    target.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="links">
      <Button
        text="Home"
        onClick={() =>
          handleOnClick(props.allScrollTargets["homeTargetScroll"])
        }
      />
      <Button
        text="About me"
        onClick={() =>
          handleOnClick(props.allScrollTargets["aboutMeTargetScroll"])
        }
      />
      <Button
        text="Projects"
        onClick={() =>
          handleOnClick(props.allScrollTargets["projectsTargetScroll"])
        }
      />
      <Button
        text="Skills"
        onClick={() =>
          handleOnClick(props.allScrollTargets["skillsTargetScroll"])
        }
      />
      <Button
        text="Contact me"
        onClick={() =>
          handleOnClick(props.allScrollTargets["contactMeTargetScroll"])
        }
      />
    </div>
  );
};
