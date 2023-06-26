import {
    getModelForClass,
    prop,
    pre,
    ReturnModelType,
    queryMethod,
    index,
  } from "@typegoose/typegoose";
  import { AsQueryMethod } from "@typegoose/typegoose/lib/types";
  import { Field, InputType, ObjectType } from "type-graphql";
  
  function findByEmail(
    this: ReturnModelType<typeof User, QueryHelpers>,
    email: User["email"]
  ) {
    return this.findOne({ email });
  }
  
  interface QueryHelpers {
    findByEmail: AsQueryMethod<typeof findByEmail>;
  }

  export class User {
    @Field(() => String)
    _id: string;
  
    @Field(() => String)
    @prop({ required: true })
    firstname: string;

    @Field(() => String)
    @prop({ required: true })
    lastname: string;
  
    @Field(() => String)
    @prop({ required: true })
    email: string;
  
    @prop({ required: true })
    password: string;
  }
  
  export const UserModel = getModelForClass<typeof User, QueryHelpers>(User);
  
  @InputType()
  export class CreateUserInput {
    @Field(() => String)
    firstname: string;

    @Field(() => String)
    lastname: string;

    @Field(() => String)
    email: string;
  
    @Field(() => String)
    password: string;
  }
  
  @InputType()
  export class LoginInput {
    @Field(() => String)
    email: string;
  
    @Field(() => String)
    password: string;
  }
  