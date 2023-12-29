import { NavBar, SocialMedia } from "../components/organisms";
import { Description } from "../components/molecules";
import { Copyrigths } from "../components/atoms";

export const PortfolioTemplate = () => {
  return (
    <>
      <body>
        <NavBar />
      </body>
      <footer>
        <SocialMedia />
        <hr />
        <Copyrigths />
      </footer>
    </>
  );
};
