import * as graphql from "@nestjs/graphql";
import { UserAttemptResolverBase } from "./base/userAttempt.resolver.base";
import { UserAttempt } from "./base/UserAttempt";
import { UserAttemptService } from "./userAttempt.service";

@graphql.Resolver(() => UserAttempt)
export class UserAttemptResolver extends UserAttemptResolverBase {
  constructor(protected readonly service: UserAttemptService) {
    super(service);
  }
}
