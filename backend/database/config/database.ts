module.exports = {
    development: { 
        use_env_variable: process.env.DATABASE_URI,
        // database: process.env.DATABASE,
        // username: process.env.USERNAME,
        // password: process.env.PASSWORD,
        // host: process.env.HOST,
        // port:process.env.PORT,  
        // uri: process.env.DATABASE_URI,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
            keepAlive: true,
        },
        ssl: true,
    },
    production: { 
        use_env_variable: process.env.DATABASE_URI,
        // database: process.env.DATABASE,
        // username: process.env.USERNAME,
        // password: process.env.PASSWORD,
        // host: process.env.HOST,
        // port:process.env.PORT,  
        // uri: process.env.DATABASE_URI,

        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
            keepAlive: true,
        },
        ssl: true,
    },
}

