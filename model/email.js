module.exports = (sequelize,DataTypes)=>{
    const email= sequelize.define('email',{
       UserName:{
        type : DataTypes.STRING,
       },
       EmailId:{
            type : DataTypes.STRING,
        },
        IsActive:{
            type : DataTypes.INTEGER,
        },

    },{
        timestamps: false,
        modelName: 'book',
       
    });
    return email;
}