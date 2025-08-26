// Assume this function is in a separate file, e.g., utils.js
const validateCNIC = (cnic) => {
  return /^\d{13}$/.test(cnic);
};

test('validates a 13-digit CNIC', () => {
  expect(validateCNIC('1234567890123')).toBe(true);
  expect(validateCNIC('123')).toBe(false);
  expect(validateCNIC('12345678901234')).toBe(false);
});