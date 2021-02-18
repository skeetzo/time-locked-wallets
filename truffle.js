module.exports = {
  networks: {
    ganache: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  compilers: {
  	solc: {
  		version: "^0.4.18"
  	}
  }
};
