type linksProps = {
  links: string[];
};

export const Links = (props: linksProps) => {
  return props.links.map((link: string, index: number) => {
    return (
      <a href={link} key={index}>
        {link}
      </a>
    );
  });
};
