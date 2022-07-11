import { theme } from "@/shared/theme";
import styled from "styled-components";

export const HomeContainer = styled.main`
  max-width: ${theme.breakpoint.lg};
  width: 100%;
  margin: auto;
  padding: 12px;
`;

export const HomeHeroContainer = styled.section`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-family: ${theme.font.family.opensans};

  span.hello {
    font-family: ${theme.font.family.montserrat};
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.xs};
    color: ${theme.color.primary};
  }

  h1 {
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.size["2xl"]};

    span.primary {
      display: block;
      color: ${theme.color.text.primary};
    }
    span.secondary {
      display: block;
      color: ${theme.color.text.secondary};
    }
  }

  p {
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.sm};
    color: ${theme.color.text.secondary};
    margin: 12px 0 40px 0;
    max-width: 480px;
  }

  @media (max-width: ${theme.breakpoint.sm}) {
    justify-content: flex-start;
    padding-top: 112px;

    h1 {
      font-size: ${theme.font.size.xl};
    }

    p {
      font-size: ${theme.font.size.xs};
    }
  }
`;

export const HomeAboutContainer = styled.section`
  padding: 78px 0 170px 0;

  .content {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 48px;

    ul li,
    p {
      font-family: ${theme.font.family.opensans};
      font-weight: ${theme.font.weight.regular};
      font-size: ${theme.font.size.sm};
      color: ${theme.color.text.secondary};
    }

    p:nth-child(2) {
      margin-top: 40px;
      margin-bottom: 12px;
    }

    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;

      li {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 4px;

        i {
          color: ${theme.color.primary};
        }

        span {
          width: fit-content;

          &::after {
            content: "";
            display: block;
            width: 0;
            height: 1px;
            background: ${theme.color.primary};
            transition: all 0.3s linear;
          }
        }

        &:hover {
          cursor: default;

          span {
            &::after {
              width: 100%;
            }
          }
        }
      }
    }

    .profile-picture {
      position: relative;
      height: 0;
      padding-bottom: 100%;

      .overlay {
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        background: ${theme.color.primary};
        z-index: 1;
        border-radius: ${theme.rounded.lg};
        opacity: 0.38;
        transition: all 0.3s linear;
      }

      img {
        border-radius: ${theme.rounded.lg};
        object-position: center;
        object-fit: cover;
      }

      &:hover {
        .overlay {
          opacity: 0;
        }
      }
    }
  }

  @media (max-width: ${theme.breakpoint.md}) {
    .content {
      grid-template-columns: 1fr;
    }

    .detail {
      order: 2;
    }

    .profile-picture {
      order: 1;
    }
  }
`;

export const HomeContactContainer = styled.section`
  padding: 78px 0 170px 0;
  text-align: center;

  span.next {
    font-family: ${theme.font.family.montserrat};
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.xs};
    color: ${theme.color.primary};
  }

  h2 {
    font-family: ${theme.font.family.opensans};
    font-weight: ${theme.font.weight.bold}
    font-size: ${theme.font.size.lg}
    color: ${theme.color.text.primary}
  }

  p {
    font-family: ${theme.font.family.opensans};
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.sm};
    color: ${theme.color.text.secondary};
    max-width: 420px;
    margin: auto;
    margin-top: 12px;
   
  }

  .social {
    margin-top: 28px;
    display: none;
    align-items: center;
    justify-content: center;
    gap: 12px;

    a {
      i {
        color: ${theme.color.text.primary};
        font-size: ${theme.font.size.base};
        transition: all 0.3s linear;
      }

      &:hover {
        i {
          color: ${theme.color.primary};
        }
      }
    }
  }

  button {
    margin-top: 32px;
  }

  @media (max-width: ${theme.breakpoint["2xl"]}) {
    .social {
      display: flex;
    }
  }
`;
