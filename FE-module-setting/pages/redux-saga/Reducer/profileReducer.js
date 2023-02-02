import { actionTypesProfile } from '../Constants/profileType';
import { setCookie, getCookie } from 'cookies-next';
import { toast } from 'react-toastify';
const initial_state = {
  profile: {
    userId: '',
    username: '',
    firstname: '',
    lastname: '',
    userPhoto: '',
    defaultEmail: '',
    defaultPhone: '',
    defaultRole: '',
  },
  roles: [],
  emails: [],
  phones: [],
  addresses: [],
  educations: [],
  experiences: [],
  skills: [],
  addressType: [],
  city: [],
  employeementType: [],
  skillType: [],
  statusType: [],
  listAddresses: [],
  isLoading: { name: 'all', value: false },
  message: {},
  errors: null,
};

const profileReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actionTypesProfile.GET_PROFILE_REQUEST: {
      return { ...state, isLoading: { name: 'all', value: true } };
    }
    case actionTypesProfile.GET_PROFILE_SUCCESS: {
      return setPorfile(state, action);
    }
    case actionTypesProfile.GET_PROFILE_FAILED: {
      return {
        ...state,
        isLoading: { name: 'all', value: true },
        errors: action.payload,
      };
    }
    case actionTypesProfile.UPD_PROFILE_REQUEST: {
      return { ...state, isLoading: { name: 'profile', value: true } };
    }
    case actionTypesProfile.UPD_PROFILE_SUCCESS: {
      return updateProfile(state, action);
    }
    case actionTypesProfile.UPD_PROFILE_FAILED: {
      return {
        ...state,
        isLoading: { name: 'profile', value: false },
        errors: action.payload,
      };
    }
    case actionTypesProfile.UPD_PASSWORD_REQUEST: {
      return { ...state, isLoading: { name: 'password', value: true } };
    }
    case actionTypesProfile.UPD_PASSWORD_SUCCESS: {
      return updatePassword(state, action);
    }
    case actionTypesProfile.UPD_PASSWORD_FAILED: {
      return {
        ...state,
        isLoading: { name: 'password', value: false },
        errors: action.payload,
      };
    }
    //* ADD CASE
    case actionTypesProfile.ADD_EMAIL_REQUEST: {
      // * EMAIL
      return { ...state, isLoading: { name: 'email', value: true } };
    }
    case actionTypesProfile.ADD_EMAIL_SUCCESS: {
      return addEmail(state, action);
    }
    case actionTypesProfile.ADD_EMAIL_FAILED: {
      return {
        ...state,
        isLoading: { name: 'email', value: false },
        errors: action.payload,
      };
    }
    case actionTypesProfile.ADD_PHONE_REQUEST: {
      //* PHONE
      return { ...state, isLoading: { name: 'phone', value: true } };
    }
    case actionTypesProfile.ADD_PHONE_SUCCESS: {
      return addPhone(state, action);
    }
    case actionTypesProfile.ADD_PHONE_FAILED: {
      return {
        ...state,
        isLoading: { name: 'phone', value: false },
        errors: action.payload,
      };
    }
    case actionTypesProfile.ADD_ADDRESS_REQUEST: {
      //* ADDRESS
      return { ...state, isLoading: { name: 'address', value: true } };
    }
    case actionTypesProfile.ADD_ADDRESS_SUCCESS: {
      return addAddress(state, action);
    }
    case actionTypesProfile.ADD_ADDRESS_FAILED: {
      return {
        ...state,
        isLoading: { name: 'address', value: false },
        errors: action.payload,
      };
    }
    case actionTypesProfile.ADD_EDUCATION_REQUEST: {
      //* EDUCATION
      return { ...state, isLoading: { name: 'education', value: true } };
    }
    case actionTypesProfile.ADD_EDUCATION_SUCCESS: {
      return addEducation(state, action);
    }
    case actionTypesProfile.ADD_EDUCATION_FAILED: {
      return {
        ...state,
        isLoading: { name: 'education', value: false },
        errors: action.payload,
      };
    }
    case actionTypesProfile.ADD_EXPERIENCE_REQUEST: {
      //* EXPERIENCE
      return { ...state, isLoading: { name: 'experience', value: true } };
    }
    case actionTypesProfile.ADD_EXPERIENCE_SUCCESS: {
      return addExperience(state, action);
    }
    case actionTypesProfile.ADD_EXPERIENCE_FAILED: {
      return {
        ...state,
        isLoading: { name: 'experience', value: false },
        errors: action.payload,
      };
    }
    case actionTypesProfile.ADD_SKILL_REQUEST: {
      //* SKILL
      return { ...state, isLoading: { name: 'skill', value: true } };
    }
    case actionTypesProfile.ADD_SKILL_SUCCESS: {
      return addSkill(state, action);
    }
    case actionTypesProfile.ADD_SKILL_FAILED: {
      return {
        ...state,
        isLoading: { name: 'skill', value: false },
        errors: action.payload,
      };
    }
    //* REMOVE CASE
    case actionTypesProfile.REM_EMAIL_REQUEST: {
      //* EMAIL
      return { ...state, isLoading: { name: 'email', value: true } };
    }
    case actionTypesProfile.REM_EMAIL_SUCCESS: {
      return removeEmail(state, action);
    }
    case actionTypesProfile.REM_EMAIL_FAILED: {
      return {
        ...state,
        isLoading: { name: 'email', value: false },
        errors: action.payload,
      };
    }
    case actionTypesProfile.REM_PHONE_REQUEST: {
      //* PHONE
      return { ...state, isLoading: { name: 'phone', value: true } };
    }
    case actionTypesProfile.REM_PHONE_SUCCESS: {
      return removePhone(state, action);
    }
    case actionTypesProfile.REM_PHONE_FAILED: {
      return {
        ...state,
        isLoading: { name: 'phone', value: false },
        errors: action.payload,
      };
    }
    case actionTypesProfile.REM_ADDRESS_REQUEST: {
      //* ADDRESS
      return { ...state, isLoading: { name: 'address', value: true } };
    }
    case actionTypesProfile.REM_ADDRESS_SUCCESS: {
      return removeAddress(state, action);
    }
    case actionTypesProfile.REM_ADDRESS_FAILED: {
      return {
        ...state,
        isLoading: { name: 'address', value: false },
        errors: action.payload,
      };
    }
    case actionTypesProfile.REM_EDUCATION_REQUEST: {
      //* EDUCATION
      return { ...state, isLoading: { name: 'education', value: true } };
    }
    case actionTypesProfile.REM_EDUCATION_SUCCESS: {
      return removeEducation(state, action);
    }
    case actionTypesProfile.REM_EDUCATION_FAILED: {
      return {
        ...state,
        isLoading: { name: 'education', value: false },
        errors: action.payload,
      };
    }
    case actionTypesProfile.REM_EXPERIENCE_REQUEST: {
      //* EXPERIENCE
      return { ...state, isLoading: { name: 'experience', value: true } };
    }
    case actionTypesProfile.REM_EXPERIENCE_SUCCESS: {
      return removeExperience(state, action);
    }
    case actionTypesProfile.REM_EXPERIENCE_FAILED: {
      return {
        ...state,
        isLoading: { name: 'experience', value: false },
        errors: action.payload,
      };
    }
    case actionTypesProfile.REM_SKILL_REQUEST: {
      //* SKILL
      return { ...state, isLoading: { name: 'skill', value: true } };
    }
    case actionTypesProfile.REM_SKILL_SUCCESS: {
      return removeSkill(state, action);
    }
    case actionTypesProfile.REM_SKILL_FAILED: {
      return {
        ...state,
        isLoading: { name: 'skill', value: false },
        errors: action.payload,
      };
    }
    //* UPDATE CASE
    case actionTypesProfile.UPD_EMAIL_REQUEST: {
      //* EMAIL
      return { ...state, isLoading: { name: 'email', value: true } };
    }
    case actionTypesProfile.UPD_EMAIL_SUCCESS: {
      return updateEmail(state, action);
    }
    case actionTypesProfile.UPD_EMAIL_FAILED: {
      return {
        ...state,
        isLoading: { name: 'email', value: false },
        errors: action.payload,
      };
    }
    case actionTypesProfile.UPD_PHONE_REQUEST: {
      //* PHONE
      return { ...state, isLoading: { name: 'phone', value: true } };
    }
    case actionTypesProfile.UPD_PHONE_SUCCESS: {
      return updatePhone(state, action);
    }
    case actionTypesProfile.UPD_PHONE_FAILED: {
      return {
        ...state,
        isLoading: { name: 'phone', value: false },
        errors: action.payload,
      };
    }
    case actionTypesProfile.UPD_ADDRESS_REQUEST: {
      //* ADDRESS
      return { ...state, isLoading: { name: 'address', value: true } };
    }
    case actionTypesProfile.UPD_ADDRESS_SUCCESS: {
      return updateAddress(state, action);
    }
    case actionTypesProfile.UPD_ADDRESS_FAILED: {
      return {
        ...state,
        isLoading: { name: 'address', value: false },
        errors: action.payload,
      };
    }
    case actionTypesProfile.UPD_EDUCATION_REQUEST: {
      //* EDUCATION
      return { ...state, isLoading: { name: 'education', value: true } };
    }
    case actionTypesProfile.UPD_EDUCATION_SUCCESS: {
      return updateEducation(state, action);
    }
    case actionTypesProfile.UPD_EDUCATION_FAILED: {
      return {
        ...state,
        isLoading: { name: 'education', value: false },
        errors: action.payload,
      };
    }
    case actionTypesProfile.UPD_EXPERIENCE_REQUEST: {
      //* EXPERIENCE
      return { ...state, isLoading: { name: 'experience', value: true } };
    }
    case actionTypesProfile.UPD_EXPERIENCE_SUCCESS: {
      return updateExperience(state, action);
    }
    case actionTypesProfile.UPD_EXPERIENCE_FAILED: {
      return {
        ...state,
        isLoading: { name: 'experience', value: false },
        errors: action.payload,
      };
    }
    case actionTypesProfile.UPD_PHOTO_PROFILE_REQ: {
      return { ...state, isLoading: { name: 'profile', value: true } };
    }
    case actionTypesProfile.UPD_PHOTO_PROFILE_SUC: {
      return updatePhoto(state, action);
    }
    case actionTypesProfile.UPD_PHOTO_PROFILE_FAL: {
      return {
        ...state,
        isLoading: { name: 'profile', value: false },
        errors: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
};

const setPorfile = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    isLoading: { name: 'all', value: false },
    profile: {
      userId: payload.userEntityId,
      username: payload.userName,
      firstname: payload.userFirstName,
      lastname: payload.userLastName,
      userPhoto: payload.userPhoto,
      defaultEmail: payload.defaultEmail,
      defaultPhone: payload.defaultPhone,
      defaultRole: payload.defaultRole,
    },
    roles: [...payload.usersRoles],
    emails: [...payload.usersEmail],
    phones: [...payload.usersPhones],
    addresses: [...payload.usersAddresses],
    educations: [...payload.usersEducations],
    experiences: [...payload.usersExperiences],
    skills: [...payload.usersSkills],
    addressType: [...payload.addressType],
    city: [...payload.city],
    employeementType: [...payload.jobType],
    skillType: [...payload.skillType],
    statusType: [...payload.statusType],
    listAddresses: [...payload.listAddresses],
  };
};

