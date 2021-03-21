const Contact = ((_) => {
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
      <div class="tab-result" id="contact">
      <h1>Contact us</h1>
      <h2>Sen us an email and we will get in touch</h2>
  </div>`;
    $content.innerHTML = markup;
  };

  return {
    init,
  };
})();

export default Contact;
