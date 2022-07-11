import { theme } from "@/shared/theme";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 32px 12px;

  p {
    font-family: ${theme.font.family.montserrat};
    font-style: normal;
    font-weight: ${theme.font.weight.medium};
    font-size: 12px;
    text-align: center;
    color: ${theme.color.text.primary};
  }
`;
