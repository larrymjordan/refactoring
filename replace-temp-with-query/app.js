angular.module('app',[])
.factory('orderPrinter', function(){
  function printBanner(){
    return "**************************"+
           "***** Customer Owes ******"+
           "**************************";
  }

  function calculateOutstanding(orders){
    var outstanding = 0;
    orders.forEach(function(order){
        outstanding = outstanding + order.amount
    })
    return outstanding
  }

  function printDetails(name, outstanding){
    return "name: " + name + "           "+
           "oustanding: " + outstanding + "           ";
  }

  return {
    printFor: function(customer){
      var content = printBanner();
      var outstanding = calculateOutstanding(customer.orders)
      content = content + printDetails(customer.name, outstanding)
      return content
    },

    // Apply some refactorings here!
    calculateBasePriceForProducts: function(orders) {
      var totalBasePrices = 0;
      orders.forEach(function(order){
        var basePrice = order.quantity * order.amount
        if (basePrice > 1000) {
          totalBasePrices += basePrice * 0.95
        } else{
          totalBasePrices += basePrice * 0.98
        }
      });
      return totalBasePrices;
    }
  }
})