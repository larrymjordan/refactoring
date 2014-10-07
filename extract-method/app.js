angular.module('app',[])
.factory('orderPrinter', function(){
  function printBanner(){
    var content = "**************************"+
                  "***** Customer Owes ******"+
                  "**************************";
    return content;
  }
  function calculateOutstanding(orders){
    var outstanding = 0;
    orders.forEach(function(order){
      outstanding = outstanding + order.amount;
    });

    return outstanding;
  }
  function printDetail(name, outstanding){
    return  "name: " + name + "           " +
            "oustanding: " + outstanding + "           ";

  }
  return {
    printFor: function(customer){
      var content = printBanner();
      var outstanding = calculateOutstanding(customer.orders);
      content = content + printDetail(customer.name, outstanding);
      return content;
    }
  };
});
