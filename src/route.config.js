import Home from "@pages/Home";
import Login from "@pages/Login";
import routeConstants from "@utils/routeConstants";

export default {
    home: {
        component: Home,
        ...routeConstants.home
    },
    login: {
        component: Login,
        ...routeConstants.login
    }
}