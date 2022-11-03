import mongoose from "mongoose";

import UserModel from './models/user.js';

async function connect() {
    try {
        const URL = 'mongodb://developerpruebatl4IYJqOOPlO715Flocalhost:27017/ecommerce'
        await mongoose.connect("")
        console.log('Case de datos conectada');
    } catch (error) {
        console.error(error.message);
    }
}

async function insertUser (user) {
    
}

await connect();