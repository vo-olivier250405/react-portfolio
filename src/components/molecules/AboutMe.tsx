import { useState } from "react";
import { MyStory } from "./MyStory";

export const AboutMe = () => {
  const [storyIsVisible, setStoryIsVisible] = useState(false);
  return (
    <div>
      <div className="grid-center-padding5rem">
        <a href="src/assets/VO_Olivier.pdf" download={true} target="#">
          Download my C.V
        </a>
        <button
          children="My Story"
          onClick={() => setStoryIsVisible(!storyIsVisible)}
          className="story-button"
        />
        {storyIsVisible && <MyStory />}
      </div>
    </div>
  );
};
