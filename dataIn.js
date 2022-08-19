const data = require("./서울시 외국어 표기 정보.json");

// const { sequelize } = require("./models");
// sequelize.sync({ force: true });

const { Words } = require("./models");

for (let i = 60000; i < data.length; i++) {
  try {
    Words.create(data[i]).then((e) => console.log(e.id));
  } catch (e) {
    console.log(e);
  }
}
