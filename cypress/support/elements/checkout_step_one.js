class CheckoutOneElements {
    firstName = () => { return '[data-test=firstName]' }
    lastName = () => { return '[data-test=lastName]' }
    zipPostalCode = () => { return '[data-test=postalCode]' }
    botaoContinue = () => { return '.btn_primary' }
    botaoCancel = () => { return '.cart_cancel_link' }
    mensagemErro = () => { return '[data-test=error]' }
}
  
export default CheckoutOneElements;