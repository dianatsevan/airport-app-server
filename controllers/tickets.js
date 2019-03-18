const tickets = require('../mocked-data/tickets.json');

const getTickets = (req, res, next) => {
  res.send(JSON.stringify(tickets));
}
 
module.exports = { getTickets };