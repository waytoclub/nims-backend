import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from 'mongoose';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
   @Prop({ required: true })
   title: string;
   @Prop({ required: true })
   description: string;
   @Prop({ required: true })
   release: string;
   @Prop({ required: true })
   genre: string;
}
export const MovieSchema = SchemaFactory.createForClass(Movie);

