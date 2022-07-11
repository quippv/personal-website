import LayoutView from "@/components/layout/layout.view";
import {
  HomeAboutContainer,
  HomeContactContainer,
  HomeContainer,
  HomeHeroContainer,
} from "./home.styles";
import useHomeViewModel from "./home.viewmodel";
import SEO from "@/shared/seo";
import {
  ButtonPrimary,
  ButtonPrimaryOutline,
} from "@/components/button/button.styles";
import SocialSideEmailView from "@/components/social/side/email.view";
import SocialSideSocialView from "@/components/social/side/social.view";
import SectionTitleView from "@/components/title/section.view";
import Image from "next/image";
import Link from "next/link";

const HomeView = () => {
  const { techStackData, handleOpenMail } = useHomeViewModel();

  return (
    <>
      <SEO title="Welcome | Adi Purwanto" />
      <LayoutView>
        <HomeContainer>
          <HomeHeroContainer>
            <span className="hello">Hi, my name is</span>
            <h1>
              <span className="primary">Adi Purwanto.</span>
              <span className="secondary">I build things for the web.</span>
            </h1>
            <p>
              {`I’m a software engineer specializing in building web products.
              Currently, I love sushi 🍣.`}
            </p>
            <ButtonPrimary type="button">Check out my blog!</ButtonPrimary>
          </HomeHeroContainer>

          <HomeAboutContainer id="about">
            <SectionTitleView>About Me</SectionTitleView>
            <div className="content">
              <div className="detail">
                <p>
                  Hello! My name is Adi and I have an interest in web
                  development which started in 2019 when I was accepted for an
                  internship at a local startup!
                </p>
                <p>
                  Here are a few technologies I’ve been working with recently:
                </p>
                <ul>
                  {techStackData.map((data) => (
                    <li key={data}>
                      <i className="ai-triangle-right" /> <span>{data}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="profile-picture">
                <span className="overlay" />
                <Image src="/images/me.png" alt="Adi Purwanto" layout="fill" />
              </div>
            </div>
          </HomeAboutContainer>

          <HomeContactContainer id="contact">
            <span className="next">What’s Next?</span>
            <h2>Get In Touch</h2>
            <p>
              I am currently looking for new opportunities and my inbox is
              always open. If you have any questions or want to say hi, I will
              try to get back to you!
            </p>
            <div className="social">
              <Link
                href="https://github.com/quippv"
                passHref={true}
                target="_blank"
              >
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
              <Link
                href="mailto:muhammadyusufadip.1999@gmail.com"
                passHref={true}
                target="_blank"
              >
                <a href="#" target="_blank">
                  <i className="ai-envelope" />
                </a>
              </Link>
            </div>
            <ButtonPrimaryOutline type="button" onClick={handleOpenMail}>
              Say hello
            </ButtonPrimaryOutline>
          </HomeContactContainer>

          <SocialSideEmailView />
          <SocialSideSocialView />
        </HomeContainer>
      </LayoutView>
    </>
  );
};

export default HomeView;
