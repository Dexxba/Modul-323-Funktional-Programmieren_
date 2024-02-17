const number = 42;
const person = {
    name: "Bogdanov Daniel",
    age: 33,
    profession: "Junior Software Developer"
  };

  const personLiving = {
    ...person,
    City: "Bern",
    Adress: "Nobstrasse"
  };

  const personUpdate = {
    ...person,
    age: 35
  };

  const { profession, ...personWithoutProfession } = personUpdate;
  const personArray = [
    {
      id: 1,
      name: "Bogdanov Daniel",
      age: 33,
      profession: "Junior Software Developer",
      city: "Bern",
      address: "Nobstrasse 5"
    },
    {
      id: 2,
      name: "Lilla Bogdanov",
      age: 29,
      profession: "Graphic Designer",
      city: "Bern",
      address: "Nobstrasse 5"
    }
  ];

  const extendedPersonArray = [
    ...personArray,
    {
      id: 3,
      name: "Milan Bogdanov",
      age: 23,
      profession: "Bucher",
      city: "Bern",
      address: "Nobstrasse 5"
    }
  ];

  const updatedPersonArray = extendedPersonArray.map(person => {
    if (person.id === 2) {
      return {
        ...person,
        profession: "Managment Graphic Designer"
      };
    }
    return person;
  });

const smallestId = Math.min(...extendedPersonArray.map(person => person.id));

const arrayWithoutSmallestId = extendedPersonArray.filter(person => person.id !== smallestId);

const numbers  = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];
const sum = numbers .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const average = sum / numbers .length;

function countValues(numbers) {
  return numbers.reduce((accumulator, currentValue) => {
    if (currentValue >= 4) {
      accumulator.good = (accumulator.good || 0) + 1;
    } else if (currentValue >= 2.5) {
      accumulator.ok = (accumulator.ok || 0) + 1;
    } else {
      accumulator.bad = (accumulator.bad || 0) + 1;
    }
    return accumulator;
  }, {good: 0, ok: 0, bad: 0});
}

const groupedCounts = countValues(numbers);
console.log(groupedCounts);



  

  
  
