const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());  // Middleware, um JSON-Daten zu akzeptieren

// Beispiel-Route für Login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Hier würde eine Authentifizierung gegen eine Datenbank oder ein externes System stattfinden
    if (email === "user@example.com" && password === "password123") {
        return res.status(200).json({ message: "Login erfolgreich", user: { email } });
    }

    return res.status(401).json({ message: "Ungültige Anmeldedaten" });
});

// Beispiel-Route für Registrierung
app.post('/register', (req, res) => {
    const { firstName, lastName, phone, birthDate, address } = req.body;

    // Hier würde die Registrierung und Speicherung der Benutzerdaten in einer Datenbank stattfinden
    return res.status(201).json({ message: "Benutzer erfolgreich registriert" });
});

// Beispiel-Route für Spenden
app.post('/donate', (req, res) => {
    const { amount, donationType } = req.body;

    // Hier würde eine Anbindung zu Twint oder einer anderen Zahlungsplattform erfolgen
    return res.status(200).json({ message: `Spende von ${amount} für ${donationType} erfolgreich` });
});

// Starte den Server
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
