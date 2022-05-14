import MagicHand from "./MagicHand/index";

document.body.onload = () => {
  const aside = document.querySelector("aside#list");
  const canvas = document.querySelector("section#canvas");
  const label = document.querySelector("section#label");

  const magicHand = new MagicHand(canvas);

  magicHand.availableGesture.forEach((gesture) => {
    const gestureItem = document.createElement("span");
    gestureItem.className = "gesture-item";
    gestureItem.dataset["gesture"] = gesture;
    gestureItem.innerHTML = gesture;
    aside.appendChild(gestureItem);
  });
  magicHand.debug();
  magicHand.onGesture(handleGesture);
  magicHand.start();

  function handleGesture({ left, right }) {
    label.querySelector("div#left-hand>span.value").innerHTML = left;
    label.querySelector("div#right-hand>span.value").innerHTML = right;

    // hightlight
    document.querySelectorAll("aside>span").forEach((span) => {
      span.classList.remove("highlight");
    });
    document
      .querySelector(`[data-gesture=${left}]`)
      ?.classList.add("highlight");
    document
      .querySelector(`[data-gesture=${right}]`)
      ?.classList.add("highlight");
  }
};
