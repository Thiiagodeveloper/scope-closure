function createPetList() {
  const petsList = [];
  function addPet(myPet) {
    if (myPet) {
      petsList.push(myPet);
    }
    return petsList;
  }
  return addPet;
}

const myPetList = createPetList();
myPetList("michi");
myPetList("firulais");
myPetList();

console.log(myPetList);
