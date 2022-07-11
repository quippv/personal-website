import Link from "next/link";
import { FooterContainer } from "./footer.styles";

const FooterView = () => {
  return (
    <FooterContainer>
      <p>
        Built with ❤️️ by{" "}
        <Link href="#" passHref={true}>
          <a href="#">Adi Purwanto️️</a>
        </Link>
      </p>
    </FooterContainer>
  );
};

export default FooterView;
