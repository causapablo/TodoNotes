import { useDispatch, useSelector } from "react-redux";
import { logged, logout } from "../redux/actions/actionsCreators";

export const useCheckAuthBack = () => {
    const storeAuthBack = useSelector(state => state.auth.isAuthenticated);
    const userLocalStorage = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : null;
    const dispatch = useDispatch();
    if (!userLocalStorage){
        dispatch(logout())
    }else{
        dispatch(logged(userLocalStorage));
    }
    return storeAuthBack;
}
