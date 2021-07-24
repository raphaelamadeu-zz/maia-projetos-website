import GlobalStyle from "../components/global-style";
import Header from "../components/header";
import MainContainer from "../components/main-container";
import Section from "../components/section";

const Home = () => (
  <div>
    <GlobalStyle />
    <MainContainer>
      <Section
        dark
        backgroundImage="https://revista.buildings.com.br/wp-content/uploads/2018/12/sean-pollock-203658-unsplash-1200x650.jpg"
      >
        <Header
          logo={{
            src: "/images/logo-min.webp",
            alt: "Maia Projetos",
          }}
          heading="Lorem ipsum dolor"
        />
      </Section>
      <Section>
        <h1>Hey Hank!</h1>
      </Section>
      <Section>
        <h1>Hey Chris!</h1>
      </Section>
    </MainContainer>
  </div>
);

export default Home;
