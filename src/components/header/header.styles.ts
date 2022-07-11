import { theme } from "@/shared/theme";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 14px 26px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const HeaderNavigationContainer = styled.nav`
  transition: all 0.3s linear;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;

    li {
      a {
        position: relative;
        font-family: ${theme.font.family.montserrat};
        font-weight: ${theme.font.weight.regular};
        font-size: ${theme.font.size.xs};
        color: ${theme.color.text.primary};
        text-transform: capitalize;

        &::after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          border-radius: ${theme.rounded.lg};
          background: ${theme.color.primary};
          transition: all 0.3s linear;
        }

        &:hover,
        &.active {
          color: ${theme.color.primary};

          &::after {
            width: 100%;
          }
        }
      }
    }

    li.close {
      display: none;
    }
  }

  @media (max-width: ${theme.breakpoint.sm}) {
    position: fixed;
    height: 100vh;
    width: 70%;
    top: 0;
    right: -100%;
    background: ${theme.color.secondary};
    padding: 16px;
    z-index: 99999;

    ul {
      height: 60%;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      li.close {
        position: absolute;
        top: 14px;
        right: 26px;
        display: block;

        i {
          cursor: pointer;
          font-size: ${theme.font.size.lg};
        }
      }
    }

    &.show {
      right: 0;
    }
  }
`;

export const HeaderBurgerSidebar = styled.button`
  display: none;
  background: transparent;
  outline: none;
  border: none;

  i {
    cursor: pointer;
    font-size: ${theme.font.size.lg};
  }

  @media (max-width: ${theme.breakpoint.sm}) {
    display: block;
  }
`;
