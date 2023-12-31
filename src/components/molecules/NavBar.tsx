import { RefObject } from "react";
import { Button } from "../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HoverAnimation } from "../../animations/Animations";
import {
  faHome,
  faMale,
  faDiagramProject,
  faCogs,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

type navBarProps = {
  allScrollTargets: { [key: string]: RefObject<HTMLElement> };
};

export const NavBar = (props: navBarProps) => {
  const handleOnClick = (target: RefObject<HTMLElement>) => {
    target.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="links">
      <span className="blur"></span>
      <span className="blur"></span>
      <Button
        text={
          (
            <HoverAnimation>
              <FontAwesomeIcon icon={faHome} />
            </HoverAnimation>
          ) as any
        }
        onClick={() =>
          handleOnClick(props.allScrollTargets["homeTargetScroll"])
        }
      />
      <Button
        text={
          (
            <HoverAnimation>
              <FontAwesomeIcon icon={faMale} />
            </HoverAnimation>
          ) as any
        }
        onClick={() =>
          handleOnClick(props.allScrollTargets["aboutMeTargetScroll"])
        }
      />
      <Button
        text={
          (
            <HoverAnimation>
              <FontAwesomeIcon icon={faDiagramProject} />
            </HoverAnimation>
          ) as any
        }
        onClick={() =>
          handleOnClick(props.allScrollTargets["projectsTargetScroll"])
        }
      />
      <Button
        text={
          (
            <HoverAnimation>
              <FontAwesomeIcon icon={faCogs} />
            </HoverAnimation>
          ) as any
        }
        onClick={() =>
          handleOnClick(props.allScrollTargets["skillsTargetScroll"])
        }
      />
      <Button
        text={
          (
            <HoverAnimation>
              <FontAwesomeIcon icon={faPhone} />
            </HoverAnimation>
          ) as any
        }
        onClick={() =>
          handleOnClick(props.allScrollTargets["contactMeTargetScroll"])
        }
      />
    </div>
  );
};
