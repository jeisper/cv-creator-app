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
    const query = { googleID: req.params.id };

    console.log("Getting user profile data with id: ", req.params.id);
    console.log("with profile data: ", data);

    User.findOneAndUpdate(query, data, { upsert: true }, function (err, doc) {
      if (err) {
        console.log("database err ", err);
        return res.status(400).json({
          status: "unsuccessful",
          message: err,
        });
      }

      res.status(200).json({
        status: "success",
        data: {
          profile: data,
        },
      });
    });
  } catch (err) {
    res.status(400).json({
      status: "request failed",
      message: "Database error " + err,
    });
  }
};
