import GlobalStyle from "../components/global-style";
import Header from "../components/header";
import MainContainer from "../components/main-container";
import Section from "../components/section";
import SocialButtons from "../components/social-buttons";
import FlexContainer from "../components/flex/container";
import Half from "../components/flex/half";
import AnchorButton from "../components/anchor-button";
import PerspectiveImage from "../components/perspective-image";

const Home = ({ ...props }) => (
  <div>
    {console.log(props)}
    <GlobalStyle />
    <MainContainer>
      <Section
        parallax
        dark
        backgroundImage="https://revista.buildings.com.br/wp-content/uploads/2018/12/sean-pollock-203658-unsplash-1200x650.jpg"
      >
        <Header
          logo={{
            src: "/images/logo-min.webp",
            alt: "Maia Projetos",
          }}
          heading="Lorem ipsum dolor"
          button={{
            copy: "Saiba mais",
            href: "#section-2",
          }}
        />
        <SocialButtons />
      </Section>
      <Section id="section-2">
        <FlexContainer>
          <Half>
            <PerspectiveImage src="https://br.sonychannel.com/sites/br.set/files/ct_character_f_primary_image/himym06_josh_yellow_1438_r1.jpg" />
          </Half>
          <Half>
            <h2>Sobre nós</h2>
            <p>
              Ainda assim, existem dúvidas a respeito de como a mobilidade dos
              capitais internacionais garante a contribuição de um grupo
              importante na determinação do sistema de participação geral.
            </p>
            <p>
              É claro que o início da atividade geral de formação de atitudes
              cumpre um papel essencial na formulação de alternativas às
              soluções ortodoxas.
            </p>
            <AnchorButton href="#">Nosso portfólio</AnchorButton>
          </Half>
        </FlexContainer>
      </Section>
      <Section blurred dark>
        <h2>Portfólio</h2>
      </Section>
    </MainContainer>
  </div>
);

Home.getInitialProps = async function () {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map((entry) => entry.show),
  };
};

export default Home;