const updateProfile = (state, action) => {
  const { payload } = action;
  showToast('Update Profile Success !');
  return {
    ...state,
    isLoading: { name: 'profile', value: false },
    profile: {
      ...state.profile,
      username: payload.userName,
      firstname: payload.userFirstName,
      lastname: payload.userLastName,
    },
  };
};
//* ADD FUNCTION
const addEmail = (state, action) => {
  const { payload } = action;
  showToast('Add Email Success !');
  return {
    ...state,
    isLoading: { name: 'email', value: false },
    emails: [...state.emails, payload],
  };
};

const addPhone = (state, action) => {
  const { payload } = action;
  showToast('Add Phone Success !');
  return {
    ...state,
    isLoading: { name: 'phone', value: false },
    phones: [...state.phones, payload],
  };
};

const addAddress = (state, action) => {
  const { payload } = action;
  showToast('Add Address Success !');
  return {
    ...state,
    isLoading: { name: 'address', value: false },
    addresses: [...state.addresses, payload],
  };
};

const addEducation = (state, action) => {
  const { payload } = action;
  showToast('Add Education Success !');
  return {
    ...state,
    isLoading: { name: 'education', value: false },
    educations: [...state.educations, payload],
  };
};

const addExperience = (state, action) => {
  const { payload } = action;
  showToast('Add Experience Success !');
  return {
    ...state,
    isLoading: { name: 'experience', value: false },
    experiences: [...state.experiences, payload],
  };
};

