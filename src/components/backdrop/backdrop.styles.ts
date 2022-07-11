import { theme } from "@/shared/theme";
import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${theme.color.text.primary};
  opacity: 0.48;
`;
