import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostService } from './post.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Resolver('Post')
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => String, { name: 'createPost' })
  create(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postService.create(createPostInput);
  }

  @Query(() => [String], { name: 'posts' })
  findAll() {
    return this.postService.findAll();
  }

  @Query(() => String, { name: 'post' })
  findOne(@Args('id') id: string) {
    return this.postService.findOne(id);
  }

  @Mutation(() => String, { name: 'updatePost' })
  update(@Args('_id') _id: string, @Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return this.postService.update(_id, updatePostInput);
  }

  @Mutation(() => String, { name: 'removePost' })
  remove(@Args('id') id: string) {
    return this.postService.remove(id);
  }
}
