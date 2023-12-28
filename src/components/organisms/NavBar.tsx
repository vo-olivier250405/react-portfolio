import { Links } from "../molecules";

const links: { [key: string]: string } = {
  "About me": "",
  Projects: "",
  Skills: "",
  "Contact me": "",
};

export const NavBar = () => {
  return <Links links={links} />;
};
