const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;

  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);

    // TODO láta hluti í _items virka
  }

  function formHandler(e) {
    e.preventDefault();

    console.log('halló heimur');
  }

  // event handler fyrir það að klára færslu
  function finish(e) {}

  // event handler fyrir það að breyta færslu
  document.querySelector(".item__text").onclick = function () {
    edit()
  };

  function edit() {

    var span, input, text;
    // Get the event (handle MS difference)
    event = event || window.event;

    // Get the root element of the event (handle MS difference)
    span = event.target || event.srcElement;

    if (span && span.tagName.toUpperCase() === "SPAN") {
      // Hide it 
      span.style.display = "none";

      // Get text 
      text = span.innerHTML;

      // Create an input
      input = document.createElement("input");
      input.type = "text";
      input.value = text;
      input.size = "95.5";
      span.parentNode.insertBefore(input, span);

      // Focus it, hook blur to undo 
      input.focus();
      if (event.key === "Enter") {

        event.preventDefault();
        // Remove the input
        span.parentNode.removeChild(input);

        // Update the span
        span.innerHTML = input.value == "" ? "&nbsp;" : input.value;

        // Show the span again
        span.style.display = "";
      };
    }
  }
  /*
  document.getElementsByClassName("item__text").addEventListener("click", edit); 
  function edit() {
    document.getElementsByClassName("item__text").click = edit () {
      var span, input, text;
      // Get the event (handle MS difference)
      event = event || window.event;

      // Get the root element of the event (handle MS difference)
      span = event.target || event.srcElement;

      if (span && span.tagName.toUpperCase() === "SPAN") {
        // Hide it 
        span.style.display = "none";

        // Get text 
        text = span.innerHTML;

        // Create an input
        input = document.createElement("input");
        input.type = "text";
        input.value = text;
        input.size = Math.max(text.lenth / 4 * 3, 4);
        span.parentNode.insertBefore(input, span);

        // Focus it, hook blur to undo 
        input.focus();
        input.onkeypress = function () {
          // Remove the input
          span.parentNode.removeChild(input);

          // Update the span
          span.innerHTML = input.value == "" ? "&nbsp;" : input.value;

          // Show the span again
          span.style.display = "";
        };
      }
    }
  }*/

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {}

  // fall sem sér um að bæta við nýju item
  function add(value) {}

  // event handler til að eyða færslu
  function deleteItem(e) {}

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {}

  return {
    init: init
  }
})();