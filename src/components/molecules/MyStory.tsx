import { PageWrapper } from "../../animations/Animations";

export const MyStory = () => {
  return (
    <PageWrapper>
      <div className="story-container">
        <div className="letterhead">
          <PageWrapper>
            <div className="letterhead-child">
              <p className="frame">
                When i was a child, my parents made me understand that the
                computer was to work, and only to work. No games. Work. So, I
                decided to do both ! That's the reason why i started coding, to
                me, it's always been a way to play.
              </p>
            </div>
          </PageWrapper>
          <PageWrapper>
            <div className="letterhead-child">
              <p className="frame">
                Of course, things never change ! At the end of middle school, I
                had the idea of going into web-design. After creating my first
                game, (an R.P.G retro style like anyone else...) and getting
                gratification from my friends, I realized how awesome coding
                was. So I participated at the Code Night at the end of the high
                school, and I also continued to create other games or websites.
              </p>
            </div>
          </PageWrapper>
        </div>
        <PageWrapper>
          <div className="compartment-3">
            <div className="letterhead-child">
              <p className="frame">
                Finally, I currently studying at ETNA, and I create so many
                projects. I like the web, the people I meet and I hope we will
                work together too !
              </p>
            </div>
          </div>
        </PageWrapper>
      </div>
    </PageWrapper>
  );
};
