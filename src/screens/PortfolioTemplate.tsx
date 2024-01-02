import { SocialMedia, AllSections } from "../components/organisms";
import { Copyrigths } from "../components/atoms";
import { PageWrapper } from "../animations/Animations";

export const PortfolioTemplate = () => {
  return (
    <PageWrapper>
      <body>
        <AllSections />
      </body>
      <footer>
        <SocialMedia />
        <hr />
        <Copyrigths />
      </footer>
    </PageWrapper>
  );
};
