class ProdutoElements {
    labelProduto = () => { return '.product_label' }
    primeiroProduto = () => { return '#item_4_img_link > .inventory_item_img' }
    botaoAddCartPrimeiroProduto = () => { return ':nth-child(1) > .pricebar > .btn_primary' }
    botaoRemovePrimeiroProduto = () => { return '.btn_secondary' }
    ordenarListaProdutos = () => { return '.product_sort_container' }
}
  
export default ProdutoElements;