const addSkill = (state, action) => {
  const { payload } = action;
  showToast('Add Skill Success !');
  return {
    ...state,
    isLoading: { name: 'skill', value: false },
    skills: [...state.skills, payload],
  };
};

//* REMOVE FUNTION
const removeEmail = (state, action) => {
  const { payload } = action;
  const { emails } = state;
  const filterEmails = emails.filter(
    (email) => email.pmailAddress !== payload.pmailAddress
  );
  showToast('Remove Email Success !');
  return {
    ...state,
    isLoading: { name: 'email', value: false },
    emails: [...filterEmails],
  };
};

const removePhone = (state, action) => {
  const { payload } = action;
  const { phones } = state;
  const filterPhones = phones.filter(
    (phone) => phone.uspoPhone !== payload.uspoPhone
  );
  showToast('Remove Phone Success !');
  return {
    ...state,
    isLoading: { name: 'phone', value: false },
    phones: [...filterPhones],
  };
};

const removeAddress = (state, action) => {
  const { payload } = action;
  const { addresses } = state;
  const filterAddresses = addresses.filter(
    (address) => address.etadAddrId !== payload.id
  );
  showToast('Remove Address Success !');
  return {
    ...state,
    isLoading: { name: 'address', value: false },
    addresses: [...filterAddresses],
  };
};

