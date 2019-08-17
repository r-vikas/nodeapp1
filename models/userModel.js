const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name']
    // unique: true,
    // trim: true
    // maxlength: [40, 'A tour name must have less or equal then 40 characters'],
    // minlength: [10, 'A tour name must have more or equal then 10 characters']
  },
  email: {
    type: String,
    required: [true, 'A user must have a email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'provide a valid email']
  },
  photo: {
    type: String
    //required: [true, 'A tour must have a cover image']
  },
  password: {
    type: String,
    required: [true, 'password needed'],
    minlength: 8,
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, 'confirm password needed'],
    validate: {
      validator: function(el) {
        //works on create and save
        return el === this.password;
      },
      message: 'passwords do not match'
    }
  }
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
