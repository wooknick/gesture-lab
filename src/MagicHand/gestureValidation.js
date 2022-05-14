function distance(from, to) {
  return Math.sqrt(
    Math.pow(Math.abs(from.x - to.x), 2) +
      Math.pow(Math.abs(from.y - to.y), 2) +
      Math.pow(Math.abs(from.z - to.z), 2)
  );
}

export function isRockNRoll(landmark) {
  if (
    distance(landmark[0], landmark[8]) > distance(landmark[0], landmark[5]) &&
    distance(landmark[0], landmark[12]) <= distance(landmark[0], landmark[9]) &&
    distance(landmark[0], landmark[16]) <=
      distance(landmark[0], landmark[13]) &&
    distance(landmark[0], landmark[20]) > distance(landmark[0], landmark[17])
  ) {
    return true;
  } else {
    return false;
  }
}

export function isVictory(landmark) {
  if (
    distance(landmark[0], landmark[8]) > distance(landmark[0], landmark[5]) &&
    distance(landmark[0], landmark[12]) > distance(landmark[0], landmark[9]) &&
    distance(landmark[0], landmark[16]) <=
      distance(landmark[0], landmark[13]) &&
    distance(landmark[0], landmark[20]) <= distance(landmark[0], landmark[17])
  ) {
    return true;
  } else {
    return false;
  }
}

export function isFist(landmark) {
  if (
    distance(landmark[0], landmark[8]) <= distance(landmark[0], landmark[5]) &&
    distance(landmark[0], landmark[12]) <= distance(landmark[0], landmark[9]) &&
    distance(landmark[0], landmark[16]) <=
      distance(landmark[0], landmark[13]) &&
    distance(landmark[0], landmark[20]) <= distance(landmark[0], landmark[17])
  ) {
    return true;
  } else {
    return false;
  }
}

export function isStand(landmark) {
  // 평범하게 손을 들고 있는 상태 트리거
  let ret = true;
  if (
    landmark[7].y < landmark[8].y ||
    landmark[11].y < landmark[12].y ||
    landmark[15].y < landmark[16].y ||
    landmark[19].y < landmark[20].y
  ) {
    ret = false;
  }
  return ret;
}

export function isStretchBack(landmark) {
  // 농구공을 들듯 손을 당기는 제스쳐
  let ret = false;
  // console.log(
  //   Math.floor(landmark[0].z * 10000) - Math.floor(landmark[9].z * 10000)
  // );
  if (
    Math.floor(landmark[0].z * 10000) - Math.floor(landmark[9].z * 10000) <
    -100
  ) {
    ret = true;
  }

  return ret;
}
