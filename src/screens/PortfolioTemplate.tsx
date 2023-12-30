import { SocialMedia, AllSections } from "../components/organisms";
import { Copyrigths } from "../components/atoms";

export const PortfolioTemplate = () => {
  return (
    <>
      <body>
        <AllSections />
      </body>
      <footer>
        <SocialMedia />
        <hr />
        <Copyrigths />
      </footer>
    </>
  );
};
