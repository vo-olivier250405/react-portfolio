type linksProps = {
  links: { [key: string]: string };
};

export const Links = (props: linksProps) => {
  const res: JSX.Element[] = [];
  for (const link in props.links) {
    res.push(
      <a href={props.links[link]} key={link}>
        {link}
      </a>
    );
  }
  return <div className="links">{res}</div>;
};
