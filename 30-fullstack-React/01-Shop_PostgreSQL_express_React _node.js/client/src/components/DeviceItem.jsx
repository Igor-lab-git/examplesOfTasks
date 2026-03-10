import {Card, Col, Image} from "react-bootstrap";
import star from "../assets/rating-card.svg";

const DeviceItem = ({device}) => {
    console.log(device);
    return (
        <Col md={3} >
            <Card style={{width: 150, cursor: "pointer"}} bordered={"light"}>
                <Image width={150} height={150} src={device.img} alt="device image"/>
                <div className="mt-1 d-flex justify-content-between align-items-center">
                    <div>Samsung...</div>
                </div>
                <div className="d-flex align-items-center px-2 mb-2">
                    <div>{device.rating}</div>
                    <Image width={18} height={18} src={star} alt="star"/>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
};

export default DeviceItem;

//1-43