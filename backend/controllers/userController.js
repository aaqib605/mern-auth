import asyncHandler from "express-async-handler";

// @desc    Login user & get token
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Login user" });
});

export { loginUser };
