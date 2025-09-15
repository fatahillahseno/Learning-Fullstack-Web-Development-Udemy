function updateImageAttributes() {
  let imageElement = document.getElementById("exampleImage");

  // mengambil nilai atribut pada suatu elemen
  let imgSrc = imageElement.getAttribute("src");
  let imgAlt = imageElement.getAttribute("alt");

  console.log(imgSrc);
  console.log(imgAlt);

  // mengubah nilai atribut pada suatu elemen
  imageElement.setAttribute(
    "src",
    "https://placehold.co/600x400/EEE/31343C?font=raleway&text=Raleway"
  );

  imageElement.setAttribute("alt", "Updated Placeholder Image ");
}

// updateImageAttributes();
