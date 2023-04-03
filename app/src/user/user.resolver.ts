import { Mutation, Query, Resolver, Args, ResolveField, Parent } from "@nestjs/graphql";
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

    @Query(() => User)
    findUser(
        @Args('_id') _id: string
    ) {
        return this.userService.findOne(_id);
    }
    
    @Mutation(() => User)
    createUser(
        @Args('input') input: CreateUserInput
    ) {
        return this.userService.create(input);
    }

    @Mutation(() => User)
    updateUser(
        @Args('_id') _id: string,
        @Args('input') input: CreateUserInput
    ) {
        return this.userService.update(_id, input);
    }

    @ResolveField(() => String)
    fullName(
        @Parent() user: User) {
        return `${user.firstName} ${user.lastName}`;
    }
}