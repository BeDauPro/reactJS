import Container from 'react-bootstrap/esm/Container';
import './App.scss';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes/AppRoutes';
import { UserContext } from './context/UserContext';
import React, { useContext, useEffect } from 'react';


function App() {
  
  const { user, loginContext } = useContext(UserContext);

  console.log(">>>user: ",user)
  useEffect(()=>{
    if(localStorage.getItem("token")){
      loginContext(localStorage.getItem("email"), localStorage.getItem("token"))
    }
  },[])

  return (
    <>
   <div className='app-container'>
    <Header/>
    <Container>
      <AppRoutes/>
    </Container>
   
   </div>
      <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
   </>
  );
}

export default App;
