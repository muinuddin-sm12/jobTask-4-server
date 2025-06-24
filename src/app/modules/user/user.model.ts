import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from 'bcrypt';
import config from "../../config";


const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    image: {
      type: String,
    },
    role: {
        type: String,
        enum: {
            values: ['user', 'admin'],
            message: "{VALUE} is not a valid role"
        },
        default: 'user',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('find', function(next){
    this.find({isDeleted: {$ne: true}})
    next();
})
userSchema.pre('save', async function(next) {
    const user = this;
    user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds))
    next(); 
})
userSchema.post('save', function(doc, next){
    doc.password = '';
    next();
})

export const User = model<TUser>('User', userSchema)