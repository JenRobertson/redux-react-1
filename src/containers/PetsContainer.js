import { connect } from 'react-redux'
import PetList from '../components/PetList';

//if the state changes, take the state and pass the pets into PetList
const mapStateToProps = state => {
  return {
    pets: state.pets
  }
}

//if petList calls onButtonClick, dispatch a feed event
const mapDispatchToProps = dispatch => {
  return {
    onFeedButtonClick: id => {
      dispatch({ type: 'FEED', id})
    }
  }
}

const PetsContainer = connect(mapStateToProps, mapDispatchToProps)(PetList)

//you must pass a component to the function returned by connect
//connect PetList to redux. 
//connect it using mapStateToProps.

export default PetsContainer