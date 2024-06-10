import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import BathLogo from "../../assets/logo.png";

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;
const HomeLogo = styled.img`
  height: 70px;
`;

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// const StyledLink = styled(Link)`
//     padding: 15px;
//     margin-top: 15px;
//     color: #8186a0;
//     text-decoration: none;
//     font-size: 18px;
//     ${(props) =>
//         props.$isFullLink &&
//         `color: white; border-radius: 30px; background-color: #5843E4;`}
// `
// const StyledLink = styled(Link)`
//     padding: 15px;
//     color: #8186a0;
//     text-decoration: none;
//     font-size: 18px;
// `

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={BathLogo} />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
      </div>
    </NavContainer>
  );
}

export default Header;
