// this function should tell me which cluster a given point belongs to
function findNearestNeighbors(dataset, currPoint, kValue) { // -> labeledPoint, neighbors[]
  // calculate distance from currPoint to every other point in the dataset
  var distance;
  var distances = [, distance];
  for (let i = 0; i < dataset.length; i++) {
    //calculate euclidean distance
    distance = Math.sqrt(
      Math.pow(dataset[i].x - currPoint.x, 2) +
      Math.pow(dataset[i].y - currPoint.y, 2)
    );
    distances.push(dataset[i], distance);
  }

  // order them by distance


  // iterate through the top K points (minus first one, which wlil always be 0 bc the point is itself yk) and note their labels


  // add the top K points to an array for returning


  // majority vote to decide the label of currPoint


  // return the label of currPoint as well as the points that were used for the decision
  return null;
}
