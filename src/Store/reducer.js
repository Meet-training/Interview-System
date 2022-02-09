import produce from "immer";

const initialState = {
  interviewResult: [],
  current_result: -1,
};

function getNextId(state) {
  let id = 0;
  if (state.interviewResult.length > 0) {
    id = state.interviewResult[state.interviewResult.length - 1].id;
  }
  id++;
  return id;
}

const InterviewResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_Interview_Result": {
      let curState = { ...state };

      action.payload.id = getNextId(state);
      curState.interviewResult = [...state.interviewResult, action.payload];

      return curState;
    }

    case "set_Interview_Result": {
      let curState = { ...state };

      if (action.payload >= 0) curState.current_result = action.payload;
      return curState;
    }

    case "Update_Interview_Result": {
      let curState = { ...state };

      const index = curState.users.findIndex(
        (item) => item.id === action.payload.id
      );
      curState.interviewResult[index] = action.payload;
      return curState;
    }
    default:
      return state;
  }
};

export default InterviewResultReducer;
