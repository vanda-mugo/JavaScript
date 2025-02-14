const initialWagonState = {
    supplies : 100,
    distance : 0,
    days : 0
  }
  
  const reducer = (state = initialWagonState, action) => {
    switch (action.type){
      case 'gather': {
        return {
          ...state, 
          supplies : state.supplies + 15,
          days : state.days + 1
        }
      }
      case 'travel':{
        if((action.payload * 20) > state.supplies ){
          // in this case the travel cannot happen return current state
          return state;
        }else{
          return {
          supplies : state.supplies - (20 * action.payload),
          distance : state.distance + (10 * action.payload),
          days : state.days + (action.payload)
          }
        }
        
      }
      case 'tippedWagon':{
        return {
          ...state,
          supplies : state.supplies - 30,
          days : state.days + 1
        }
      }
      default : {
        return state;
      }
    }
  }
  
  
  let wagon = reducer(undefined, {});
  console.log(wagon); 
  
  const travelAction = {
    type : 'travel',
    payload : 1
  }
  
  wagon = reducer(undefined, travelAction);
  console.log(wagon);
  
  
  const gatherAction = {
    type: 'gather'
  };
  
  wagon = reducer(wagon, gatherAction);
  console.log(wagon);
  
  const tippedWagonAction = {
    type: 'tippedWagon',
  
  }
  
  wagon = reducer(wagon, tippedWagonAction);
  console.log(wagon);
  
  const travelDay2Action = {
    type : 'travel',
    payload: 3
  }
  
  wagon = reducer(wagon, travelDay2Action);
  console.log(wagon);
  
  
  
  
  
  
  
  
  
  
  
  
  