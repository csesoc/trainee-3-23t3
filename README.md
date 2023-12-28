# Moodify
Moodify is your one-stop shop for playlist generation based on your mood!!!
- Playlist Generation based on Mood/Activities and your current listening history
- Allows users to send the generated playlist directly to their account + regenerate/filter based on preferences
- Automatically create shared playlists with friends 


## Current Features
- Spotify account integration, allowing users to log into their own spotify accounts to generate playlists
- Input bar allowing users to enter their mood, using fuzzy matching (NLP model) to map entered moods to spotify API seeds to influence song generation
- Playlist generation based on entered mood and song play history


## Upcoming Features
- Playlist link generation to share generated songs with friends
- Chat GPT API integration with search bar to replace fuzzy matching, allowing for less specific mood inputs and more accurate mood / playlist generation



## Setup
Clone the repository
```
$ git clone git@github.com:csesoc/trainee-3-23t3.git
```
## Download Dependencies
From the root of the repository run the following command to download dependencies:
```
$ cd client && npm i && cd ../server && npm i && cd ..
```
NPM install in both the backend and frontend directories.

## Running the frontend
To run the frontend navigate to the /client directory and run npm run dev - i.e.
```
$ cd client && npm run dev
```
## Running the backend 
To run the backend navigate to the /server directory and run npm run dev - i.e.
```
# cd server && npm run dev
```
