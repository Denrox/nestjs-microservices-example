import { Module } from '@nestjs/common';
import { ConfigService } from './services/config/config.service';
import { ConfirmedStrategyService } from './services/confirmed-strategy.service';
import { PermissionController } from './permission.controller';

@Module({
  imports: [],
  controllers: [PermissionController],
  providers: [ConfigService, ConfirmedStrategyService],
})
export class PermissionModule {}
