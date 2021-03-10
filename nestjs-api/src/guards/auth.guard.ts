import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from "@nestjs/graphql";
import { Observable } from 'rxjs';
import { UserContextProvider } from "src/auth/user-context.provider";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const authenticated = !!context.getArgs()[2].userContext;
    return authenticated;
  }
}