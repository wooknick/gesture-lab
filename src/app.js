import MagicHand from "./MagicHand";

document.body.onload = () => {
  const magicHand = new MagicHand();
  magicHand.start();
  magicHand.debug();
};
