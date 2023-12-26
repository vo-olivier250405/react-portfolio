import { Button, InputText } from "./components/atoms";

export const App = () => {
  return (
    <>
      <h1>Hello world</h1>
      <Button text="Ceci est du texte" onClick={() => alert("CLICK")} />
      <InputText placeholder="Va-y" />
    </>
  );
};
