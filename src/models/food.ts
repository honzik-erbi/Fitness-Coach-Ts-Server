module.exports = (sequelize: any, Sequelize: any) => {
  return sequelize.define(
    "food",
    {
      tableText: {
        type: Sequelize.STRING,
      },
      cal: {
        type: Sequelize.SMALLINT,
      },
      carb: {
        type: Sequelize.FLOAT,
      },
      fat: {
        type: Sequelize.FLOAT,
      },
      proteins: {
        type: Sequelize.FLOAT,
      },
      sugar: {
        type: Sequelize.FLOAT,
      },
      salt: {
        type: Sequelize.FLOAT,
      },
      weight: {
        type: Sequelize.FLOAT,
      },
      image: {
        type: Sequelize.BLOB,
      },
    },
    {
      timestamps: true,
    }
  );
};
