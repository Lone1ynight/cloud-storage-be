import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserId = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): number => {
    const request = ctx.switchToHttp().getRequest();
    return Number(request.user.id);
  },
);
