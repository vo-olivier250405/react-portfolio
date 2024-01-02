import { BubbleBox } from "../atoms";

export const Description = () => {
  return (
    <div className="details">
      <img src="src/assets/pic1.jpg" alt="profile-picture" />
      <BubbleBox
        text={
          <h1>
            Hi, im <span>Olivier</span>, Etna student !
          </h1>
        }
      />
    </div>
  );
};
