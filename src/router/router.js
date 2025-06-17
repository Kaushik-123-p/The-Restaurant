import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import SighUp from "../components/SighUp.vue";
import SighIn from "../components/SighIn.vue";
import AddRestaurant from "../components/AddRestaurant.vue";
import UpdateRestaurant from "../components/UpdateRestaurant.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "SighUp",
    path: "/sign-up",
    component: SighUp,
  },
  {
    name: "SighIn",
    path: "/sign-in",
    component: SighIn,
  },
  {
    name: "Add-Restaurant",
    path: "/add-restaurant",
    component: AddRestaurant,
  },
  {
    name: "Update-Restaurant",
    path: "/update-restaurant/:id",
    component: UpdateRestaurant,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
