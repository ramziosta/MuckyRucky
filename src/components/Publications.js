import React,{ useState, useEffect} from 'react'
// import { publicationData } from "../js/data";
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
import { db } from "../database";
import { collection, getDocs } from "firebase/firestore"; 

export default function Publications() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);


  //<---------mobile ----------------
  useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
}, [isMobile]);



//>----------fetch data from firebase ----------------
const [data, setData] = useState([]);
useEffect(() => {
  

  const fetchData = async () => {
   let articles = [];
    try {
      const querySnapshot = await getDocs(collection(db, "Articles"));
      querySnapshot.forEach((doc) => {
        articles.push({ ...doc.data()});
      });
      setData(articles);
    }
    catch(err){
      console.log(err);
    }
  };
  fetchData();
},[])

console.log(data);

  return (
    <div className="">
      <Container>
        <Row>
          {data.map((data, i) => {
            return (
              <>
              
                <Col className={`${isMobile ? "col-12 content" : "col-4 content"}`}>
                  <Card style={{ marginBottom: "1rem", border:"2px solid #1f2657",  }}>
                    <CardImg className="card-img-top"  src={data.img} alt={data.title} />
                    <CardBody style={{backgroundColor:"rgb(247, 248, 249)"}}>
                      <CardTitle style={{color:"#1f2657"}} tag="h5">{data.title}</CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">
                        {data.publisher}
                      </CardSubtitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">
                        {data.published}
                      </CardSubtitle>
                      <CardText>{data.description}</CardText>
                      <Button style={{color:"white"}} href={data.website}>Full Story</Button>
                    </CardBody>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
