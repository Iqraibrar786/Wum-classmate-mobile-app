export const validation = {
  isValidEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  isValidPassword: (password) => {
    return password && password.length >= 6;
  },

  isValidClassCode: (code) => {
    return code && code.length >= 6 && code.length <= 8 && /^[a-zA-Z0-9]+$/.test(code);
  },

  isEmpty: (value) => {
    return !value || value.trim() === '';
  },
};

export const getErrorMessage = (field, type) => {
  const errors = {
    email: {
      empty: 'Email is required',
      invalid: 'Please enter a valid email address',
    },
    password: {
      empty: 'Password is required',
      invalid: 'Password must be at least 6 characters',
    },
    classCode: {
      empty: 'Class code is required',
      invalid: 'Class code must be 6-8 alphanumeric characters',
    },
  };

  return errors[field]?.[type] || 'Invalid input';
};
