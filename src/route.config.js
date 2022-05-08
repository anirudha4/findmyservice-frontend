import BecomeSeller from "@pages/BecomeSeller";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Signup from "@pages/Signup";
import routeConstants from "@utils/routeConstants";

export default {
    home: {
        component: Home,
        ...routeConstants.home
    },
    login: {
        component: Login,
        ...routeConstants.login
    },
    signup: {
        component: Signup,
        ...routeConstants.signup
    },
    redirect: {
        component: Home,
        route: '/'
    },
    becomeASeller: {
        component: BecomeSeller,
        ...routeConstants.becomeASeller
    }
}