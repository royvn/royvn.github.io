import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import ToolkitHeadline from "../components/ToolkitHeadline";
import Banner from "../components/ToolkitBanner";
import WidgetList from "../components/WidgetList";
import CallToAction from "../components/CallToAction";

const AboutPage = () => (
  <Layout>
    <SEO title="Info" description="Designer &amp; developer in regio Den Haag" />
    <StaticQuery query={graphql`
      query {
        allMarkdownRemark(filter: {}, limit: 5) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        image1: file(relativePath: {eq: "vissershaven.jpg"}) {
          id
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image2: file(relativePath: {eq: "royvn.jpg"}) {
          id
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      `} render={data => (
        <article className="page-content content">
          <ToolkitHeadline title="Over" subtitle="Hi! Ik ontwerp en ontwikkel graag gebruiksvriendelijke interfaces" />
          <Banner image={data.image1.childImageSharp.fluid}/>
          <p>
            Hoi, ik ben <b>Roy van Neden</b>. Petrolhead, interaction designer en front-end developer uit Leidschendam woonachtig in Den Haag.
          </p>
          <Img fluid={data.image2.childImageSharp.fluid} alt="Dit ben ik" style={{maxWidth: 300}} />
          <p>
            Dit ben ik.
          </p>
          <p>
            Met plezier besteed ik het meeste van mijn tijd aan het ontwerpen en realiseren van digitale producten.
          </p>
          <p>
            In 2015 behaalde ik mijn Bachelor Communication & Multimedia Design aan de Haagse Hogeschool. De jaren daarna ben ik bij vele uiteenlopende projecten betrokken geweest. Van concept tot realisatie. Ik vind het leuk om in teamverband te werken en iteratief een product steeds verder uit te bouwen.
          </p>
          <blockquote>
            If we want users to like our software we should design it to behave like a likeable person: respectful, generous and helpful.
          </blockquote>
          <p>
            Alan Cooper
          </p>
          <h2>
            Vaardigheden
          </h2>
          <p>
            UX, UI, Sketch, HTML, SCSS, Javascript, Git, NPM, Yarn, Grunt, Gulp, Webpack, Twig, Liquid, Shopify, OctoberCMS, WordPress, Statamic, Jekyll.
          </p>
          <h2>
            Workflow
          </h2>
          <p>
            Het fijnst en snelst werk ik met macOS, Sketch, Visual studio code, Git en Google Gallery.
          </p>
          <h2>
            Werkervaring
          </h2>
          <h3>
            Front-end developer
          </h3>
          <p>
            CODE - a Shopify Plus agency <br />
            Okt. 2019 - heden <br />
            Delft
          </p>
          <h3>
            Front-end developer & interaction designer
          </h3>
          <p>
            Pluut Interaction B.V.  <br />
            Feb. 2015 – sep. 2019  <br />
            Lisse
          </p>
          <h3>
            Afstudeerder
          </h3>
          <p>
            Pluut Interaction  <br />
            Aug. 2014 – jan. 2015  <br />
            Wateringen
          </p>
          <h3>
            Front-end developer & webdesigner
          </h3>
          <p>
            Pluut Interaction  <br />
            Jun. 2014 – aug. 2014  <br />
            Wateringen
          </p>
          <h3>
            Stagiair vormgeving & front-end
          </h3>
          <p>
            PDC Informatie Architectuur B.V.  <br />
            Februari 2013 – juli 2013  <br />
            Den Haag
          </p>
          <h3>
            Student Communicatie & Multimedia design (CMD)
          </h3>
          <p>
            De Haagse Hogeschool  <br />
            2010 – 2015  <br />
            Den Haag
          </p>
          <p>
          Voor meer info verwijs ik je graag door naar mijn <a href="https://www.linkedin.com/in/roy-van-neden-10549761/" target="blank" rel="noopener">Linkedin</a>.
          </p>
          <h2>
            Overig
          </h2>
          <p>
          In mijn vrije tijd loop ik graag met mijn parttime hond door de natuur. 
          </p>
          <p>
            Klussen, sportief en competitief bezig zijn vind ik ook leuk. Zo ben ik altijd in voor een ⛷ en 🏎 sessie. Op koude regenachtige dagen slinger ik ook graag een goede game 🎮 aan.
          </p>
          <h2>
            Meer lezen?
          </h2>
          <p>
            Je bent aan het einde van deze pagina gekomen. Maar er is meer. Bekijk mijn recent geplaatste artikelen.
          </p>
          <WidgetList title="Recent van blog" list={data.allMarkdownRemark.edges} />
          <p>
            <Link to="/blog" className="btn btn--blue">
              Bekijk blog
            </Link>
          </p>
        </article>
      )} />
  </Layout>
)

export default AboutPage;