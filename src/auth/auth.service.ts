import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaClient) {}

  async register(registerDto: RegisterDto) {
    /**
     * @todo Create User
     * 1. Check if email address already exists.
     * 2. Check if mobile number already exists.
     * 3. hash password using bcrypt library.
     * 4. generate JWT token from created user.
     */
  }
}
