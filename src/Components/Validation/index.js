export const validateDate = (value) => {
  if (!value) {
    return "Field Required!";
  }
  return null;
};

export const validateName = (value) => {
  if (!value) {
    return "Field Required!";
  } else if (value.length < 3) {
    return "Minimun 3 Chracter Required!";
  } else if (value.length > 15) {
    return "Not More Than 15 Character!";
  }
  return null;
};

export const validateInterviewer = (value) => {
  if (!value) {
    return "Field Required!";
  }
  return null;
};

export const validateTechnology = (value) => {
  if (!value) {
    return "Field Required!";
  }
  return null;
};

export const validateExperience = (value) => {
  if (!value) {
    return "Field Required!";
  }
  return null;
};

export const validateRound = (value) => {
  if (!value) {
    return "Field Required!";
  }
  return null;
};

export const validateCommunication = (value) => {
  if (!value) {
    return "Field Required!";
  }
  return null;
};

export const validatePractical = (value) => {
  if (!value) {
    return "Field Required!";
  }
  return null;
};

export const validateCoding = (value) => {
  if (!value) {
    return "Field Required!";
  }
  return null;
};

export const validateTechnical = (value) => {
  if (!value) {
    return "Field Required!";
  }
  return null;
};

export const validateNotes = (value) => {
  if (!value) {
    return "Field Required!";
  }
  return null;
};
