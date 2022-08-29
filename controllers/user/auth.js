import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";

import UserModel from '../../models/user/users.js'
const secret = 'test';

const moduleExport = {

    /* *
     * @api {post} /api/user/auth/signin
     * @apiDescription api to login
     * */
    async signin(req, res) {
        const { email, password } = req.body;
        res.status(200).json({ message: "SUCCESS", res: req.body });
        return;

        try {
            const userExists = await UserModel.findOne({ email });

            if (!userExists) return res.status(404).json({ message: "User doesn't exist" });

            const isPasswordCorrect = await bcrypt.compare(password, userExists.password);

            if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

            const token = jwt.sign({ email: userExists.email, id: userExists._id }, secret, { expiresIn: "1h" });

            res.status(200).json({ result: userExists, token });
        } catch (err) {
            res.status(500).json({ message: "Something went wrong" });
        }
    },

    /* *
     * @api {post} /api/user/auth/signup
     * @apiDescription api to signup
     * */
    async signup(req, res) {
        const { email, password, name, username } = req.body;

        try {
            const userExists = await UserModel.findOne({ email: email, username: username });

            if (userExists) return res.status(400).json({ message: "User already exists" });

            const hashedPassword = await bcrypt.hash(password, 12);

            const result = await UserModel.create({ email: email, password: hashedPassword, name: name, username: username });

            const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" });

            res.status(201).json({ result, token });
        } catch (error) {
            res.status(500).json({ message: "Something went wrong", error: error });
            // console.log(error)
        }
    }
}

export default moduleExport