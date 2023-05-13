import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from 'src/database/database.module';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
			secret: process.env.JWT_SECRET,
			signOptions: {
				expiresIn: process.env.JWT_EI,
			}
		}),
		PassportModule.register({ defaultStrategy: 'jwt' }),
		DatabaseModule,
	],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
