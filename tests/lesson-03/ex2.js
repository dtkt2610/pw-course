const height = 163;

// IBW: Ideal Body Weight
if (height >= 100 && height <= 200) {
    IBW = (height - 100) * 9 / 10;
    maxWeight = height - 100;
    minWeight = (height - 100) * 8 / 10;
    console.log(`IBW: ${IBW}, maxWeight: ${maxWeight}, minWeight: ${minWeight}`);
}