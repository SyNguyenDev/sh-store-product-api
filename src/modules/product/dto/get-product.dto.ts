import { IsInt, Min } from 'class-validator';

export class GetProductDto {
  @IsInt()
  @Min(1)
  page: number;

  @IsInt()
  @Min(1)
  limit: number;
}
