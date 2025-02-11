const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Registro de usuario
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: "User already exists" });

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear un nuevo usuario
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

// Inicio de sesión
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: "User not found" });

        // Comparar contraseñas
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

        // Generar un token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
