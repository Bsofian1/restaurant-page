import Contact from "./contact.js";
import Menu from "./menu.js";

const App = ((_) => {
  //cache the dom
  const $content = document.querySelector("#content");
  console.log($content);

  const init = (_) => {
    //Make the 2 button on the page
    render();
    // Add event listeners to the buttons
    listerners();
  };

  const render = (_) => {
    let markup = "";
    markup += `<div class="tab">
        <button class="tablink left" >Menu</button>
        <button class="tablink right" >Contact</button>
      </div>`;
    $content.innerHTML = markup;
  };

  const listerners = (_) => {
    $content.addEventListener("click", function (e) {
      if (e.target.matches(".left")) {
        Menu.init();
      } else if (e.target.matches(".right")) {
        Contact.init();
      }
    });
  };

  return {
    init,
  };
})();

App.init();
