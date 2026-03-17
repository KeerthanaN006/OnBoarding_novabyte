
module.exports = (req, res) => {
  const { api_key, base_url } = req.body;

  // BUG: allows empty strings
  if (api_key == null || base_url == null) {
    return res.status(400).json({ error: { code: "VALIDATION_ERROR", message: "Missing fields"}});
  }

  res.json({ success: true });
};
