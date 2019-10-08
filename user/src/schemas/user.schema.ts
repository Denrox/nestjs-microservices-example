import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { IUser } from '../interfaces/user.interface';

const SALT_ROUNDS = 10;

function transformValue(doc, ret: {[key: string]: any}) {
  delete ret._id;
  delete ret.password;
}

export const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email can not be empty'],
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Email should be valid'
    ]
  },
  is_confirmed: {
    type: Boolean,
    required: [true, 'Confirmed can not be empty']
  },
  password: {
    type: String,
    required: [true, 'Password can not be empty'],
    minlength: [6, 'Password should include at least 6 chars']
  }
}, {
  toObject: {
    virtuals: true,
    versionKey: false,
    transform: transformValue
  },
  toJSON: {
    virtuals: true,
    versionKey: false,
    transform: transformValue
  }
});

UserSchema.methods.getEncryptedPassword = (password: string) => {
  return bcrypt.hash(String(password), SALT_ROUNDS);
};

UserSchema.methods.compareEncryptedPassword = function(password: string) {
  return bcrypt.compare(password, this.password);
};

UserSchema.pre('save', async function(next) {
  const self = this as IUser;
  if (!this.isModified('password')) {
    return next();
  }
  self.password = await self.getEncryptedPassword(self.password);
  next();
});
