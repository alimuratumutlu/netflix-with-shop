export default {
  //  Regex Explain
  //  ^ The password string will start this way
  //  (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
  //  (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
  //  (?=.*[0-9])	The string must contain at least 1 numeric character
  //  (?=.*[!@#$%^&*]) The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
  //  (?=.{8,}) The string must be eight characters or longer

  NAME: /^[a-zA-Z\-]+$/,
  COMPANY: /^[a-zA-Z\-]+$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  NUMERIC: /^\d+$/,
  ONE_CHARACTER: /^(?!\s*$).+/,
  SELECTBOX: /^\s*$/,
  URL: /^(?:(?:(?:https?):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,
};
