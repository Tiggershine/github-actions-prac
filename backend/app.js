const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup')

const app = express();
const PORT = 8080;

app.use(cors({
  origin: "http://localhost:4200",
  credentials: true
}))
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`App now listening for requests on port ${PORT}`);
});
