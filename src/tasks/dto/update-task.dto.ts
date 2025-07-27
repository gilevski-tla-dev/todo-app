import { IsString, MaxLength, IsOptional } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  @MaxLength(64)
  name: string;

  @IsString()
  @IsOptional()
  @MaxLength(256)
  description?: string;
}
