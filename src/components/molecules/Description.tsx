export const Description = () => {
  return (
    <div className="details">
      <div className="details-name-description">
        <h1>
          Hi, Im <span>Olivier</span>, Etna student !
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          tenetur eaque eligendi repudiandae non inventore quidem neque dolor
          ducimus, excepturi amet harum, fugiat possimus laborum ad nulla
          voluptas cupiditate at!
        </p>
        <a href="src/assets/VO_Olivier.pdf" className="download-cv" target="#">
          Download my C.V
        </a>
      </div>
      <div className="details-profile-picture">
        <span className="blur-black"></span>
        <span className="blur-black"></span>
        <img src="src/assets/pic1.jpg" alt="Profile pic" />
      </div>
    </div>
  );
};
