const Sequelize= require('sequelize');

const db= new Sequelize('bong','root','siddharth',{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})



const Users= db.define('bndas1s',{
    id: {
        type: Sequelize.STRING,
        primaryKey: true
        },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
        },
    password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    like:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    likedBy:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    username:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    bio: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    gender:{
        type: Sequelize.STRING,
        allowNull: false,
    }
    })

db.sync()
.then(()=>console.log("Database has been synced"))
.catch((err)=>console.error("Error syncing database!"))

exports=module.exports={
   db, Users
}