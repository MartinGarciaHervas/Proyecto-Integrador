const users = require('../utils/users')

function login(req, res) {
    const { email, password } = req.query
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            res.status(200).json({ access: true })
        }
    }
    res.status(200).json({ access: false })
}

module.exports = login