import { theme } from "@/shared/theme";
import styled from "styled-components";

export const ButtonPrimary = styled.button`
  border: 1px solid transparent;
  background: ${theme.color.primary};
  color: ${theme.color.secondary};
  padding: 12px 20px;
  border-radius: ${theme.rounded.sm};
  font-family: ${theme.font.family.montserrat};
  font-size: ${theme.font.size.xs};
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background: transparent;
    border: 1px solid ${theme.color.primary};
    color: ${theme.color.primary};
  }
`;

export const ButtonPrimaryOutline = styled.button`
  border: 1px solid ${theme.color.primary};
  color: ${theme.color.primary};
  background: transparent;
  padding: 10px 16px;
  border-radius: ${theme.rounded.sm};
  font-family: ${theme.font.family.montserrat};
  font-size: ${theme.font.size.xs};
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background: ${theme.color.primary};
    color: ${theme.color.secondary};
  }
`;
