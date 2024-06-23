import mongoose from 'mongoose'
import Joi from 'joi'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
     name: {
          type: String,
          required: true,
     },
     email: {
          type: String,
          required: true,
          unique: true,
     },
     password: {
          type: String,
          required: true,
     }
})


userSchema.methods.matchPassword = async function (enteredPassword) {
     return await bcrypt.compare(enteredPassword, this.password)
}


userSchema.pre('save', async function (next) {
     if (!this.isModified('password')) {
          next()
     }
     const salt = await bcrypt.genSalt(10)
     this.password = await bcrypt.hash(this.password, salt)
})

userSchema.pre('findOneAndUpdate', async function (next) {
     const update = this.getUpdate();
     if (update.password) {
          const salt = await bcrypt.genSalt(10);
          update.password = await bcrypt.hash(update.password, salt);
     }
     next()
})


const signupValidation = Joi.object({
     name: Joi.string().min(2).required(),
     email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
     password: Joi.string().required()
});


const signinValidation = Joi.object({
     email: Joi.string().email().required(),
     password: Joi.string().required(),
});

const User = mongoose.model('User', userSchema)

export {
     User, 
     signinValidation,
     signupValidation,
}