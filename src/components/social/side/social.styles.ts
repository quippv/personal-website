import { theme } from "@/shared/theme";
import styled from "styled-components";

export const SocialSideSocialContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-itemns: center;
  padding: 0 36px;

  a {
    i {
      writing-mode: vertical-rl;
      display: inline-block;
      font-family: ${theme.font.family.montserrat};
      font-weight: ${theme.font.weight.regular};
      font-size: ${theme.font.size.sm};
      color: ${theme.color.text.primary};
    }
    transition: all 0.2s linear;

    &:hover {
      transform: translateY(-3px);
    }
  }

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 96px;
    background: ${theme.color.text.primary};
    margin: auto;
  }

  @media (max-width: ${theme.breakpoint["2xl"]}) {
    display: none;
  }
`;
