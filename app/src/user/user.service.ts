import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./models/user.model";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>
    ){}

    async find() {
        return await this.userModel.find();
    }

    async findOne(id: string) {
        return await this.userModel.findOne({ _id: id })
    }

    async create(input : User) {
        return await this.userModel.create(input);
    }

    async update(input : User) {
        return await this.userModel.findOneAndUpdate({ _id: input._id }, input, { returnOriginal: false });
    }

    async delete(id: string) {
        return await this.userModel.findByIdAndDelete(id);
    }
}