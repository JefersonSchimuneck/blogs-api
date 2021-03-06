const Category = (sequelize, DataTypes) => {
  const categorySchema = sequelize.define('Category', {
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return categorySchema;
};

module.exports = Category;
