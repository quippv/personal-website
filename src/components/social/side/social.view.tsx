import Link from "next/link";
import { SocialSideSocialContainer } from "./social.styles";

const SocialSideSocialView = () => {
  return (
    <SocialSideSocialContainer>
      <Link href="https://github.com/quippv" passHref={true} target="_blank">
        <a href="#" target="_blank">
          <i className="ai-octocat-fill" />
        </a>
      </Link>
      <Link
        href="https://www.linkedin.com/in/myusufadp/"
        passHref={true}
        target="_blank"
      >
        <a href="#" target="_blank">
          <i className="ai-linkedin-fill" />
        </a>
      </Link>
    </SocialSideSocialContainer>
  );
};

export default SocialSideSocialView;
