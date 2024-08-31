const setRateLimit = require("express-rate-limit");

// Rate limit middleware
const rateLimitMiddleware = setRateLimit({
  windowMs: 15 * 60 * 1000, //For 15 minutes
  max: 5,
  message: "You have exceeded your 5 requests per minute limit.",
  headers: true,
});


module.exports = rateLimitMiddleware;