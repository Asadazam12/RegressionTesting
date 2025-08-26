module.exports = {
  validateCNIC: (cnic) => {
    return /^\d{13}$/.test(cnic);
  }
};