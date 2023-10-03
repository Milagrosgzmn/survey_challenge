const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Responses', {
      id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true,
      },
      full_name:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      phone_number:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      start_date: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      preferred_language:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      how_found:{
        type:DataTypes.STRING,
        allowNull: false,
      },
      newsletter_subscription:{
        type: DataTypes.BOOLEAN,
        allowNull:true,
      }

   }, { timestamps: false,
      hooks: {
        beforeValidate: (instance) => {
          if (instance.full_name) {
              instance.full_name = instance.full_name.toLowerCase().trim();
          }
        }
    }
  });
};
