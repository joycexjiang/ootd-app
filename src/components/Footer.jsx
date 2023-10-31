// Footer.jsx
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&#169; {currentYear} Keeper App</p>
    </footer>
  );
}

export default Footer;
