# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Homework 52 — Game Library Tracker

## 📌 Project Description

This is a course project created using **React + Vite**.

The project demonstrates how to build a medium-complexity React application using **Redux Toolkit** for global state management.

The application is styled as a dark gaming dashboard called **Game Library Tracker**.  
It allows users to manage their personal video game library, track game progress, add games to favorites, edit profile information, switch themes, and use a frontend mock-authentication system.

The project implements:

- React project created with Vite
- Redux Toolkit
- React Redux
- Redux store configuration
- multiple Redux slices
- createAsyncThunk for mock game loading
- mock authentication screen
- register / login / logout functionality
- personal profile page
- dashboard page
- game library page
- localStorage data persistence
- adding games
- editing games
- deleting games
- confirm modal before deleting
- favorite games feature
- progress tracking
- game status changing
- game cover image support
- search functionality
- filters by status, genre, platform, and favorites
- sorting by title, rating, hours, and progress
- theme switcher
- custom notifications
- custom responsive gaming UI design
- background image from the public folder
- deployed version on Vercel

---

## 🚀 Technologies

- React
- Vite
- JavaScript
- CSS
- Redux Toolkit
- React Redux
- createSlice
- createAsyncThunk
- useState
- useEffect
- useSelector
- useDispatch
- localStorage
- Responsive Layout
- Custom UI Components

---

## 📁 Project Structure

```bash
HOMEWORK 52/
   └── my-react-app/
         ├── node_modules/
         ├── public/
         │     └── gameroom.jpg
         ├── src/
         │   ├── app/
         │   │     └── store.js
         │   ├── components/
         │   │     ├── ConfirmModal.jsx
         │   │     ├── EmptyState.jsx
         │   │     ├── Modal.jsx
         │   │     └── ThemeSwitcher.jsx
         │   ├── features/
         │   │   ├── auth/
         │   │   │   └── model/
         │   │   │       └── authSlice.js
         │   │   ├── filters/
         │   │   │   ├── components/
         │   │   │   │   └── GameFilters.jsx
         │   │   │   └── model/
         │   │   │       └── filtersSlice.js
         │   │   ├── games/
         │   │   │   ├── api/
         │   │   │   │   └── gamesApi.js
         │   │   │   ├── components/
         │   │   │   │   ├── GameCard.jsx
         │   │   │   │   ├── GameForm.jsx
         │   │   │   │   ├── GameList.jsx
         │   │   │   │   └── GameStats.jsx
         │   │   │   └── model/
         │   │   │       └── gamesSlice.js
         │   │   ├── notifications/
         │   │   │   ├── components/
         │   │   │   │   └── Notification.jsx
         │   │   │   └── model/
         │   │   │       └── notificationSlice.js
         │   │   ├── theme/
         │   │   │   └── model/
         │   │   │       └── themeSlice.js
         │   │   └── user/
         │   │       ├── components/
         │   │       │   ├── ProfileForm.jsx
         │   │       │   └── UserProfileCard.jsx
         │   │       └── model/
         │   │           └── userSlice.js
         │   ├── pages/
         │   │     ├── AuthPage.jsx
         │   │     ├── DashboardPage.jsx
         │   │     ├── LibraryPage.jsx
         │   │     └── ProfilePage.jsx
         │   ├── utils/
         │   │     └── storage.js
         │   ├── App.jsx
         │   ├── index.css
         │   └── main.jsx
         ├── .gitignore
         ├── eslint.config.js
         ├── index.html
         ├── package-lock.json
         ├── package.json
         ├── README.md
         └── vite.config.js
```

---

## ⚙️ Installation and Launch

1. Clone the repository:

```bash
git clone https://github.com/MsMeow-jpg/My-homework-52
```

2. Go to the project folder:

```bash
cd My-homework-52/my-react-app
```

3. Install dependencies:

```bash
npm install
```

4. Install Redux libraries if needed:

```bash
npm install @reduxjs/toolkit react-redux
```

5. Launch the project:

```bash
npm run dev
```

---

