const beeramid = (bonus, price) => {
    let beerTotal = bonus/price - 1;
    if (beerTotal < 1 && bonus !== price) return 0;
    let level = 2;
    let isPossible = true;
    while (isPossible) {
      let beersNeeded = Math.pow(level, 2);
      if (beerTotal >= beersNeeded) {
        level++;
        beerTotal -= beersNeeded;
        continue;
      }
      isPossible = false;
    }
    return level-1;
  }