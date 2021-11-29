import axios from "axios";
import express from "express";

const testRouter = express.Router();

const getData = async (req, res) => {
  try {
    const recvData = "";

    const config = {
      method: "get",
      url: "https://zccgivagoteixeira.zendesk.com/api/v2/tickets.json",
      headers: {
        Authorization: "Basic Z2l2YWdvdGVpeGVpcmEyQGdtYWlsLmNvbTpUdDE1ODAwMA==",
        Cookie: "__cfruid=330bb75c227db2daa37a3cd50f5e59c5b7eb8590-1638021452",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        res.status(200).json({
          status: "success",
          data: {
            data: response.data,
          },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (err) {
    res.json({ message: err });
  }
};

// Get user's profile data
testRouter.route("/").get(getData);

export default testRouter;
