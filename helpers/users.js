const jwt = require('jsonwebtoken');

const PRIVATE_KEY = 'superSecretStringNowoneShouldKnowOrTheCanGenerateTokens';

const calculateToken = (userEmail = '', user_id) => {
  return jwt.sign({ email: userEmail, id: user_id }, PRIVATE_KEY);
};

const getInfoFromToken = (token) => {
  const { email, id } = jwt.decode(token);
  return { email, id };
};
module.exports = { calculateToken, getInfoFromToken };
