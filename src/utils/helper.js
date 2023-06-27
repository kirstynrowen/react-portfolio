export function validateAndFormatEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(email)) {
    return email.toLowerCase();
  } else {
    return null;
  }
};