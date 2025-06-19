import User from "../models/user.model.js";

const signUp = async (req, res) => {
    try {
        const { username, email } = req.body;

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "User with that name already exists" });
        }

        const newUser = new User({
            username,
            email
        });

        await newUser.save();

        res.status(201).json({ message: "Account created successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export default signUp;
