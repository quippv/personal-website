import { theme } from "@/shared/theme";
import styled from "styled-components";

export const SectionTitleContainer = styled.h2`
  font-family: ${theme.font.family.opensans};
  font-style: normal;
  font-weight: ${theme.font.weight.bold};
  font-size: ${theme.font.size.lg};
  color: ${theme.color.text.primary};
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 12px;

  &::after {
    content: "";
    display: block;
    max-width: 300px;
    width: 100%;
    height: 1px;
    background: ${theme.color.text.primary};
  }
`;
