import produce from "immer";

const initialState = {
  interviewResult: [],
};

const InterviewResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_Interview_Result": {
      const newState = produce(state, (draftState) => {
        draftState.interviewResult.push(action.payload);
      });
      return newState;
    }
    default:
      return state;
  }
};

export default InterviewResultReducer;
