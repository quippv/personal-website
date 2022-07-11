import Link from "next/link";
import { Backdrop } from "../backdrop/backdrop.styles";
import { ButtonPrimaryOutline } from "../button/button.styles";
import { Logo } from "../logo/logo.styles";
import {
  HeaderBurgerSidebar,
  HeaderContainer,
  HeaderNavigationContainer,
} from "./header.styles";
import useHeaderViewModel from "./header.viewmodel";

const HeaderView = () => {
  const { handleOpenResume, showSideBar, handleShowSideBar } =
    useHeaderViewModel();

  return (
    <HeaderContainer>
      <Link href="/" passHref={true}>
        <a href="#">
          <Logo src="/images/logo.png" alt="logo" />
        </a>
      </Link>
      <HeaderNavigationContainer className={showSideBar ? "show" : ""}>
        <ul>
          <li>
            <Link href="/#about" passHref={true}>
              <a href="#">about</a>
            </Link>
          </li>
          <li>
            <Link href="/work" passHref={true}>
              <a href="#">work</a>
            </Link>
          </li>
          <li>
            <Link href="/#contact" passHref={true}>
              <a href="#">contact</a>
            </Link>
          </li>
          <li>
            <ButtonPrimaryOutline type="button" onClick={handleOpenResume}>
              Resume
            </ButtonPrimaryOutline>
          </li>
          <li className="close" onClick={handleShowSideBar}>
            <i className="ai-cross" />
          </li>
        </ul>
      </HeaderNavigationContainer>
      <HeaderBurgerSidebar onClick={handleShowSideBar}>
        <i className="ai-three-line-horizontal" />
      </HeaderBurgerSidebar>
      {showSideBar && <Backdrop onClick={handleShowSideBar} />}
    </HeaderContainer>
  );
};

export default HeaderView;
