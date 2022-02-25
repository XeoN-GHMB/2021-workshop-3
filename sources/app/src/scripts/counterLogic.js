const counterLogic = (global) => {


    function addToCounter(e){
      global.state.counter+=1
    }

    function removeFromCounter(e){
      global.state.counter-=1
    }

    return {
        addToCounter,
        removeFromCounter
    }
}

export default counterLogic