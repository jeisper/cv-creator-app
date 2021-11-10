import User from "../models/user.js";

export const getUserData = async (req, res) => {
  try {
    const filter = { googleId: req.params.id };
    const userData = (await User.find(filter))[0];

    console.log("Getting user profile data: ", userData);

    if (!userData) {
      return res.status(400).json({
        status: "failed",
        msg: "User not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        profile: userData,
      },
    });
  } catch (err) {
    res.json({ message: err });
  }
};

export const updateUserData = async (req, res) => {
  try {
    const data = req.body;
    const query = { googleId: req.params.id };

    console.log("Getting user profile data with id: ", req.params.id);
    console.log("with profile data: ", data.profile);

    User.findOneAndUpdate(
      query,
      data.profile,
      { upsert: true },
      function (err, doc) {
        if (err) {
          return res.status(400).json({
            status: "unsuccessful",
            message: err,
          });
        }
        res.status(200).json({
          status: "success",
          data: {
            profile: data.profile,
          },
        });
      }
    );
  } catch (err) {
    res.json({ message: err });
  }
};