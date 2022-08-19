const express = require("express");
const router = express.Router();

const sequelize = require("sequelize");

const { Words } = require("../models");

const Op = sequelize.Op;

router.get("/translator", async (req, res, next) => {
  try {
    const { korean, cate_code } = req.query;
    // 지금까지 쌓여 있는 수 (최대 100개 불러옴 )
    const words = await Words.findAll({
      where: {
        korean: {
          [Op.like]: "%" + korean + "%",
        },
      },
    });

    return res.status(200).json({ words });
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
});

module.exports = router;
