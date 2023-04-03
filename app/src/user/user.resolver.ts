import { Mutation, Query, Resolver, Args } from "@nestjs/graphql";
import { User } from "./models/user.model";
import { UserService } from "./user.service";
import { CreateUserInput } from "./models/create-user.input";

@Resolver(() => User)
export class UserResolver {

    constructor(
        private readonly userService: UserService
    ) {}

    @Query(() => [User])
    findUsers() {
        return this.userService.find();
    }
    
    @Mutation(() => User)
    createUser(
        @Args('input') input: CreateUserInput
    ) {
        return this.userService.create(input);
    }
}