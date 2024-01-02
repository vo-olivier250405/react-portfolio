import { PageWrapper } from "../../animations/Animations";

export const MyStory = () => {
  return (
    <PageWrapper>
      <div className="story-container">
        <div className="letterhead">
          <PageWrapper>
            <div className="compartment-1"></div>
          </PageWrapper>
          <PageWrapper>
            <div className="compartment-2"></div>
          </PageWrapper>
        </div>
        <PageWrapper>
          <div className="compartment-3"></div>
        </PageWrapper>
      </div>
    </PageWrapper>
  );
};
