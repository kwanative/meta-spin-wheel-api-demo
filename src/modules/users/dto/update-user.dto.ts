import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
  @ApiProperty({ example: "Sando" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example:
      "https://www.shutterstock.com/image-vector/cute-cartoon-cat-wearing-glasses-600nw-2511948245.jpg",
  })
  @IsString()
  @IsNotEmpty()
  pic: string;

  @ApiProperty({ example: "Iron Start" })
  @IsString()
  @IsNotEmpty()
  level: string;

  @ApiProperty({ example: 99 })
  @IsNumber()
  @IsOptional()
  point?: number;

  @ApiProperty({ example: 37 })
  @IsNumber()
  @IsOptional()
  character?: number;

  @ApiProperty({ example: 0 })
  @IsNumber()
  @IsOptional()
  gold_coin?: number;

  @ApiProperty({ example: 0 })
  @IsNumber()
  @IsOptional()
  energy?: number;

  @ApiProperty({ example: 0 })
  @IsNumber()
  @IsOptional()
  map?: number;

  @ApiProperty({ example: 0 })
  @IsNumber()
  @IsOptional()
  auto?: number;

  @ApiProperty({ example: 0 })
  @IsNumber()
  @IsOptional()
  x2_coin?: number;

  @ApiProperty({ example: 0 })
  @IsNumber()
  @IsOptional()
  bg_map?: number;

  @ApiProperty({ example: 0 })
  @IsNumber()
  @IsOptional()
  auto_s?: number;

  @ApiProperty({ example: 0 })
  @IsNumber()
  @IsOptional()
  auto_m?: number;

  @ApiProperty({ example: 0 })
  @IsNumber()
  @IsOptional()
  auto_l?: number;

  @ApiProperty({ example: 0 })
  @IsNumber()
  @IsOptional()
  power_s?: number;

  @ApiProperty({ example: 0 })
  @IsNumber()
  @IsOptional()
  power_m?: number;

  @ApiProperty({ example: 0 })
  @IsNumber()
  @IsOptional()
  power_l?: number;

  @ApiProperty({ example: 0 })
  @IsNumber()
  @IsOptional()
  bonus?: number;
}
