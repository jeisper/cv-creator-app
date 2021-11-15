import Publish from "../models/publish.js";

export const getPublishedData = async (req, res) => {
  try {
    const filter = { publishID: req.params.id };
    const publishedData = (await Publish.find(filter))[0];

    console.log("Getting published data: ", publishedData);

    if (!publishedData) {
      return res.status(400).json({
        status: "failed",
        msg: "Data not found",
      });
    }

    if (publishedData.publishID !== req.params.id) {
      return res.status(400).json({
        status: "failed",
        msg: "Data not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: publishedData,
    });
  } catch (err) {
    res.json({ message: err });
  }
};

export const updatePublishedData = async (req, res) => {
  try {
    const data = req.body;
    const query = { publishID: req.params.id };

    console.log("Getting user profile data with id: ", req.params.id);
    console.log("with profile data: ", data);

    Publish.findOneAndUpdate(
      query,
      data,
      { upsert: true },
      function (err, doc) {
        if (err) {
          console.log("database err ", err);
          return res.status(400).json({
            status: "unsuccessful",
            message: err,
          });
        }

        res.status(200).json({
          status: "success",
          data,
        });
      }
    );
  } catch (err) {
    res.status(400).json({
      status: "request failed",
      message: "Database error " + err,
    });
  }
};
