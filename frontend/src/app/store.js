import { configureStore } from "@reduxjs/toolkit";
import goods from "../features/goodsSlice";
import coach from "../features/coachSlice";
import users from "../features/usersSlice";
import simulators from "../features/simulatorsSlice";
import form from "../features/formSlice";
import coachform from "../features/coachformSlice";
import massage from "../features/massageSlice";
import SubscriptionSlice from "../features/subscriptionSlice";

export const store = configureStore({
  reducer: {
    goods,
    simulators,
    users,
    coach,
    form,
    coachform,
    massage,
    SubscriptionSlice,
  },
});
