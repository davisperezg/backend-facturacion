import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Area } from 'src/area/schemas/area.schema';
import { Role } from 'src/role/schemas/role.schema';
export type UserDocument = User & mongoose.Document;

@Schema({ timestamps: true, versionKey: false })
export class User {
  @Prop({ trim: true, requerid: true, uppercase: true })
  name: string;

  @Prop({ trim: true, requerid: true, uppercase: true })
  lastname: string;

  @Prop({ trim: true, requerid: true, uppercase: true })
  tipDocument: string;

  @Prop({ trim: true, requerid: true, unique: true, uppercase: true })
  nroDocument: string;

  @Prop({ trim: true, requerid: true, unique: true, uppercase: true })
  email: string;

  @Prop({ trim: true, requerid: true, unique: true, lowercase: true })
  username: string;

  @Prop({ trim: true, requerid: true })
  password: string;

  @Prop({ trim: true, requerid: true })
  status: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true })
  role: Role;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Area',
    required: true,
  })
  area: Area;
}

export const UserSchema = SchemaFactory.createForClass(User);
