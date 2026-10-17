function createPoint(minX, minY, maxX, maxY, label, id) {
  const point = {
    x: Math.floor(Math.random() * (maxX - minX) + minX),
    y: Math.floor(Math.random() * (maxY - minY) + minY),
    label: label,
    id: id,
  };
  return point;
}

export function generateDataset(nPoints, nClusters) {
  var dataset = [];
  for (let i = 0; i < nClusters; i++) {
    var minX = Math.floor(Math.random() * 100);
    var minY = Math.floor(Math.random() * 100);
    var maxX = Math.floor(Math.random() * (100 - minX) + minX);
    var maxY = Math.floor(Math.random() * (100 - minY) + minY);
    const id = i;

    for (let j = 0; j < nPoints/2; j++) {
      dataset.push(createPoint(minX, minY, maxX, maxY, i, id));
    }
  }
  return dataset;
}
