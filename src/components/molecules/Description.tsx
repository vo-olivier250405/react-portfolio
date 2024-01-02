import { BubbleBox } from "../atoms";

export const Description = () => {
  return (
    <div className="details">
      <img src="src/assets/pic1.jpg" alt="profile-picture" />
      <BubbleBox
        text={
          <h1 className="text-h1">
            Hi, Im <span className="text-h1"> Vo Olivier</span>, Etna student !
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              totam sunt aperiam corrupti provident mollitia architecto. Quia
              nulla ratione dolor maiores, optio reiciendis nesciunt error
              veritatis, minus non recusandae debitis.
            </p>
          </h1>
        }
      />
    </div>
  );
};
