const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("Studenti", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
});

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ФИО: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Дата_рождения: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Название_ВУЗа: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Специальность: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Курс: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Размер_стипендии: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "Студенты",
    timestamps: false,
  }
);

(async () => {
  try {
    const users = await User.findAll();
    console.log(users);
  } catch (error) {
    console.error(error);
  }
})();
