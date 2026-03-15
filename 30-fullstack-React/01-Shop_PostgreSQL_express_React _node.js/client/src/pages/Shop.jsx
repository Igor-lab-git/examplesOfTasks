import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar.jsx";
import BrandBar from "../components/BrandBar.jsx";
import DeviceList from "../components/DeviceList.jsx";
import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {fetchBrand, fetchDevice, fetchTypes} from "../http/deviceApi.js";
import {Context} from "../context/Context.js";
import "./style.css";
import PaginationPages from "../components/PaginationPages.jsx";

const Shop = observer(() => {
    const {device} = useContext(Context);

    useEffect(() => {
        fetchTypes().then((data) => {
            device.setTypes(data)
        });
        fetchBrand().then((data) => {
            device.setBrands(data);
        });
        fetchDevice().then((data) => {
            device.setDevices(data.rows);
            device.setTotalCount(data.count)
        })
    }, []);

    return (
        <div>
            <Container>
                <Row className="mt-3">
                    <Col md={3}>
                        <TypeBar/>
                    </Col>
                    <Col md={9}>
                        <BrandBar/>
                        <DeviceList />
                        <PaginationPages/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
});

export default Shop;
