const con = require("../mysql-connection");

module.exports = {
  buscaTodos: () => {
    return con.select().from("funcionarios");
  },
  buscaPorId: (id) => {
    return con.select().from("funcionarios").where("id", "=", id);
  },
};
