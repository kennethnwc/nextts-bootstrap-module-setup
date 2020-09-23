import Header from "../components/Header";
import {
  btn,
  btnPrimary,
  card,
  cardBody,
  cardText,
  cardTitle,
  container,
  jumbotron,
} from "./index.scss";

const IndexPage = () => (
  <>
    <Header />
    <div className={container}>
      <div className={jumbotron}>
        <p>
          I can just import the classes with nice auto complete due to
          typescript
        </p>
        <div className={card}>
          <div className={cardBody}>
            <h5 className={cardTitle}>Card title</h5>
            <p className={cardText}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className={`${btn} ${btnPrimary}`}>
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default IndexPage;
