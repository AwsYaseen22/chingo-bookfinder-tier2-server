# Book finder App

![Tier2 Book Finder](./screen-shot.png)

This project is simply a simplified display based on the google books api we could search for a title then the first 10 result will appears as a cards

It is part of the requirement of Chingu solot project

## Technologies used:

React, Express, Tailwind

## Steps required before start:

```
don't forget npm install 😅
```

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
also if you will start the React project it will count on this server

### `npm run build:ui`

create a build bundle from the frontend react app and put the build folder here in the server repository

### `npm run deploy:full`

Run the build:ui then add, commit to the github repo then automatically updated the hosting in Cyclic

### Repositories:

[server repo](https://github.com/AwsYaseen22/chingo-bookfinder-tier2-server)

[react repo](https://github.com/AwsYaseen22/chingo-bookfinder-tier2)

[hosted application](https://changu-bookfinder.cyclic.app)

## checklist from chingu:

_Structure_

- Review the [Google Books API](https://developers.google.com/books/) documentation. Things to look for:
  - [ ] API endpoint
  - [ ] Setting up an API token
  - [ ] Setting up a request aka plugging in search terms, limits to the returned result, etc
  - [ ] How to query only for the exact info you need.
- Setup your parent component with at least the following:
  - [ ] Search input element and button
  - [ ] Book cards
- Create a stateless book card component. This component does not need to keep
  any state; it's a pure component that just outputs a rendered component
  containing:
  - [ ] Cover image
  - [ ] Title
  - [ ] Author
  - [ ] Publisher
  - [ ] Link to more information

_Style_

- [ ] You may use any style you choose. However, it should be consistent (e.g.
      font, font size, color scheme, layout, etc.).
  - See [Consistent Web Design](https://1stwebdesigner.com/consistent-web-design/)
  - See [Why is consistency important in Web Design?](https://laceytechsolutions.co.uk/blog/importance-of-consistency-in-web-design/)

_Functionality_

- [ ] Make an API call to Google Books API and handle loading, resolved, and
      error conditions
- [ ] Accept book search terms in the search input element and search for
      matching books when the 'Search' button is clicked. Iterate over the returned
      results to display the book cards with the information noted above.

_Other_

- [ ] Your repo needs to have a robust `README.md` (See [Keys to a Well-Written Readme](https://medium.com/chingu/keys-to-a-well-written-readme-55c53d34fe6d))
- [ ] Before submitting make sure that there are no errors in the developer console
- [ ] Anticipate and handle any edge cases. Think about what the user will see
      and how the app should handle edge cases such as these:
  - [ ] Does entering random data, such as a mix of alphbetic, numeric, and
        special characters in the search input result in an error?
  - [ ] What happens if the API request takes too long?
  - [ ] What if the API returns an error?
  - [ ] What if the user submits an empty string?
  - [ ] What if the API returns 0 results?
- [ ] The app should be responsive across multiple devices (e.g. phone, tablet,
      laptop, and desktop computers). For more information see
      [Responsive Web Design Basics](https://developers.google.com/web/fundamentals/design-and-ux/responsive/)

**Extras (Not Required)**

- [ ] Create a bookshelf for the users that stores bookmarked books
- [ ] On search input, display the last 10 search queries
- [ ] Use as FEW external packages and libraries as possible to reduce the
      number of dependencies.
- [ ] Include tests cases using tools like Jest, Enzyme, etc.
- [ ] Use Accessibility techniques (i.e. a11ly) to improve your site for users
      with impairments (see [A11Y Project](https://a11yproject.com/))
- [ ] Add a `CONTRIBUTING.md` file with instructions on how to contribute to
      your project
- [ ] Implement service workers to improve performance by relying on cached
      data (see [Service Workers: An Introduction](https://developers.google.com/web/fundamentals/primers/service-workers))
