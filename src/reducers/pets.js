const pets = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PET':
      return [
        ...state,
        {
          id: 5,
          name: action.name,
          hunger: 1
        }
      ]
    case 'FEED':
      return state.map(pet =>
        (pet.id === action.id) ? {...pet, hunger: pet.hunger + 1} : pet )
    default:
      return state
  }
}

export default pets