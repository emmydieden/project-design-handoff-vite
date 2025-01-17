import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Button } from "../Button"

const StyledSection = styled.section`
  background-image: linear-gradient(
      180deg,
      rgba(92, 22, 7, 0.15) 37%,
      rgba(51, 13, 3, 0.74) 88.29%,
      #220901 100%
    ),
    url("/images/hero-image.jpeg");
  height: 603px;
  background-size: cover; 
  background-position: 90%; 
  display: flex;
  flex-direction: column;
  justify-content: flex-end;


  //Manipulating background image position in wide viewports. Since the background-size is set to "cover", it moves up when changing viewport, which upsets readability of the header. 
  @media (min-width: 1100px) {
  background-position: 90% 0%;  
  }

  h1 {
    text-align: left;
  }

  h2 {
    text-align: center;
    color: white;
  }

  .hero-content{
    display: flex; 
    flex-direction: column; 
    margin: 0 24px; 
    gap: 32px; 
  }

  .button-wrapper {
    display: flex; 
    flex-direction: column; 
    gap: 16px; 
  }

  @media (min-width: 667px) and (max-width: 1024px) {
    .hero-content{
      margin: 135px 264px 115px 130px;  
    }
    .button-wrapper {
      flex-direction: row; 
    }
  }

  @media (min-width: 1025px) {
      .hero-content {
        margin-bottom: 5%;  
        margin-left: 10%; 
        margin-right: 60%; 
      }
      .button-wrapper {
        flex-direction: row; 
    }
  }
`;
export const Hero = () => {
  const {t} = useTranslation()

  return (
    <>
      <StyledSection>
        <div className="hero-content">
        <h1>{t("homePage.hero.heading")}</h1>
        <p>{t("homePage.hero.text")}</p>
        <div className="button-wrapper">
        <Button>{t("homePage.hero.bookButton")}</Button>
        <Button secondary>{t("homePage.hero.exploreButton")}</Button>
        </div>
        </div>
      </StyledSection>
    </>
  );
};
