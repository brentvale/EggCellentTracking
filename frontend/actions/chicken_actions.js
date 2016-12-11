export const RECEIVE_CHICKENS = "RECEIVE_CHICKENS";
export const RECEIVE_CHICKEN = "RECEIVE_CHICKEN";

export const receiveChickens = chickens => ({
  type: RECEIVE_CHICKENS,
  chickens
}); 

export const receiveChicken = chicken => ({
  type: RECEIVE_CHICKEN,
  chicken
}); 
