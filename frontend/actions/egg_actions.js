export const RECEIVE_EGGS = "RECEIVE_EGGS";
export const RECEIVE_EGG = "RECEIVE_EGG";
export const REMOVE_EGG = "REMOVE_EGG";

export const receiveEgg = egg => ({
  type: RECEIVE_EGG,
  egg
});

export const receiveEggs = eggs => ({
  type: RECEIVE_EGGS,
  eggs
}); 

export const removeEgg = egg => ({
  type: REMOVE_EGG,
  egg
});