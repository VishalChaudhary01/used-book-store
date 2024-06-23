import jwt from 'jsonwebtoken'


const isAuth = async (req, res, next) => {
     const authorization = req.headers.authorization;
     const token = authorization?.split(" ")[1];
     if (!token) return res.status(404).json({ message: "No token found" })
     jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
          if (err) return res.status(400).json({ message: "invalid token" })
          if (user && user.id) {
               req.id = user.id;
               next();
          } else {
               res.status(400).json({ message: "Invalid token payload" })
          }
     })
}

export default isAuth;