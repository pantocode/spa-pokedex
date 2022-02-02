import Header from "../templates/Header";
import Home from "../pages/Home";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";
import Pokemon from "../pages/Pokemon";

const routes = {
  "/": Home,
  "/:id": Pokemon,
};

const router = async () => {
  const header = null || document.getElementById("main__header");
  const content = null || document.getElementById("main__content");

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
};

export default router;
