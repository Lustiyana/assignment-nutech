import { configureStore } from "@reduxjs/toolkit";
import BalanceReducer from "./features/balance/reducer";
import BannersReducer from "./features/banners/reducer";
import HistoriesReducer from "./features/histories/reducer";
import LoginReducer from "./features/login/reducer";
import ProfileReducer from "./features/profile/reducer";
import RegisterReducer from "./features/register/reducer";
import ServicesReducer from "./features/services/reducer";
import TopupReducer from "./features/topup/reducer";

export default configureStore({
  reducer: {
    login: LoginReducer,
    register: RegisterReducer,
    services: ServicesReducer,
    banners: BannersReducer,
    profile: ProfileReducer,
    balance: BalanceReducer,
    histories: HistoriesReducer,
    topup: TopupReducer,
  },
});