const removeEducation = (state, action) => {
  const { payload } = action;
  const { educations } = state;
  const filterEducations = educations.filter(
    (education) => education.usduId !== payload.id
  );
  showToast('Remove Education Success !');
  return {
    ...state,
    isLoading: { name: 'education', value: false },
    educations: [...filterEducations],
  };
};

const removeExperience = (state, action) => {
  const { payload } = action;
  const { experiences } = state;
  const filterExperiences = experiences.filter(
    (experience) => experience.usexId !== payload.id
  );
  showToast('Remove Experience Success !');
  return {
    ...state,
    isLoading: { name: 'experience', value: false },
    experiences: [...filterExperiences],
  };
};

const removeSkill = (state, action) => {
  const { payload } = action;
  const { skills } = state;
  const filterSkills = skills.filter((skill) => skill.uskiId !== payload.id);
  showToast('Remove Skill Success !');
  return {
    ...state,
    isLoading: { name: 'skill', value: false },
    skills: [...filterSkills],
  };
};

//* UPDATE FUNCTION
const updateEmail = (state, action) => {
  const { payload } = action;
  const { emails } = state;
  const updEmails = emails.map((email) => {
    if (email.pmailId === payload.pmailId) {
      Object.assign(email, payload);
      return email;
    }
    return email;
  });
  showToast('Update Email Success !');
  return {
    ...state,
    isLoading: { name: 'email', value: false },
    emails: [...updEmails],
  };
};

const updatePhone = (state, action) => {
  const { payload } = action;
  const { phones } = state;
  const updPhones = phones.map((phone) => {
    if (phone.uspoPhoneId === payload.uspoPhoneId) {
      Object.assign(phone, payload);
      return phone;
    }
    return phone;
  });
  showToast('Update Phone Success !');
  return {
    ...state,
    isLoading: { name: 'phone', value: false },
    phones: [...updPhones],
  };
};
// this function basicly going to replace the edit one not update it
// cuz we add another address to address table then remove the id address that
// we want to edit
// and add the new id address to user address table
const updateAddress = (state, action) => {
  const { payload } = action;
  const filteredAddress = state.addresses.filter(
    (address) => address.etadAddrId !== payload.id
  );

  showToast('Update Address Success !');
  return {
    ...state,
    isLoading: { name: 'address', value: false },
    addresses: [...filteredAddress, payload],
  };
};

const updateEducation = (state, action) => {
  const { payload } = action;
  const { educations } = state;
  const updEducations = educations.map((education) => {
    if (education.usduId === payload.usduId) {
      Object.assign(education, payload);
      return education;
    }
    return education;
  });
  showToast('Update Education Success !');
  return {
    ...state,
    isLoading: { name: 'education', value: false },
    phones: [...updEducations],
  };
};

const updateExperience = (state, action) => {
  const { payload } = action;
  const { experiences } = state;
  const updExperiences = experiences.map((experience) => {
    if (experience.usexId === payload.usexId) {
      Object.assign(experience, payload);
      return experience;
    }
    return experience;
  });
  showToast('Update Experience Success !');
  return {
    ...state,
    isLoading: { name: 'experience', value: false },
    phones: [...updExperiences],
  };
};

const updatePhoto = (state, action) => {
  const { payload } = action;
  const profile = JSON.parse(getCookie('profile'));
  profile.userPhoto = payload.userPhoto;
  setCookie('profile', JSON.stringify(profile));

  showToast('Update Photo Success !');

  return {
    ...state,
    isLoading: { name: 'profile', value: false },
    profile: {
      ...state.profile,
      userPhoto: payload.userPhoto,
    },
  };
};

const updatePassword = (state, action) => {
  showToast('Update password Success !');
  return {
    ...state,
    isLoading: { name: 'password', value: false },
    message: { ...action.payload },
  };
};

// * Helper function to show Toast(Notification)
const showToast = (message) => {
  toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

export default profileReducer;
