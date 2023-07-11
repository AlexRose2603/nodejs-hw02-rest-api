const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw HttpError(404, "User is not found");
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  });
  res.json({ message: "Verification is successful" });
};

module.exports = verifyEmail;
