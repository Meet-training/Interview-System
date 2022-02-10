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

    case "Remove_Interview_Result": {
      const newState = produce(state, (draftState) => {
        const resultIndex = draftState.interviewResult.findIndex(
          (item) => item.id === action.payload
        );
        draftState.interviewResult.splice(resultIndex, 1);
      });
      return newState;
    }

    case "Update_Interview_Result": {
      const newState = produce(state, (draftState) => {
        let index = draftState.interviewResult.findIndex(
          (item) => item.id === action.payload.id
        );

        if (index > 0) index = 0;
        draftState.interviewResult[index] = draftState.selectedResult;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default InterviewResultReducer;