After this, the project will be available at:

```bash
http://localhost:5173
```

---

## 🌐 Demo

🔗 Live demo:

```bash
https://my-homework-52.vercel.app/
```

---

## 🔗 Repository

GitHub repository:

```bash
https://github.com/MsMeow-jpg/My-homework-52
```

---

## 📦 Functionality

- The project displays a personal game library dashboard
- Users can register using a mock-auth screen
- Users can log in and log out
- Users can open Dashboard, Library, and Profile pages
- Users can add new games to the library
- Users can edit existing games
- Users can delete games
- Before deleting a game, the app shows a confirm modal
- Users can add games to favorites
- Users can remove games from favorites
- Users can change game status
- Users can track game progress percentage
- Users can use a progress slider
- Users can add game cover images by URL
- Users can filter games by status, genre, platform, and favorites
- Users can search games by title
- Users can sort games by title, rating, hours, and progress
- Users can switch between several themes
- Users can edit profile information
- User profile and library data are saved in localStorage
- The app shows custom notifications after user actions
- The layout is responsive

---

## 🧩 Redux Toolkit Usage

The project uses **Redux Toolkit** for global state management.

Redux store is configured in:

```bash
src/app/store.js
```

The store combines several slices:

```bash
auth            → mock authentication state
games           → game library data
filters         → search, filters, and sorting
notifications   → custom notification state
theme           → selected UI theme
user            → profile / personal cabinet data
```

---

## 🗂️ Redux Slices

### authSlice

Located in:

```bash
src/features/auth/model/authSlice.js
```

Responsible for frontend mock-authentication.

It includes:

```bash
isAuthenticated
currentUser
registeredUser
error
registerUser
loginUser
logoutUser
clearAuthError
```

The password is **not stored** in localStorage.  
It is used only as a form imitation field.

---

### gamesSlice

Located in:

```bash
src/features/games/model/gamesSlice.js
```

Responsible for game library state.

It includes:

```bash
items
isLoading
isLoaded
error
fetchGames
addGame
deleteGame
editGame
updateGameStatus
updateGameProgress
toggleFavorite
```

The project uses `createAsyncThunk` to imitate loading games from an API.

---

### filtersSlice

Located in:

```bash
src/features/filters/model/filtersSlice.js
```

Responsible for filtering and sorting games.

It includes:

```bash
search
status
genre
platform
favoritesOnly
sortBy
setSearch
setStatusFilter
setGenreFilter
setPlatformFilter
setFavoritesOnly
setSortBy
resetFilters
```

---

### userSlice

Located in:

```bash
src/features/user/model/userSlice.js
```

Responsible for the personal cabinet / user profile.

It includes:

```bash
profile
updateUserProfile
resetUserProfile
```

---

### themeSlice

Located in:

```bash
src/features/theme/model/themeSlice.js
```

Responsible for UI theme switching.

Available themes:

```bash
Vampire
Neon
Cozy
```

The selected theme is saved in localStorage.

---

### notificationSlice

Located in:

```bash
src/features/notifications/model/notificationSlice.js
```

Responsible for custom toast-style notifications.

It includes:

```bash
message
type
isVisible
showNotification
hideNotification
```

---

## 🔐 Mock Authentication

The project includes a frontend mock-auth system.

Users can:

```bash
Register
Login
Logout
```

Auth data is saved in:

```bash
game-library-auth-user
```

This data is stored in localStorage.

Important note:

```bash
The password is not stored.
```

The password field exists only to imitate a login/register form.  
This is not a real protected authentication system.

In the future, this logic can be replaced with a backend API, database, password hashing, and token-based authentication.

---

## 🧑 Personal Cabinet

The project includes a profile page / personal cabinet.

Users can view and edit:

```bash
username
email
gaming nickname
favorite platform
avatar URL
short bio
```

The profile also displays game statistics:

```bash
total games
completed games
favorite games
total hours
```

Profile data is saved in localStorage.

---

## 🎮 Game Data

Each game object contains:

