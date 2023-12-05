// const express = require('express');
// const SpotifyWebApi = require('spotify-web-api-node');
// const cors = require('cors');
// const bodyParser = require('body-parser');


// const app = express();
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.send('hello');
// })

// app.post('/login', (req, res) => {
//   const code = req.body.code;

//   // creating instance with developer spotify account
//   const spotifyApi = new SpotifyWebApi({
//     redirectUri: 'http://localhost:5173/',
//     clientId: '565694e7f53e4306860cdf425e9326d2',
//     clientSecret: 'b96c2e60a12646e7a645f342f307bd2a'
//   });

//   // authorise code passed from user authentication and extract access details
//   spotifyApi.authorizationCodeGrant(code).then(data => {
//     res.json({
//       accessToken: data.body.access_token,
//       refreshToken: data.body.refresh_token,
//       expiresIn: data.body.expires_in
//     })
//   }).catch((err) => {
//     console.log(err)
//     res.sendStatus(400);
//   });
// })

// app.post('/refresh', (req, res) => {
//   const refreshToken = req.body.refreshToken;
//   const spotifyApi = new SpotifyWebApi({
//     redirectUri: 'http://localhost:5173/',
//     clientId: '565694e7f53e4306860cdf425e9326d2',
//     clientSecret: 'b96c2e60a12646e7a645f342f307bd2a',
//     refreshToken
//   });

//   spotifyApi.refreshAccessToken().then((data) => {
//     res.json({
//       accessToken: data.body.access_token,
//       expiresIn: data.body.expires_in,
//     })
//   }).catch((err) => {
//     console.log(err)
//     res.sendStatus(400);
//   })

// })

// const port = 3001;
// app.listen(port, () => {
//   console.log(`App listening on port ${port}`)
// })