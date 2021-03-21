const Menu = ((_) => {
  const $content = document.querySelector("#content");

  const init = (_) => {
    render();
  };

  const render = (_) => {
    let markup = "";
    markup += `
        <div class="tab">
        <button class="tablink left" >Menu</button>
        <button class="tablink right" >Contact</button>
      </div>
        <div class="tab-result" id="menu">
        <h1>Menu</h1>
        <h2>Discover the best food in town</h2>
    </div>`;
    $content.innerHTML = markup;
  };

  return {
    init,
  };
})();

export default Menu;
