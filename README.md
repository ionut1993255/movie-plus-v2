# Movie Plus

Welcome to `Movie Plus`, a dynamic web application designed for movie enthusiasts who want to explore, discover and manage their favorite movies. This project incorporates various features and concepts to provide users with an immersive and personalized experience.

## Installation Guide

1. Install the dependencies using `yarn install`.
2. Run the frontend development server using `yarn start`.
3. Open your browser and navigate to <a href="http://localhost:3000">`http://localhost:3000`</a> to view the application.

## Key Features

- **Movie Search**: Explore a vast collection of movies by searching for specific titles.
- **Movie Details**: View detailed information about each movie, including its poster, plot and ratings.
- **Watched List**: Keep track of the movies you've watched and manage your watched list.
- **Rating System**: Rate each movie to create a personalized collection tailored to your tastes.
- **Global Styling**: Maintain consistent design and styling using global styles defined in `GlobalStyles.js`. This file sets up primary, text, background, accent and box shadow colors, fostering a cohesive visual identity across the application.
- **Context API**: Utilize `Context API` to manage global state related to movies, watched movies and dark mode feature. Files `MoviesContext.js`, `WatchedMoviesContext.js` and `DarkModeContext.js` contain the logic for managing this state.
- **Styled Components**: Design and style `UI` components using `styled-components` for enhanced code reusability and maintainability.
- **Custom Hooks**: Leverage custom hooks like `useLocalStorageState`, `useKey`, `useMovies`, `useMovieDetails` and `useOutsideClick` for managing various functionalities. `useLocalStorageState` manages local storage state, `useKey` handles keyboard event listeners, `useMovies` fetches movie data, `useMovieDetails` fetches detailed information about a movie and `useOutsideClick` handles clicks outside specific elements.
- **Reusable Components**: Utilize a variety of reusable components like `Box`, `Button`, `ErrorMessage`, `Heading`, `Img`, `Input`, `Loader`, `Paragraph`, `Star`, `StarRating` and more.
- **API Services**: Interact with the external `OMDb API` in the `apiMovies.js` service file.
- **Utils Folder**: Contains `constants.js` for storing constants and `helpers.js` for utility functions.
- **Dark Mode**: `DarkModeContext` contains the functionality for switching between light and dark mode. The app automatically adjusts based on the user's browser settings.
- **React Icons**: Used `react-icons` for easily adding icons to the application.
- **React-hot-toast**: Implemented toast notifications for user feedback and notifications.
- **Render Props Pattern**: Implemented `Render Props Pattern` in the `MovieList` and `WatchedMoviesList` components for enhanced component composition and flexibility.
- **Compound Component Pattern**: Utilized `Compound Component Pattern` in the `Modal` component for better organization and flexibility.

## Technologies Used

The `Movie Plus` project utilizes the following technologies and concepts:

- **React**: Utilized for building the user interface and managing application state.
- **Styled-components**: Used for styling components throughout the project.
- **React Hooks**: Leveraged built-in hooks like `useState`, `useEffect` and custom hooks such as `useLocalStorageState`.
- **API Integration**: Integrated with the `OMDb API` for fetching movie data.
- **Error Handling**: Implemented error handling for `API` requests and displayed error messages to users.
- **Reusable Components**: Developed reusable `UI` components for enhanced code reusability and maintainability.

## Conclusion

The `Movie Plus` project showcases the capabilities of `React` and related technologies in building a dynamic and interactive web application for movie enthusiasts. With its intuitive user interface and rich feature set, `Movie Plus` offers users a delightful experience for exploring and managing their favorite movies. Feel free to dive into the world of cinema with `Movie Plus`!
