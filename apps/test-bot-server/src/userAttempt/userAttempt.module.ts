import { Module } from "@nestjs/common";
import { UserAttemptModuleBase } from "./base/userAttempt.module.base";
import { UserAttemptService } from "./userAttempt.service";
import { UserAttemptController } from "./userAttempt.controller";
import { UserAttemptResolver } from "./userAttempt.resolver";

@Module({
  imports: [UserAttemptModuleBase],
  controllers: [UserAttemptController],
  providers: [UserAttemptService, UserAttemptResolver],
  exports: [UserAttemptService],
})
export class UserAttemptModule {}
