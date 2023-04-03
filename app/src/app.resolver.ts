import { Query, Resolver } from "@nestjs/graphql";
import { User } from "./models/user.model";

@Resolver(of => User)
export class AppResolver {

    @Query(of => User)
    findUser() {
        return { 
            id: '1',
            firstName: 'John',
            lastName: 'Doe',
            age : 31
        };
    }
}