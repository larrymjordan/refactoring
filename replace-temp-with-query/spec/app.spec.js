describe('app', function(){

  describe('Given a customer owns two orders', function(){
    var customer = {
      name: "Pete Pole",
      orders: [
        {quantity: 2, amount: 50, ref: '00001'},
        {quantity: 2, amount: 50, ref: '00002'}
      ]
    }

    it('should print the orders owned by a customer', function(){
      module('app')
      inject(function(orderPrinter){
        var orderContent = "**************************"+
                           "***** Customer Owes ******"+
                           "**************************"+
                           "name: Pete Pole           "+
                           "oustanding: 100           ";
        expect(orderPrinter.printFor(customer)).toEqual(orderContent)
      })
    })

    it('should calculate the base price for all orders', function(){
      module('app')
      inject(function(orderPrinter){
        expect(orderPrinter.calculateBasePriceForProducts(customer.orders)).toEqual(196)
      })
    })
  })
})