# Book finder App

This project is simply a siplified display based on the google books api we could search for a title then the first 10 result will appears as a cards

## Technologies used:

React, Express, Tailwind

## Steps required before start:

A .env file should be created with the following keys for the port and the google books api key:

```
PORT
REACT_APP_GOOGLE_API_KEY
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

to run the server as API:
[http://localhost:8000/api/books/Eloquent](http://localhost:8000/api/books/Eloquent) to view it in your browser.

### `npm run build:ui`

create a build bundle from the frontend react app and put the build folder here in the server repository

### `npm run deploy:full`

Run the build:ui then add, commit to the github repo then automatically updated the hosting in Cyclic

### Repositories:

[server repo](https://github.com/AwsYaseen22/chingo-bookfinder-tier2-server)

[react repo](https://github.com/AwsYaseen22/chingo-bookfinder-tier2)

[hosted application](https://changu-bookfinder.cyclic.app)
