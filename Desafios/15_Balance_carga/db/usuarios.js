const mongoose = require("mongoose");
const { Schema } = require("mongoose");

class UserController {
    constructor() {
        try {
            const URL =
                "mongodb+srv://root:root@cluster0.exdktjn.mongodb.net/?retryWrites=true&w=majority";
            mongoose.connect(URL);
            console.log("Database connected.");
        } catch (error) {
            console.error("Error to connecto to database", error.message);
        }
        user = new Schema({
            username: { type: String, require: true },
            password: { type: String, require: true },
        });
    }

    static create(data) {
        return UserModel.create(data);
    }

    static get(query = {}) {
        return UserModel.find(query);
    }

    static getByid(id) {
        return UserModel.findById(id);
    }

    static uploadById(id, data) {
        return UserModel.updateOne({ _id: id }, { $set: data });
    }

    static deleteById(id) {
        return UserModel.deleteOne({ _id: id });
    }
}
