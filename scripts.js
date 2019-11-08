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
  const checked = document.querySelectorAll('.item__checkbox');
  const li = document.querySelectorAll('li')

  function finish(e) {
    e.target.parentNode;
  }
  for (const element of checked) {
    element.addEventListener('check', finish);
  }
  for (const element of li) {
    element.classList.toggle('item--done');
  }

  // event handler fyrir það að breyta færslu


  // Búum til 'items', NodeListOf collection of "item__text" eindum
  const spa = document.querySelectorAll(".item__text");

  // Lúppum í gegnum hvert stak í fylkinu og bætum onclick handler á það
  // sem kallar á edit þegar klikkað er
  for (const element of spa) {
    element.addEventListener('click', edit);
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
      input.size = Math.max(text.length);
      span.parentNode.insertBefore(input, span);

      // Focus it, hook blur to undo 
      input.focus();
      input.onkeypress = function () {
        // Remove the input
        span.parentNode.removeChild(input);

        // Update the span
        span.innerHTML = input.value;

        // Show the span again
        span.style.display = "";
      };
    }
  }

  /* var x = document.getElementsByClassName("item__text");
   var i;
   for (i = 0; i < x.length; i++) {
     x.addEventListener("click", edit);
   };

   function edit() {

     var para = document.createElement("input");
     var node = document.createTextNode("");
     para.appendChild(node);

     var parent = document.getElementById("div1");
     var child = document.getElementById("p1");
     parent.replaceChild(para, child);
   }*/
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
  function commit(e) {

  }

  // fall sem sér um að bæta við nýju item

  function add() {
    if (li === 'item--done') {
      const lis = document.createElement('li');
      lis.setAttribute('class', 'item');
      document.documentElement.lastChild.appendChild('li');
    }
  }
  document.querySelector(".form__button").addEventListener("click", add);

  // event handler til að eyða færslu
  var remove = function () {
    this.parentNode.remove();
  };

  const button = document.querySelectorAll('button');

  for (var i = 0; i < li.length; i++) {
    button[i].addEventListener('click', remove, false);
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'item__text');
    input.setAttribute('value', 'foo');
    input.value;
  }

  return {
    init: init
  }
})();