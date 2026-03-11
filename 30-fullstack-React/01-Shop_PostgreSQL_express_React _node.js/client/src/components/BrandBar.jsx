import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../context/Context.js";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context);
    // console.log(device)
    return (
        <Row className="d-flex" style={{columnGap: "10px"}}>
            {device.brands.map((brand) => (
                <Card
                    key={brand.id}
                    style={{cursor: "pointer", width: 'auto',
                        minWidth: '60px',
                        padding: '4px 8px',
                        fontSize: '14px',
                        textAlign: 'center'}}
                    className="p-3"
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? "danger" : "light"}>
                    {brand.name}
                </Card>
            ))}
        </Row>
    )
});

export default BrandBar;