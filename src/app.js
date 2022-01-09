import MagicHand from "./MagicHand";

document.body.onload = () => {
  const magicHand = new MagicHand();
  magicHand.start();
  magicHand.debug();
  // magicHand.onGesture(handleGesture);

  function handleGesture({ left, right }) {
    console.log(`Left is ${left}`);
    console.log(`Right is ${right}`);
  }
};
