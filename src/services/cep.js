const axios = require('axios');

async function consultarCep(cep) {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
  } catch (error) {
    console.error('Erro ao consultar CEP:', error.message);
    throw error;
  }
}
exports.getCEP = async (req, res) => {
  const { numeroCEP } = req.body;
  try {
    const result = await consultarCep(numeroCEP);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta do CEP' });
  }
};
