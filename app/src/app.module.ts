import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://C5p69YHr:H7Ym9L68@mongo:27017/dev'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      autoTransformHttpErrors: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AppResolver
  ],
})
export class AppModule {}
