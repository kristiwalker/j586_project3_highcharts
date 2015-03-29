        
        var dispursement = [];
        var Country = [];

        
        $(document).ready(function(){ //runs the functions

        
                $.ajax({ //loads in xml file
                        type: "GET",
                        url: "top-10/usaid-top-10.xml",
                        dataType: "xml",
                        success: parseXML
                });
	
                function parseXML(xml) { 
                            
        
                        $(xml).find('foraid').each(function(){ //starts loop to find all people, etc
                            //console.log("once for every person");
                            var $foraid = $(this); 
                            var country = $foraid.attr("name");
                            var description = $foraid.find('country').text();
                            var imageurl = $foraid.attr('imageurl');
                            dispursement.push(parseInt($foraid.find('dispursement').text())); //parseInt is a function that says turn this text into an integer. Push adds the data to the back of each one so that order makes sense. Pop goes to the front.
                        
        
                        var html = '<dt> <img class="bioImage" alt="" src="' + imageurl + '" /> </dt>';
                        html += '<dd> <span class="loadingPic" alt="Loading" />';
                        html += '<p class="name">' + country + '</p>';
                        html += '<p> ' + description + '</p>' ;
                        html += '</dd>';
            
                        $('dl').append($(html));
                        
                    
                });
	
                console.log(dispursement);
                buildChart(); //finally builds chart -- needs to be inside function but outside loop so it won't try to write the chart 100 times, etc.
        }

        function buildChart(xml){ //tells how to build chart, but need to add buildChart blah blah in document ready above
	
	
                var chart1 = new Highcharts.Chart({
                        chart: {
                            renderTo: 'chart',
                            type: 'column'
                        },
                        title: {
                            text: 'US Foreign Loans and Grants'
                        },
                        xAxis: {
                            categories: name
                        },
                        yAxis: {
                            title: {
                                text: 'Dollars'
                            }
                        },
                        series: [{
                            name: 'Country',
                            data: dispursement
                        }]
                });
	
	

                }	
        });
    
    
