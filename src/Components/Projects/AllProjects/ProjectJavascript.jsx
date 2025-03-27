import React from 'react';
import ProjectShowcase from './ProjectShowcase';

const ProjectJavascript = () => {
  const liveUrl = "https://your-live-url.com"; // Replace with your live project URL
  const htmlCode = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currency change.com</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <div class="container">
        <h1>Currency Converter</h1>
        
        </form>
    </div>
    <script src="codes.js"></script>
    <script src="script.js"></script>
</body>

</html>
  `;
  
  const cssCode = `
    * {
    margin: 0;
    padding: 0;
}

  `;
  
  const jsCode = `
const Base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropbox = document.querySelectorAll(".dropbox select");

  `;

  return (
    <ProjectShowcase 
      title="JavaScript Currency Converter"
      liveUrl={liveUrl} 
      htmlCode={htmlCode} 
      cssCode={cssCode} 
      jsCode={jsCode} 
    />
  );
};

export default ProjectJavascript;
