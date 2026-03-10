import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../context/Context.js";
import {Card, Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem.jsx";

const DeviceList = observer(() => {
    const {device} = useContext(Context);
    console.log(device)
    return (
        <Row className="d-flex">
            {device.devices.map((device) => (
                <Card>
                    <DeviceItem key={device.id} device={device} />
                </Card>
            ))}
        </Row>
    )
});

export default DeviceList;