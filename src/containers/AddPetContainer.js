import { connect } from 'react-redux'
import AddPetBox from '../components/AddPetBox';

//if the state changes, take the state and pass the pets into component
const mapStateToProps = state => {
  return {
  }
}


//if petList calls onButtonClick, dispatch a feed event
const mapDispatchToProps = dispatch => {
  return {
    onSubmit: name => {
      dispatch({ type: 'ADD_PET', name})
    }
  }
}

const AddPetContainer = connect(mapStateToProps, mapDispatchToProps)(AddPetBox)

//you must pass a component to the function returned by connect
//connect PetList to redux. 
//connect it using mapStateToProps.


export default AddPetContainer