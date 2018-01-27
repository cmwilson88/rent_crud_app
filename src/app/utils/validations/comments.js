import Validator from 'validator';
import isEmpty from 'lodash.isempty';

const validateInput = (data) => {
  const errors = {};

  if (Validator.isEmpty(data.name ? data.name : '')) {
    errors.name = 'This field is required';
  }

  if (Validator.isEmpty(data.body ? data.body : '')) {
    errors.body = 'This field is required';
  }

  if (Validator.isEmpty(data.email ? data.email : '')) {
    errors.email = 'This field is required'
  } else if (!Validator.isEmail(data.email ? data.email : '')) {
    errors.email = 'Please enter a valid email address';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateInput;
