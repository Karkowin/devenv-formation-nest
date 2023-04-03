import { ObjectType, Field } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@ObjectType()
@Schema({
    timestamps: true,
})
export class Post {

    @Field()
    _id: string;

    @Field()
    @Prop()
    title: string;

    @Field()
    @Prop()
    content: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);