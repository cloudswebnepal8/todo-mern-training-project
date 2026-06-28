const File = require("../models/File");

const uploadFile = async (req, res) => {
  const file = await File.create({
    originalName: req.file.originalname,
    fileName: req.file.filename,
    filePath: req.file.path,
  });

  res.json(file);
};

module.exports = { uploadFile };