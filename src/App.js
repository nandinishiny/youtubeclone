import React from "react";
import {Outlet, createBrowserRouter} from 'react-router-dom'
import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";
import Body from "./components/Body";
import VideoPlay from "./components/VideoPlay";
import { Provider } from "react-redux";
import store from "./redux/Store";
const App = ()=>{
    return(
        <Provider store={store}>
        <Header/>
        <Outlet/>
        </Provider>
    );
}
export const AppRouter =createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/watch/:resId",
                element:<VideoPlay/>
            },
        ]
    }

]);
export default App;


//https://github.com/nandinishiny/ytclone.git