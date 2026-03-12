import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {Context} from "./context/Context.js";
import UserStore from "./store/UserStore.js";
import DeviceStore from "./store/DeviceStore.js";

createRoot(document.getElementById('root')).render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore(),
    }}>
        <App/>
    </Context.Provider>
)
