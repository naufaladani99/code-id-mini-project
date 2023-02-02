import { actionTypesCurriculum } from '../Constants/curriculumType';
import { toast } from 'react-toastify';

const initial_state = {
  curriculums: [],
  isLoading: false,
  message: null,
  errors: null,
};

const curriculumReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actionTypesCurriculum.GET_CURRICULUMS_REQEUST: {
      return { ...state, isLoading: true };
    }
    case actionTypesCurriculum.GET_CURRICULUMS_SUCCESS: {
      return getCurriculums(state, action);
    }
    case actionTypesCurriculum.GET_CURRICULUMS_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    case actionTypesCurriculum.REM_CURRICULUM_REQEUST: {
      return { ...state, isLoading: true };
    }
    case actionTypesCurriculum.REM_CURRICULUM_SUCCESS: {
      return removeCurriculum(state, action);
    }
    case actionTypesCurriculum.REM_CURRICULUM_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

function getCurriculums(state, action) {
  const { payload } = action;
  const getCurriculums = payload.map((curriculum) => {
    const randomNum = Math.floor(Math.random() * 5);
    return {
      id: curriculum.progId,
      name: curriculum.progTitle,
      title: curriculum.progHeadline,
      duration: randomNum <= 1 ? 1 + ' Month' : randomNum + ' Months',
      total: {
        members: curriculum.progTotalStudent,
      },
      learnType: curriculum.progLearningType,
      type: curriculum.progType,
      rating: curriculum.progRating,
    };
  });

  return {
    ...state,
    isLoading: false,
    curriculums: [...getCurriculums],
  };
}

function removeCurriculum(state, action) {
  const { payload } = action;
  const { curriculums } = state;
  const filteredCurriculums = curriculums.filter(
    (curriculum) => curriculum.id !== payload.id
  );
  toast.success(`Remove Curriculum with id ${payload.id}`, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
  return {
    ...state,
    isLoading: false,
    curriculums: [...filteredCurriculums],
  };
}

export default curriculumReducer;
