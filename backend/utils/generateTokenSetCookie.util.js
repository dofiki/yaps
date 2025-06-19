import jwt from "jsonwebtoken";

export default function generateTokenSetCookie(userId, res) {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '6d'  // Token expires in 6 days
    });

    res.cookie('jwt', token, {
        maxAge: 6 * 24 * 60 * 60 * 1000, // 6 days in milliseconds
        httpOnly: true,      // Prevent JavaScript access (protects against XSS)
        sameSite: 'strict'   // Only send cookie in same-site requests (protects against CSRF)
    });
}
