import { /* inject, */ BindingScope, injectable} from '@loopback/core';
const generador = require("password-generator");
const cryptojS = require("crypto-js");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */) { }

  /*
   * Add service methods here
   */

  GenerarClave() {
    const clave = generador(8, false);
    return clave;
  }

  CifrarClave(clave: string) {
    const claveCifrada = cryptojS.MDS(clave).toString();
    return claveCifrada;

  }
}
