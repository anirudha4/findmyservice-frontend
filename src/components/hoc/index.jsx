import routeConstants from "@utils/routeConstants";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const withGaurd = (WrappedComponent) => {
    return function Component(props) {
        const { isLoggedIn } = useSelector(state => state.authReducer);
        if (!isLoggedIn) {
            return <Navigate to={routeConstants.login.route} />
        }
        return <WrappedComponent {...props} />;
    }
};
withGaurd.displayName = 'withGaurd';
export default withGaurd