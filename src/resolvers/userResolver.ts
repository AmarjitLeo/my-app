import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { CreateUserInput, LoginInput, User } from "../schema/userSchema";
import UserService from "../service/user/userService";
import { Request, Response } from "express";

interface Context {
  req: Request;
  res: Response;
  user: User | null;
}

@Resolver()
export default class UserResolver {
  constructor(private userService: UserService) {
    // this.userService = new UserService();
  }

  @Mutation(() => User)
  createUser(@Arg("input") input: CreateUserInput) {
    // return this.userService.createUser(input);
  }

  @Mutation(() => String) // Returns the JWT
  login(@Arg("input") input: LoginInput, @Ctx() context: Context) {
    // return this.userService.login(input, context);
  }

  @Query(() => User, { nullable: true })
  me(@Ctx() context: Context) {
    // return context.user;
  }
}
