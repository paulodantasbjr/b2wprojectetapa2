import connectDB from '../../../utils/connectDB';
import Users from '../../../models/userModel';
import bcrypt from 'bcrypt';
import { createAccessToken } from '../../../utils/geradorDeToken';
import jwt from 'jsonwebtoken';

connectDB();

export default async (req, res) => {
  try {
    const rf_token = req.cookies.refreshtoken;
    if (!rf_token) return res.status(400).json({ err: 'Por favor logue.' });

    const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET);
    if (!result)
      return res
        .status(400)
        .json({ err: 'Seu token está errado ou expirado, logue novamente.' });

    const user = await Users.findById(result.id);
    if (!user)
      return res.status(400).json({
        err: 'Usuário nao existe.',
      });

    const access_token = createAccessToken({ id: user._id });
    res.json({
      access_token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        root: user.root,
      },
    });
  } catch (err) {
    return res.status(400).json({
      err: err.message,
    });
  }
};
