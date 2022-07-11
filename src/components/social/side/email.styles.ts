import { theme } from "@/shared/theme";
import styled from "styled-components";

export const SocialSideEmailContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 36px;

  a {
    writing-mode: vertical-rl;
    display: inline-block;
    font-family: ${theme.font.family.montserrat};
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.xs};
    color: ${theme.color.text.primary};
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
