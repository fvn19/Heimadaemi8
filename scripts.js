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
  /*const x = checked[0];
  const y = checked[1];
  const z = checked[2];
  */

  function finish() {
    const li = document.querySelectorAll('li');
    for (const element of li) {
      element.classList.toggle('item--done');
    }
  }

  /*const first = li[0];
    const second = li[1];
    const third = li[2];

    first.classList.toggle('item--done');
    second.classList.toggle('item--done');
    third.classList.toggle('item--done');
  }
  x.addEventListener('click', finish);
  y.addEventListener('click', finish);
  z.addEventListener('click', finish);
  */
  for (const element of checked) {
    element.addEventListener('click', finish);
  }


  // event handler fyrir það að breyta færslu
  function edit(e) {}

  /*/ Búum til 'items', HTML collection of "item__text" eindum
  items = document.getElementsByClassName("item__text");

  // Breytum HTML Collectioninu í fylki
  items = Array.from(items);

  // Lúppum í gegnum hvert stak í fylkinu og bætum onclick handler á það
  // sem kallar á edit þegar klikkað er
  items.forEach(function (element) {
    element.addEventListener('click', edit);
  });*/

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
  function commit(e) {}

  // fall sem sér um að bæta við nýju item

  function add() {
    const li = document.createElement('li');
    li.setAttribute('class', 'item');
    document.documentElement.lastChild.appendChild('li');
  }


  // event handler til að eyða færslu
  var remove = function () {
    this.parentNode.remove();
  };

  const lis = document.querySelectorAll('li');
  const button = document.querySelectorAll('button');

  for (var i = 0; i < lis.length; i++) {
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