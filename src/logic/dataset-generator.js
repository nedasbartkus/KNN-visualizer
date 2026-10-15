var dataset = [];

function createPoint(minX, minY, maxX, maxY, label) {
  const point = {
    x: Math.floor(Math.random() * (maxX - minX) + minX),
    y: Math.floor(Math.random() * maxY + minY),
    label: label
  };
  return point
}

function generateDataset(nPoints, nClusters) {
  for (let i = 0; i < nClusters; i++) {
    var minX = Math.floor(Math.random() * 100);
    var minY = Math.floor(Math.random() * 100);
    var maxX = Math.floor(Math.random() * (100 - minX) + minX);
    var maxY = Math.floor(Math.random() * (100 - minY) + minY);

    for (let j = 0; j < nPoints/2; j++) {
      dataset.push(createPoint(minX, minY, maxX, maxY, i));
    }
  }
  return dataset;
}

console.log(generateDataset(10, 2))
