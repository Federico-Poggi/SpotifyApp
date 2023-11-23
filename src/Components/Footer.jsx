import styled from "styled-components";

const Styledp = styled.p`
  font-size: 0.5em;
  color: grey;
`;

const Footer = () => {
  return (
    <>
      <footer className="d-flex mx-1 ">
        <Styledp className="px-1">Legal</Styledp>
        <Styledp className="px-1">Cookies</Styledp>
        <Styledp className="px-1">Privacy Policy</Styledp>
        <Styledp className="px-1">Accesibility</Styledp>
      </footer>
    </>
  );
};

export default Footer;
