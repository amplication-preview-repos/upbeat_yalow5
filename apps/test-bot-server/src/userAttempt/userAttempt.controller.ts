import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserAttemptService } from "./userAttempt.service";
import { UserAttemptControllerBase } from "./base/userAttempt.controller.base";

@swagger.ApiTags("userAttempts")
@common.Controller("userAttempts")
export class UserAttemptController extends UserAttemptControllerBase {
  constructor(protected readonly service: UserAttemptService) {
    super(service);
  }
}
