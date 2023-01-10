import { useState, useEffect } from "react";
import "../styles/Form.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../database";
const TIME_STAMP = new Date().toLocaleDateString();

export default function Form() {
  const dummyImg =
    "https://images.squarespace-cdn.com/content/v1/6148d79c6a387d1deeb3b1b6/1636580871721-HWO1WKU3LAJ6OEARE0WS/20211105_547_habibifest_web_by_sachynmital.jpg";

  const dummyWebsite =
    "https://theworld.org/media/2021-11-08/taste-habibi-festival";

  const dummyArticle =
    "Lorem ipsum and some stuf that goes here aas a description about the article";

  const [id, setId] = useState(38);
  const [title, setTitle] = useState("Article Title");
  const [author, setAuthor] = useState("Emilie Pons");
  const [publicationDate, setPublicationDate] = useState("01/01/2020");
  const [publisher, setPublisher] = useState("NPR");
  const [description, setDescription] = useState(dummyArticle);
  const [website, setWebsite] = useState(dummyWebsite);
  const [img, setImg] = useState(dummyImg);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addDoc(collection(db, "Articles"), {
      id: id,
      title: title,
      author: author,
      publicationDate: publicationDate,
      publisher: publisher,
      description: description,
      website: website,
      img: img,
    });
    console.log(res);
  };

  return (
    <>
      <div className="" style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginLeft: "150px", width: "30%" }}>
          <h2>Article Form</h2>
          <form
            onSubmit={handleSubmit}
            style={{
              border: "solid 4px rgb(250, 200,65)",
              padding: "25px",
            }}
            target="_blank"
          >
            <p>
              <placeholder>taste of habibi is 37</placeholder>
              <input
                class="form-control"
                className="w3-input w3-padding-16 w3-border"
                type="number"
                id="id"
                placeholder="Article Id"
                onChange={(e) => setId(e.target.value)}
                required
                name="Id"
                aria-describedby="Article Id"
              />
            </p>

            <p>
              <input
                class="form-control"
                className="w3-input w3-padding-16 w3-border"
                type="text"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Article Title"
                required
                name="article title"
                aria-describedby="article title"
              />
            </p>

            <p>
              <input
                class="form-control"
                className="w3-input w3-padding-16 w3-border"
                type="text"
                id="Author"
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author(s)"
                required
                name="author"
                aria-describedby="author"
              />
            </p>

            <p>
              <placeholder>Publication Date:</placeholder>
              <input
                class="form-control"
                className="w3-input w3-padding-16 w3-border"
                type="date"
                id="publication_date"
                onChange={(e) => setPublicationDate(e.target.value)}
                placeholder="Publication Date"
                required
                name="publication_date"
                aria-describedby="publication_date"
              />
            </p>

            <p>
              <input
                class="form-control"
                className="w3-input w3-padding-16 w3-border"
                type="text"
                id="publisher"
                onChange={(e) => setPublisher(e.target.value)}
                placeholder="Publisher"
                required
                name="publisher"
                aria-describedby="publisher"
              />
            </p>

            <p>
              <textarea
                class="form-control"
                className="w3-input w3-padding-16 w3-border"
                type="text"
                id="article_description"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Article Description"
                required
                name="article_description"
                aria-describedby="article_description"
              />
            </p>

            <p>
              <input
                class="form-control"
                className="w3-input w3-padding-16 w3-border"
                type="text"
                id="website_link"
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Website Link"
                required
                name="website_link"
                aria-describedby="website_link"
              />
            </p>

            <p>
              <input
                class="form-control"
                className="w3-input w3-padding-16 w3-border"
                type="text"
                id="image"
                onChange={(e) => setImg(e.target.value)}
                placeholder="Image Link"
                required
                name="img_link"
                aria-describedby="img_link"
              />
            </p>

            {/* <p>
              <input
                class="form-control"
                className="w3-input w3-padding-16 w3-border"
                type="file"
                id="file"
                onChange={(e) => setFiles(e.target.value)}
                placeholder="Files"
                multiple
                name="file"
                aria-describedby="file"
              />
            </p> */}

            <p>
              <button
                disabled={disabled}
                onSubmit={(e) => setDisabled(true)}
                type="submit"
                value="send"
                className="w3-button w3-light-grey w3-padding-small w3-margin-top"
                style={{
                  border: "solid 4px rgb(250, 200,65)",
                  borderTopRightRadius: "8px",
                  borderBottomLeftRadius: "8px",
                }}
              >
                Upload{" "}
              </button>
            </p>
          </form>
        </div>

        <div style={{ marginLeft: "60px", width: "60%" }}>
          <Container>
            <Row>
              <h4>Article Demo</h4>
              <Col className="col-4 content">
                <Card
                  style={{ marginBottom: "1rem", border: "2px solid #1f2657" }}
                >
                  <CardImg className="card-img-top" src={img} alt={title} />
                  <CardBody style={{ backgroundColor: "rgb(247, 248, 249)" }}>
                    <CardTitle style={{ color: "#1f2657" }} tag="h5">
                      {title}
                    </CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      {publisher}
                    </CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      {publicationDate}
                    </CardSubtitle>
                    <CardText>{description}</CardText>
                    <Button
                      style={{ color: "white" }}
                      onClick={() => {
                        setDisabled(false);
                      }}
                    >
                      Approve
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
