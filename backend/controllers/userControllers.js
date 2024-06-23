import { User, signinValidation, signupValidation } from '../models/User.js'
import generateToken from '../utils/generateToken.js';


const signup = async (req, res) => {
     const { name, email, password } = req.body;
     const result = signupValidation.validate(req.body);
     if (result.error) return res.status(400).json({ message: result.error.details[0].message });

     const userExist = await User.findOne({ email })
     if (userExist) return res.status(400).json({ message: "Email is already registerd" });

     const user = await User.create({
          name,
          email,
          password
     })
     const token = generateToken(user._id);
     res.status(201).json({ message: "Signup successfully", token })
}

const signin = async (req, res) => {
     const { email, password } = req.body;
     const result = signinValidation.validate(req.body)
     if (result.error) return res.status(400).json({ message: result.error.details[0].message })

     const user = await User.findOne({ email })
     if (!user) return res.status(404).json({ message: "Invalid credentials" })

     const match = await user.matchPassword(password);
     if (!match) return res.status(400).json({ message: "Invalid credentials" })

     const token = generateToken(user._id);
     res.status(200).json({ message: "Signin successfully", token })
}

const getUserProfile = async (req, res) => {
     const user = await User.findById(req.id, ('-password'))
     if (!user) return res.status(400).json({ message: "Something went wrong, Please try again" });
     res.status(200).json({ user })
}

const updateUserProfile = async (req, res) => {
     const { name, password } = req.body;
     
     const id = req.id;
     const user = await User.findById(id);
     if (!user) return res.status(404).json({ message: "User not found"});

     const updatedUser = await User.findByIdAndUpdate(id, { name, password }, { new: true} )
     res.status(200).json({ Message: "User profile updated successfully", updatedUser })
}

export {
     signin,
     signup,
     getUserProfile,
     updateUserProfile,
}