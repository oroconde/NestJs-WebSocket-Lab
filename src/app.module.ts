import { Module } from '@nestjs/common';
import { GatewayModule } from './websockets/websockets.module';

@Module({
  imports: [GatewayModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
