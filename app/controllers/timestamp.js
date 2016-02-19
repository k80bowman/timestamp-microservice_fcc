'use strict';

module.exports = function(req, res) {
    
    var date = req.params.query;
        
    var moment=require('moment');
    var unix = null;
    var natural = null;
    
    function unixToNatural(unix) {
        return moment.unix(unix).format("MMMM D, YYYY");
    }
    
    if(+date >=0) {
        unix = +date;
        natural = unixToNatural(unix);
    }
    
    if(isNaN(+date) && moment(date, "MMMM D, YYYY").isValid()) {
        unix = moment(date, "MMMM D, YYYY").format("X");
        natural = unixToNatural(unix);
    }
    
    var dateNew = {
        unix: unix,
        natural: natural
    };
    
    res.json(dateNew);
    
};