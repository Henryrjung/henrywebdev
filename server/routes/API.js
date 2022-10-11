const express = require("express");
const router = express.Router();
const { Octokit } = require("octokit");

require("dotenv").config();

const octokit = new Octokit({
  auth: process.env.GIT,
});

async function getRepos() {
  try {
    const user = await octokit.request("/user");
    console.log(`authenticated as ${user.data.login}`);

    const response = await octokit.request("/user/repos");
    allProjects = response.data;

    router.get("/testUser", (req, res) => {
      res.send(allProjects);
    });
  } catch (error) {
    console.log(error);
  }
}

router.get("/test", (req, res) => {
  res.json({ message: "working" });
});

getRepos();

module.exports = router;
