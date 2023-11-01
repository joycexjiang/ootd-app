// Footer.jsx
import React from "react";
import { Link } from "@radix-ui/themes";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        &#169; {currentYear} ootd app built by{" "}
        <Link href="https://joycejiang.space">joyce jiang</Link>
      </p>
    </footer>
  );
}

export default Footer;
