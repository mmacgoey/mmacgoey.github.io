export default function generateGallery(images) {

     return images.map(src => {

          const wrapper = document.createElement("div");
          wrapper.classList.add("gallery-item");

          const img = document.createElement("img");
          img.src = src;
          img.alt = "";

          wrapper.appendChild(img);
          return wrapper;

     });

}