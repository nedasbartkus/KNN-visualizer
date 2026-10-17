// this function should tell me which cluster a given point belongs to
function findNearestNeighbors(dataset, currPoint, kValue) { // -> labeledPoint, neighbors[]
  // calculate distance from currPoint to every other point in the dataset
  var distances = [];
  for (let i = 0; i < dataset.length; i++) {
    //calculate euclidean distance
    const distance = Math.sqrt(
      Math.pow(dataset[i].x - currPoint.x, 2) +
      Math.pow(dataset[i].y - currPoint.y, 2)
    );
    distances.push({point: dataset[i], distance: distance });
  }
  // order them by distance
  distances.sort((a, b) => a.distance - b.distance)


  // iterate through the top K points (minus first one, which wlil always be 0 bc the point is itself yk) and note their labels


  // add the top K points to an array for returning


  // majority vote to decide the label of currPoint


  // return the label of currPoint as well as the points that were used for the decision

  console.table(distances);
  return null;
}

const testDataset = [
  { x: 20, y: 40, label: 0},
  { x: 0, y: 0, label: 0 },
  { x: 3, y: 4, label: 1 },
  { x: 6, y: 8, label: 1 },
]
findNearestNeighbors(testDataset, { x: 0, y: 0 }, 2)
