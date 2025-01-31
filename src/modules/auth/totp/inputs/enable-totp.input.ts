import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Length } from 'class-validator';

@InputType()
export class EnableTotpInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  secret: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @Length(6, 6)
  pin: string;
}
