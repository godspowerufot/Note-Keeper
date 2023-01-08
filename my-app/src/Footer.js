import React from "react";

function Footer() {
  let nows = new Date().toLocaleDateString("en-GB", {
    date:"numeric",
    year: "numeric",
  });
  return (
    <>
      <footer>
        <p>copyright {nows}</p>
        
      </footer>
    </>
  );
}

export default Footer;
