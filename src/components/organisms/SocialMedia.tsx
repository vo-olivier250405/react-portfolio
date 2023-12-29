import { Links } from "../molecules";

const links: { [key: string]: string } = {
  Linkedin: "https://www.linkedin.com/in/voolivier/",
  Instagram: "https://www.instagram.com/volivieet/",
};

export const SocialMedia = () => {
  return <Links links={links} className="social-media" onClick={() => {}} />;
};
