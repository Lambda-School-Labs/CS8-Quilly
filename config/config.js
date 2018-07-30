module.exports = {
  port: process.env.PORT || 5000,
  db: process.env.DBURL || "mongodb://localhost:27017/quilly",
  sessionSecret: process.env.SESSION_SECRET || "change this",
  corsOptions: {
    origin: process.env.CLIENTURL || "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200
  },
  stripe: {
    secretKey:
      process.env.STRIPE_SECRET_KEY || "sk_test_QixOiUfMKS32WljW9ThkIi1e"
  }
};