import { IsString, IsOptional, MaxLength } from 'class-validator';

export class UpdateGroupDto {
  @IsString()
  @IsOptional()
  @MaxLength(64)
  name?: string;

  @IsString()
  @IsOptional()
  @MaxLength(256)
  description?: string;
}
