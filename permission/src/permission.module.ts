import { Module } from '@nestjs/common';
import { ConfigService } from './services/config/config.service.js';
import { ConfirmedStrategyService } from './services/confirmed-strategy.service.js';
import { PermissionController } from './permission.controller.js';

@Module({
  imports: [],
  controllers: [PermissionController],
  providers: [ConfigService, ConfirmedStrategyService],
})
export class PermissionModule {}
