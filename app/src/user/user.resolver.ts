import { Query, Resolver } from "@nestjs/graphql";
import { User } from "./models/user.model";
import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {

    constructor(
        private readonly userService: UserService
    ) {}

    @Query(() => [User])
    findUsers() {
        return this.userService.find();
    }
    
    @Query(() => User)
    findOneUser(id: string) {
        return this.userService.findOne(id);
    }

    @Query(() => User)
    createUser(firstName: string, lastName: string, age: number) {
        const user = new User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.age = age;
        return this.userService.create(user);
    }
}