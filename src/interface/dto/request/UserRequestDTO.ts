import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class UserRequestDTO {
  // Required ID field with validation
/*   @IsNotEmpty({ message: 'ID is required.' }) */
/*   @IsNumber({}, { message: 'ID must be a number.' })
  id!: number; */

  // Optional name field with validation if provided
  @IsOptional()
  @IsString({ message: 'Name must be a string if provided.' })
  name?: string;

  // Additional fields can be uncommented and used as needed:

  // @IsNotEmpty({ message: 'Title is required and cannot be empty.' })
  // @IsString({ message: 'Title must be a string.' })
  // title!: string;

  // @IsNotEmpty({ message: 'Author is required and cannot be empty.' })
  // @IsString({ message: 'Author must be a string.' })
  // author!: string;

  // @IsNotEmpty({ message: 'Published Date is required.' })
  // @IsDate({ message: 'Published Date must be a valid date.' })
  // publishedDate!: Date;

  // @IsNumber({}, { message: 'Price must be a number.' })
  // @Min(0, { message: 'Price must be at least 0.' })
  // @Max(1000, { message: 'Price cannot exceed 1000.' })
  // price!: number;

  // @IsOptional()
  // @IsString({ message: 'Description must be a string if provided.' })
  // description?: string;

  // @IsPhoneNumber("US", { message: 'Phone number must be valid.' })
  // @IsNotEmpty({ message: 'Phone number is required.' })
  // phoneNumber!: string;
}
