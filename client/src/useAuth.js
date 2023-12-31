// import { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function useAuth(code) {
//     const [accessToken, setAccessToken] = useState();
//     const [refreshToken, setRefreshToken] = useState();
//     const [expiresIn, setExpiresIn] = useState();

//     useEffect(() => {
//         axios.post('http://localhost:3001/login', {
//             code,
//         }).then(res => {
//             setAccessToken(res.data.accessToken);
//             setRefreshToken(res.data.refreshToken);
//             setExpiresIn(res.data.expiresIn);
//             window.history.pushState({}, null, '/');
//         }).catch((err) => {
//             console.log(err)
//             window.location = "/"
//         })
//     }, [code]);

//     // refresh our token when it expires
//     useEffect(() => {
//         if (!refreshToken || !expiresIn) {
//             return;
//         }
//         // automatically will reset our token before the reset
//         // setInterval will run *every* time our expiresIn is about to change
//         const interval = setInterval(() => {
//             axios.post('http://localhost:3001/refresh', {
//                 refreshToken,
//             }).then(res => {
//                 setAccessToken(res.data.accessToken);
//                 setExpiresIn(res.data.expiresIn);
//             }).catch(() => {
//                 window.location = "/"
//             })
//         }, (expiresIn - 60) * 1000);

//         return () => clearInterval(interval);
//     }, [refreshToken, expiresIn])

//     return accessToken;
// }