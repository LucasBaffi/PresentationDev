class cashRegister {

  constructor() {
    this.stock = []
    this.register = []

  }

  addProducts(barcode, price, name) {
    const product = { barcode, price, name }
    console.log(product);
    this.stock.push(product)

  }

  starsService(name) {

    return name ? `Iniciando atendimento de: ${name}` : "O nome não foi fornecido.";
  }

  addRegister(barcode, quantity) {

    const item = { barcode, quantity };
    return barcode && quantity ? this.register.push(item) : "Item invalido."

  }

  getCount() {
    let result = 0;
    for (let item of this.register) {
      const product = this.stock.find(p => p.barcode === item.barcode)
      if (product) {
        result += product.price * item.quantity

      }
    }
    return result;
  }

  closeCount(money) {

    let saldo = this.getCount() - money;

    if (saldo > 0) {
      this.register = [];
      return `seu troco é ${saldo}`
    } else {
      return `valor insucifiente`

    }




  }
}