```bash
id             → unique game ID
title          → game title
genre          → game genre
platform       → game platform
status         → current progress status
rating         → user rating from 0 to 10
hours          → hours played
progress       → completion progress in percent
isFavorite     → favorite state
createdAt      → date when the game was added
image          → game cover image URL
description    → short game description
```

Example:

```js
{
  id: "1",
  title: "Cyberpunk 2077",
  genre: "RPG",
  platform: "PC",
  status: "playing",
  rating: 9,
  hours: 120,
  progress: 65,
  isFavorite: true,
  createdAt: "2026-06-01T12:00:00.000Z",
  image: "/games/cyberpunk.jpg",
  description: "Open-world RPG in a cyberpunk city."
}
```

---

## 🎲 Game Statuses

Available game statuses:

```bash
Want to play
Playing
Completed
Dropped
```

When progress is changed to `100%`, the game status can automatically become:

```bash
Completed
```

---

## ⭐ Favorites

Users can mark games as favorites by clicking the star button.

Favorite games can be filtered using:

```bash
Favorites only
```

This feature is managed through Redux Toolkit.

---

## 📊 Dashboard Page

The project includes a dashboard page.

The dashboard displays:

```bash
total games
completed games
favorite games
total hours
latest added game
top rated game
most played game
average progress
```

This page gives the user a quick overview of the whole game library.

---

## 🔎 Filters and Sorting

The project includes filters by:

```bash
status
genre
platform
favorites only
```

The project includes sorting by:

```bash
default order
title
rating
hours
progress
```

The search field allows users to find games by title.

---

## 🖼️ Game Cover Images

Each game can have a cover image.

Users can add an image by pasting a URL into the:

```bash
Image URL
```

field.

Images can be external links or local files from the public folder.

Example local path:

```bash
/games/hades.jpg
```

If no image is provided, the card displays a custom placeholder.

---

## 🗓️ Date Added

Each game has an automatic date of creation.

When a new game is added, the app creates:

```js
createdAt: new Date().toISOString()
```

The card displays this date as:

```bash
Added: 04.06.2026
```

This makes the game library easier to track and improves the dashboard overview.

---

## 🎨 Theme Switcher

The app includes a theme switcher.

Available themes:

```bash
Vampire
Neon
Cozy
```

The selected theme changes the visual style of the interface.

Theme state is managed by Redux Toolkit and saved in localStorage.

---

## 🗑️ Confirm Modal

Before deleting a game, the app displays a confirmation modal.

The modal includes:

```bash
Delete game?
Cancel
Delete
```

This prevents accidental deletion and improves user experience.

---

## 🔔 Custom Notifications

The project includes custom notifications.

Notifications appear after actions such as:

```bash
registration
login
logout
adding a game
editing a game
deleting a game
changing status
adding to favorites
removing from favorites
updating profile
validation errors
```

Notification state is managed through Redux Toolkit.

---

## 💾 localStorage

The project uses localStorage to save:

```bash
game library
user profile
auth mock-user
selected theme
```

Storage keys:

```bash
game-library-tracker-games
game-library-tracker-user
game-library-auth-user
game-library-theme
```

This allows data to remain after page reload.

---

## 🧩 Main Components

```bash
AuthPage           → login/register mock-auth screen
DashboardPage      → main overview page with statistics
LibraryPage        → page with game library
ProfilePage        → personal cabinet page

GameCard           → displays one game card
GameForm           → add/edit game form
GameList           → renders filtered and sorted games
GameStats          → displays library statistics
GameFilters        → search, filters, sorting, favorites filter

UserProfileCard    → displays profile information and stats
ProfileForm        → edits user profile

Modal              → reusable modal component
ConfirmModal       → delete confirmation modal
EmptyState         → shown when no games are found
ThemeSwitcher      → changes app theme
Notification       → custom toast-style notification
```

---

## 🧪 Testing the Project Manually

To test the project manually:

1. Run the project:

```bash
npm run dev
```

2. Open the browser:

```bash
http://localhost:5173
```

3. Check that the Auth screen is displayed.

4. Click `Register`.

