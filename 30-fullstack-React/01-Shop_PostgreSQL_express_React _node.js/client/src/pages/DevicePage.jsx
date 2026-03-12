import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useNavigate } from "react-router";
import bigStar from "../assets/bigStar.png";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../http/deviceApi.js";

const DevicePage = () => {
  const navigate = useNavigate();
  const [device, setDevice] = useState({info: []});
  const {id} = useParams();

  // const tovar = {id: 1, name: "Iphone 12 pro", price: 2500, rating: 5, img: "https://cdn.fastcup.net/logos/teams/185965_89leafde2.webp"};
  // const description = [
  //   {id: 1, title: "Оперативная память", description: "5 гб"},
  //   {id: 2, title: "Камера", description: "12 мп"},
  //   {id: 3, title: "Процессор", description: "Пентиум 3"},
  //   {id: 4, title: "Количество ядер", description: "2"},
  //   {id: 5, title: "Аккумулятор", description: "4000"},
  // ]

    useEffect(() => {
        fetchOneDevice(id).then(data => {
            setDevice(data);
            console.log(data)
        })
    }, [])

  return (
    <Container style={{marginTop: "20px"}}>
      <div>
        <button onClick={() => navigate(-1)}>назад</button>
      </div>
     <Row>
       <Col md={4}>
        <Image width={300} height={300} src={import.meta.env.VITE_API_URL + "/" + device.img}/>
      </Col>

      <Col md={4}>
        <Row style={{display: "flex", flexDirection: "column"}}>
          <h2>{device.name}</h2>
         <div style={{
            width: "240px",
            height: "240px",
            backgroundImage: `url(${bigStar})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <span style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "white",
              textShadow: "2px 2px 4px black"
            }}>
              {device.rating}
            </span>
          </div>
        </Row>
      </Col>

      <Col md={4}>
            <Card 
            style={{display: "flex",
             justifyContent: "around",
              alignItems: "center",
               widows: "300px",
                height: "300px",
                fontSize: "32px",
                border: "5px solid grey"}}>
              <h3>От: {device.price} руб.</h3>
              <Button variant={"outline-dark"}>Добавить в корзину</Button>
            </Card>
      </Col>
     </Row>
     <Row style={{display: "flex", flexDirection: "column", margin: "15px"}}>
      <h2>Характеристики</h2>
           {device.info.map((desc, index) => (
                <Row key={desc.id} style={{background: index % 2 === 0 ? "lightgray" : "transparent", padding: "10px"}}>
                  {desc.title} : {desc.description}
                </Row>
              ))}
     </Row>
    </Container>
  )
}

export default DevicePage;
