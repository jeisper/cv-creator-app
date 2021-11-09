import Template from "../models/template.js";

export const getTemplates = async (req, res) => {
  try {
    const templates = await Template.find();
    console.log("Getting templates: ", templates);

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
