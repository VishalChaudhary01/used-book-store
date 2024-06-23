import jwt from 'jsonwebtoken'

const generateToken = (id) => {
     if (!process.env.JWT_SECRET) {
          throw new Error('JWT_SECRET is not defined in the environment variables');
     }

     return jwt.sign({ id }, process.env.JWT_SECRET, {
          expiresIn: '1h'
     })
}

export default generateToken;