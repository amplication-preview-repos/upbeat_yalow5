import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserAttemptServiceBase } from "./base/userAttempt.service.base";

@Injectable()
export class UserAttemptService extends UserAttemptServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
