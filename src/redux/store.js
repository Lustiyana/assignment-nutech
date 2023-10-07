import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./features/balance/reducer";
import bannersReducer from "./features/banners/reducer";
import historiesReducer from "./features/histories/reducer";
import loginReducer from "./features/login/reducer";
import paymentReducer from "./features/payment/reducer";
import profileReducer from "./features/profile/reducer";
import registerReducer from "./features/register/reducer";
import servicesReducer from "./features/services/reducer";
import toastReducer from "./features/toast/reducer";
import topupReducer from "./features/topup/reducer";

export default configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    services: servicesReducer,
    banners: bannersReducer,
    profile: profileReducer,
    balance: balanceReducer,
    histories: historiesReducer,
    topup: topupReducer,
    payment: paymentReducer,
    toast: toastReducer,
  },
});
