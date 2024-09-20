import {Routes, Route} from "react-router-dom";
import TableUsers from '../components/TableUsers';
import Home from '../components/Home';
import Login from '../components/Login';
import PrivateRoute from "./PrivateRoute";
import Notfound from "./Notfound";

const AppRoutes = () =>{
    return(
        <>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            
            <Route 
                path="/users"
                element={
                    <PrivateRoute>
                        <TableUsers/>
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<Notfound/>}/>
            </Routes>
        </>
    )
}
export default AppRoutes;