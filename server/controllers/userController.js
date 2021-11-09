import Template from "../models/template.js";

export const getUserData = async (req, res) => {
  try {
    const templates = await Template.find();
    const filter = { googleId: req.params.id };
    const source = (await Source.find(filter))[0];

    console.log("Getting user profile data: ", templates);

    res.status(200).json({
      status: "success",
      data: {
        templates,
      },
    });
  } catch (err) {
    res.json({ message: err });
  }
};
