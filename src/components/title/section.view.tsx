import { ReactNode } from "react";
import { SectionTitleContainer } from "./section.styles";

const SectionTitleView = ({ children }: { children: ReactNode }) => {
  return <SectionTitleContainer>{children}</SectionTitleContainer>;
};

export default SectionTitleView;
