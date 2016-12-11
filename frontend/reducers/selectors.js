const getAllEggs = ({ eggs }) => (
  Object.keys(eggs).map(id => eggs[id])
);

const getAllChickens = ({ chickens }) => (
  Object.keys(chickens).map(id => chickens[id])
);

export { getAllEggs, getAllChickens };