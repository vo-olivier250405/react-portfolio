import { NavBar, SocialMedia } from "../components/organisms";
import { Description } from "../components/molecules";
import { Copyrigths } from "../components/atoms";

export const PortfolioTemplate = () => {
  return (
    <>
      <body>
        <section>
          <Description />
          <NavBar />
        </section>
      </body>
      <footer>
        <SocialMedia />
        <hr />
        <Copyrigths />
      </footer>
    </>
  );
};
