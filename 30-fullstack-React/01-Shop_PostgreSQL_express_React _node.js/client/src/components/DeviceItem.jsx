import {Card, Col, Image} from "react-bootstrap";
import star from "../assets/rating-card.svg";
import { useNavigate } from "react-router";
import { DEVICE_ROUTE } from "../constants/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate();
    // const history = HistoryRouter()
    // onclick(() => history.push(DEVICE_ROUTE + "/" + device.id))
    // // console.log(device);
    const handleNavigateCard = () => {
        const goToCard = `${DEVICE_ROUTE}/${device.id}`;  // сначала создаем путь
        navigate(goToCard);
    };

    return (
        <Col md={3} style={{ marginTop: '50px' }} onClick={() => handleNavigateCard()}>
            <Card  bordered={"light"} style={{ width: 200, cursor: "pointer"}} >
                <Image width={200} height={150} src={device.img} alt="device image"/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Samsung...</div>
                    <div className="d-flex align-items-center px-2">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star} alt="star"/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
};

export default DeviceItem;

//1-43