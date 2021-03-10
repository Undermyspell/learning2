import { UserContextProvider } from './auth/user-context.provider';
import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesController } from './controllers/images.controller';
import { EventService } from "./services/event.service";
import { ImagesService } from './services/images.service';
import { Event, EventSchema } from "./schemas/event.schema";
import { User, UserSchema } from "./schemas/user.schema";
import { Role, RoleSchema } from "./schemas/role.schema";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { EventResolver } from "./graphql/resolvers/event.resolver";
import { UserService } from "./services/user.service";
import { UserResolver } from "./graphql/resolvers/user.resolver";
import { RoleResolver } from "./graphql/resolvers/role.resolver";
import { AuthService } from "./services/auth.service";
import { AuthDirective } from "./directives/auth.directive";
import { RoleService } from "./services/role.service";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_ENDPOINT}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), "src/graphql/schema/schema.gql"),
      schemaDirectives: {
        auth: AuthDirective
      },
      context: ({ req }) => ({ userContext: UserContextProvider.tryGetUserContext(req.headers.authorization || "") })
    })
  ],
  controllers: [AppController, ImagesController],
  providers: [AppService, ImagesService, EventService, UserService, AuthService, RoleService, EventResolver, UserResolver, RoleResolver],
})
export class AppModule { }
