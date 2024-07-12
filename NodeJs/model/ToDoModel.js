import { DataTypes } from "sequelize";
import sequelize from "../database/sequelize.js";


const ToDoList = sequelize.define("ToDOList", {
  note: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default ToDoList;
