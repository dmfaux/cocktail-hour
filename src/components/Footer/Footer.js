import { Container } from "./Footer.styles";
const year = new Date().getFullYear();
const Footer = () => (<Container>&copy; {year} Series Pro</Container>);
export default Footer;