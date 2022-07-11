import { ReactNode } from "react";
import FooterView from "../footer/footer.view";
import HeaderView from "../header/header.view";

const LayoutView = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HeaderView />
      {children}
      <FooterView />
    </>
  );
};

export default LayoutView;
