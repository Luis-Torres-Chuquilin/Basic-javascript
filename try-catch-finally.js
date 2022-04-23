/** @format */

function doctores() {
  console.log("function doctores");
  // throw new Error("candelaria errorina");
  throw new Error("friends");
  throw {
    string: function (variable) {
      return `Doctor! X and "${variable}"`;
    },
  };
}

(() => {
  try {
    doctores();
  } catch (e) {
    // console.log("PITUFINA: - ", e.string("caminante"));
    // console.error(e.string("porcotres"));
    console.error(e.name);
    console.error(e.message);
  } finally {
    console.log(true);
    return true;
  }
})();
