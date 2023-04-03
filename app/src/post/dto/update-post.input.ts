import { Field, InputType } from '@nestjs/graphql';
import { CreatePostInput } from './create-post.input';
import { PartialType } from '@nestjs/mapped-types';

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {

  @Field()
  _id: string;
}
