exports.updateField = (req, query, field) => {
  if (req.body[field] !== undefined) {
    query[field] = req.body[field];
  }
};