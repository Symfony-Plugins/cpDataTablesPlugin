(function($) {
  function calculate_date(date) {
    var date = date.replace(" ", "");
    
    if (date.indexOf('.') > 0) {
      /*date a, format dd.mn.(yyyy) ; (year is optional)*/
      var eu_date = date.split('.');
    }
    else if (date.indexOf('/') > 0){
      /*date a, format dd/mn/(yyyy) ; (year is optional)*/
      var eu_date = date.split('/');
    }
    else if (date.indexOf('-') > 0){
      /*date a, format dd-mn-(yyyy) ; (year is optional)*/
      var eu_date = date.split('-');
    }
    else { return 0; }
    
    
    /*year (optional)*/
    if (eu_date[2]) { var year = eu_date[2]; } 
    else { var year = 0; }
    
    /*month*/
    var month = eu_date[1];
    if (month.length == 1) {
      month = 0+month;
    }
    
    /*day*/
    var day = eu_date[0];
    if (day.length == 1) {
      day = 0+day;
    }
    
    return (year + month + day) * 1;
  }

  $.fn.dataTableExt.oSort['eu_date-asc'] = function(a, b) {
    x = calculate_date(a);
    y = calculate_date(b);
    
    return ((x < y) ? -1 : ((x > y) ?  1 : 0));
  };

  $.fn.dataTableExt.oSort['eu_date-desc'] = function(a, b) {
    x = calculate_date(a);
    y = calculate_date(b);
    
    return ((x < y) ? 1 : ((x > y) ?  -1 : 0));
  };  
})(jQuery);

(function($) {
  function calculate_date(date) {
    var date = date.replace(" ", "");
    
    if (date.indexOf('/') > 0){
      /*date a, format mn/dd/(yyyy) ; (year is optional)*/
      var eu_date = date.split('/');
    }
    else if (date.indexOf('-') > 0){
      /*date a, format mn-dd-(yyyy) ; (year is optional)*/
      var eu_date = date.split('-');
    }
    else { return 0; }
    
    
    /*year (optional)*/
    if (eu_date[2]) { var year = eu_date[2]; } 
    else { var year = 0; }
    
    /*month*/
    var monthday = eu_date[0];
    if (month.length == 1) {
      month = 0+month;
    }
    
    /*day*/
    var day = eu_date[1];
    if (day.length == 1) {
      day = 0+day;
    }
    
    return (year + month + day) * 1;
  }

  $.fn.dataTableExt.oSort['us_date-asc'] = function(a, b) {
    x = calculate_date(a);
    y = calculate_date(b);
    
    return ((x < y) ? -1 : ((x > y) ?  1 : 0));
  };

  $.fn.dataTableExt.oSort['us_date-desc'] = function(a, b) {
    x = calculate_date(a);
    y = calculate_date(b);
    
    return ((x < y) ? 1 : ((x > y) ?  -1 : 0));
  };  
})(jQuery);

(function($) {
  jQuery.fn.dataTableExt.oSort['formatted-num-asc'] = function(x,y) {
    x = x.replace(/[^\d\-\.\/]/g,'');
    y = y.replace(/[^\d\-\.\/]/g,'');
    if (x.indexOf('/') >= 0) { x = eval(x); }
    if (y.indexOf('/') >= 0) { y = eval(y); }
    return x/1 - y/1;
  };
  jQuery.fn.dataTableExt.oSort['formatted-num-desc'] = function(x,y) {
    x = x.replace(/[^\d\-\.\/]/g,'');
    y = y.replace(/[^\d\-\.\/]/g,'');
    if (x.indexOf('/' )>= 0) { x = eval(x); }
    if (y.indexOf('/') >= 0) { y = eval(y); }
    return y/1 - x/1;
  };
})(jQuery);

(function($) {
  jQuery.fn.dataTableExt.oSort['natural-asc']  = function(a,b) {
    return naturalSort(a,b);
  };
  
  jQuery.fn.dataTableExt.oSort['natural-desc'] = function(a,b) {
    return naturalSort(a,b) * -1;
  };
})(jQuery);