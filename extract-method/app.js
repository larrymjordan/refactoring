angular.module('app',[])
.factory('orderPrinter', function(){
  return {
    printFor: function(customer){
      // print banner
      var content = "**************************"+
                    "***** Customer Owes ******"+
                    "**************************";

      // calculate outstanding
      var outstanding = 0;
      customer.orders.forEach(function(order){
        outstanding = outstanding + order.amount
      })

      //print details
      content = content + "name: " + customer.name + "           ";
      content = content + "oustanding: " + outstanding + "           ";
      return content
    }
  }
})