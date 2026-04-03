import type { JSX } from "react";
import type { IDevice } from "../../../app/store/redusers/cyberStoreApi";
import "../../../app/styles/main.scss";

interface IDeviceMainInfo {
    device?: IDevice;
};

const DeviceMainInfo = ({device}: IDeviceMainInfo): JSX.Element => {
  return (
    <article>
      <div>
        <h2>{device?.name}</h2>
        <span>{device?.price}</span>
      </div>
      <div>
        <ul>
            {device?.info.map((item) => (
                <li>
                    <span>{item.title}</span>
                    <span>{item.description}</span>
                </li>
            )).slice(0, 6)}
        </ul>
      </div>
    </article>
  )
};

export default DeviceMainInfo;
