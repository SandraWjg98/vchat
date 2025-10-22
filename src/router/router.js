import { createRouter, createMemoryHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import SettingsView from "../views/Settings.vue";
import ConversationView from "../views/Coversation.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/settings", component: SettingsView },
  { path: "/conversation/:id", component: ConversationView },
];
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
