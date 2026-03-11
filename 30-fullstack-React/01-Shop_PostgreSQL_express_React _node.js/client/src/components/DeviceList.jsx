import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../context/Context.js";
import { Card, Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem.jsx";

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  //     console.log(device.types, "types"); // массив типов
  // console.log(device.selectedType, "selectedType");
  // console.log(device, "device")
  return (
    <Row className="d-flex g-4">
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
});

export default DeviceList;
