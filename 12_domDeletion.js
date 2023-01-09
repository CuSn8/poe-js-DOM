const paragraphs = document.getElementsByTagName("p");
const paragraphsArray = [...paragraphs];
paragraphsArray.forEach((paragraph) => paragraph.remove());