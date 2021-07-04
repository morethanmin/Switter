import { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
export default function App() {
  console.log(authService.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; Switter {new Date().getFullYear()}</footer>
    </>
  );
}
