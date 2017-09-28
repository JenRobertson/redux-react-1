const pets = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PET':
      return [
        ...state,
        {
          id: 5,
          name: action.name,
          weight: 1
        }
      ]
    case 'FEED':
      return state.map(pet =>
        (pet.id === action.id) ? {...pet, weight: pet.weight + 1} : pet )
    default:
      return state
  }
}

export default pets