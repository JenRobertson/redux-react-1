import React from 'react';
import Pet from './Pet';

const PetList = ({ pets, onFeedButtonClick }) => (
  <div className='PetList'>
  {pets.map(pet => (
    <Pet key={pet.id} {...pet} onClick={() => onFeedButtonClick(pet.id)}/>
  ))}
  </div>
)

export default PetList;
//...pet is exploding all the properties from the pet object

//given its props from PetsContainer, with connect()

//so a container gives a component its props.
//they are based on the state