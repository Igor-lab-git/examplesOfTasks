import { HomePage } from "../../../pages/HomePage";
import pathRouter from "../../../shared/constants/pathRouter";

const publicConfigRout = [
  {
    path: pathRouter.HOME_PATH,
    element: HomePage,
  },

  {
    path: pathRouter.LOGIN_PATH,
    element: HomePage,
  },

  {
    path: pathRouter.REGISTRATION_PATH,
    element: HomePage,
  },

  {
    path: pathRouter.DEVICE_PATH,
    element: HomePage,
  },
];

export { publicConfigRout };
