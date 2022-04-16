import { IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  readonly course: string;
  @IsString()
  readonly description: string;
  @IsString({ each: true })
  readonly tags: string[];
}
