import "./styles/App.css";
import { PortfolioTemplate } from "./screens/PortfolioTemplate";

export const App = () => {
  return (
    <>
      <PortfolioTemplate />
    </>
  );
  // const ref = useRef<HTMLDivElement>(null);

  // const handleClick = () => {
  //   console.log(ref);
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // return (
  //   <div>
  //     <button onClick={handleClick}>Scroll to element</button>

  //     <div style={{ height: "150rem" }} />

  //     <div ref={ref} style={{ backgroundColor: "lightblue" }}>
  //       Coding Beauty
  //     </div>

  //     <div style={{ height: "150rem" }} />
  //   </div>
  // );
};