5. Fill in:

```bash
username
nickname
email
password
```

6. Click `Create account`.

7. Check that the dashboard opens.

8. Check that navigation buttons are visible:

```bash
Dashboard
Library
Profile
Theme switcher
Logout
```

9. Open the `Library` page.

10. Click `+ Add Game`.

11. Fill in the game form.

12. Click `Add game`.

13. A notification should appear.

14. The game should be added to the list.

15. Reload the page.

16. The game should still be visible.

17. Click the star button.

18. The game should be added to favorites.

19. Enable `Favorites only`.

20. Only favorite games should be visible.

21. Change game progress with the slider.

22. The progress bar should update.

23. Change game status.

24. The game status should update.

25. Click `Edit game`.

26. Change game information.

27. Click `Save changes`.

28. The card should update.

29. Click `Delete`.

30. A confirm modal should appear.

31. Click `Cancel`.

32. The game should not be deleted.

33. Click `Delete` again.

34. Confirm deleting the game.

35. The game should be removed.

36. Check the dashboard.

37. Dashboard statistics should update.

38. Open the `Profile` page.

39. Click `Edit profile`.

40. Change username, nickname, avatar, or bio.

41. Save changes.

42. Profile information should update.

43. Change theme using the theme switcher.

44. Reload the page.

45. The selected theme should stay active.

46. Click `Logout`.

47. The Auth screen should appear again.

48. Login using the registered email and any password imitation value.

49. The dashboard should open again.

50. Make sure there are no errors in the console.

---

## 📌 Homework Requirements Covered

### 1. Project Initialization

- The project is initialized with Vite
- Dependencies are installed
- The project runs with `npm run dev`

### 2. Project Theme

- The project has a custom Game Library / Game Tracker theme
- The interface matches the chosen topic
- The project demonstrates a medium-complexity frontend application
- The structure is ready for future backend integration

### 3. React and Redux Toolkit

- React is used for UI components
- Redux Toolkit is used for global state management
- Multiple slices are implemented
- `createAsyncThunk` is used for mock data loading
- Redux state is separated from UI components
- State logic is organized by features

### 4. Project Structure

- Components are separated into individual files
- Feature modules are organized by responsibility
- Pages are separated into different files
- Redux slices are stored inside feature folders
- Utility functions are stored separately
- Code follows readable naming and clear structure

### 5. Functionality

- Mock authentication is implemented
- Dashboard is implemented
- Game library is implemented
- Personal cabinet is implemented
- Filtering is implemented
- Sorting is implemented
- Theme switching is implemented
- localStorage persistence is implemented
- Confirm modal is implemented
- Notifications are implemented

### 6. Documentation

- The project includes this README file
- README contains:
  - project description
  - technologies used
  - installation instructions
  - project structure
  - functionality description
  - Redux Toolkit explanation
  - localStorage explanation
  - testing instructions
  - repository link
  - demo link

### 7. Deployment

The project is deployed on Vercel.

Live demo:

```bash
https://my-homework-52.vercel.app/
```

---

## 📦 Build

To create a production build, run:

```bash
npm run build
```

The build files will be generated in the `dist` folder.

---

## 🚀 Vercel Deployment Settings

For Vercel, the recommended settings are:

```bash
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

---

## ✍️ Author

GitHub: MsMeow-jpg

---

## 📌 Note

This project was completed as part of a React + Redux Toolkit course assignment.

The main goal of the project is to practice building a structured React application with Redux Toolkit, reusable components, global state management, slices, mock async logic, localStorage persistence, and a frontend prepared for future backend integration.

The authorization in this project is a frontend mock-auth implementation. It is not a real secure authentication system. The password is not stored and is used only for form imitation. In the future, this functionality can be replaced with backend authorization, database storage, password hashing, and token-based sessions.

The final result is a responsive Game Library Tracker app with a dashboard, personal cabinet, mock authentication, editable game library, filters, sorting, favorites, progress tracking, custom notifications, theme switching, confirm modal, localStorage support, and a custom gaming design.