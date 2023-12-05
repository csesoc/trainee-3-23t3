// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Layout from './Components/Layout';
// import Login from './Pages/LoginPage/LoginPage'
// import GeneratorPage from './Pages/GeneratorPage/GeneratorPage';
// import useAuth from './useAuth';


// function DashBoard({ code }) {
//     // const accessToken = useAuth(code);
//     return (
//         <div className="App">
//             <Router>
//                 <Routes>
//                     {/* Replace the below Login component with home page */}
//                     <Route exact path="/" element={<Layout><Login /></Layout>} />
//                     <Route exact path="/generate" element={<Layout><GeneratorPage /></Layout>} />
//                     {/*
//                     <Route exact path="/friends" element={<Layout><FriendsPage /></Layout>} />
//                     <Route exact path="/playlists" element={<Layout><PlaylistPage /></Layout>} />
//                     */}
//                 </Routes>
//             </Router>
//         </div>
//     );
// }

// export default DashBoard;