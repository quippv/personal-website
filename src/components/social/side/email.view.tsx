import Link from "next/link";
import { SocialSideEmailContainer } from "./email.styles";

const SocialSideEmailView = () => {
  return (
    <SocialSideEmailContainer>
      <Link
        href="mailto:muhammadyusufadip.1999@gmail.com"
        passHref={true}
        target="_blank"
      >
        <a href="#" target="_blank">
          muhammadyusufadip.1999@gmail.com
        </a>
      </Link>
    </SocialSideEmailContainer>
  );
};

export default SocialSideEmailView;
