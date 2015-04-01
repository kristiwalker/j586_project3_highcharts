        
        var dispursement = [];
        var country = [];
        var category = [];
        var adjustedSpending = [];
        var place =[];
        var year =[];
        var time =[];

        
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
                            var place = $foraid.attr("name");
                            var description = $foraid.find('country').text();
                            var imageurl = $foraid.attr('imageurl');
                            dispursement.push(parseInt($foraid.find('dispursement').text())); //parseInt is a function that says turn this text into an integer. Push adds the data to the back of each one so that order makes sense. Pop goes to the front.
                            country.push($foraid.find('country').text()); //parseInt is a function that says turn this text into an integer. Push adds the data to the back of each one so that order makes sense. Pop goes to the front.
        
                        var html = '<dt> <img class="bioImage" alt="" src="' + imageurl + '" /> </dt>';
                        html += '<dd> <span class="loadingPic" alt="Loading" />';
                        html += '<p class="name">' + place + '</p>';
                        html += '<p> ' + description + '</p>' ;
                        html += '</dd>';
            
                        $('dl').append($(html));
                        
                    
                });
	
                console.log(dispursement);
                buildChart(); //finally builds chart -- needs to be inside function but outside loop so it won't try to write the chart 100 times, etc.
        }

        function buildChart(xml){ //tells how to build chart, but need to add buildChart blah blah in document ready above
	
        console.log(country);
	
                var chart1 = new Highcharts.Chart({
                        colors: ['#3e7fa3'],
                        chart: {
                            renderTo: 'column1',
                            type: 'column'
                        },
                        title: {
                            text: 'Top 10 countries that recieve most aid from U.S.'
                        },
                        xAxis: {
                            categories: country
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
        
        
        $(document).ready(function(){ //runs the functions

        
                $.ajax({ //loads in xml file
                        type: "GET",
                        url: "usaid-sectors/usaid-sectors.xml",
                        dataType: "xml",
                        success: parseXML
                });
	
                function parseXML(xml) { 
                            
        
                        $(xml).find('sector').each(function(){ //starts loop to find all people, etc
                            //console.log("once for every person");
                            var $sector = $(this); 
                            var categories = $sector.attr("name");
                            var description = $sector.find('category').text();
                            var imageurl = $sector.attr('imageurl');
        
                        var html = '<dt> <img class="bioImage" alt="" src="' + imageurl + '" /> </dt>';
                        html += '<dd> <span class="loadingPic" alt="Loading" />';
                        html += '<p class="name">' + categories + '</p>';
                        html += '<p> ' + description + '</p>' ;
                        html += '</dd>';
            
                        $('dl').append($(html));
                        
                    
                });
	
                buildChart(); //finally builds chart -- needs to be inside function but outside loop so it won't try to write the chart 100 times, etc.
        }

        function buildChart(xml){ //tells how to build chart, but need to add buildChart blah blah in document ready above
	
                console.log(category);
                var chart2 = new Highcharts.Chart({
                        colors: ['#3e7fa3'],
                        chart: {
                            renderTo: 'pie1',
                            type: 'pie'
                        },
                        title: {
                            text: 'Foreign Aid Categories'
                        },
                        
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true
                                },
                                showInLegend: false
                            }
                        },             
                        
                            
                        series: [{
                            name: 'Sector',
                            data: [
                            ['Democracy and Governance',828915298],
                            ['Economic Development',2153869585],
                            ['Education and Social Services',893254312],
                            ['Environment',211275166],
                            ['Health',2605956145],
                            ['Humanitarian Assistance',533328557],
                            ['Peace and Security',308706778],
                            ['Program Management',334241629],

                            ]
                        }]
                });
	
	

                }
                
                
        });
        
                $(document).ready(function(){ //runs the functions

        
                $.ajax({ //loads in xml file
                        type: "GET",
                        url: "spending-per-year/inter-dev-spending-years.xml",
                        dataType: "xml",
                        success: parseXML
                });
	
                function parseXML(xml) { 
                            
        
                        $(xml).find('perYear').each(function(){ //starts loop to find all people, etc
                            //console.log("once for every person");
                            var $perYear = $(this); 
                            var time = $perYear.attr("name");
                            var description = $perYear.find('spending').text();
                            var imageurl = $perYear.attr('imageurl');
                            adjustedSpending.push(parseInt($perYear.find('adjustedSpending').text())); //parseInt is a function that says turn this text into an integer. Push adds the data to the back of each one so that order makes sense. Pop goes to the front.
                            year.push($perYear.find('year').text()); //parseInt is a function that says turn this text into an integer. Push adds the data to the back of each one so that order makes sense. Pop goes to the front.

                        var html = '<dt> <img class="bioImage" alt="" src="' + imageurl + '" /> </dt>';
                        html += '<dd> <span class="loadingPic" alt="Loading" />';
                        html += '<p class="name">' + time + '</p>';
                        html += '<p> ' + description + '</p>' ;
                        html += '</dd>';
            
                        $('dl').append($(html));
                        
                    
                });
	
                console.log(adjustedSpending);
                buildChart(); //finally builds chart -- needs to be inside function but outside loop so it won't try to write the chart 100 times, etc.
        }

        function buildChart(xml){ //tells how to build chart, but need to add buildChart blah blah in document ready above
	
	
                var chart3 = new Highcharts.Chart({
                        colors: ['#3e7fa3'],
                        chart: {
                            renderTo: 'column2',
                            type: 'line'
                        },
                        title: {
                            text: 'Foreign Aid Categories'
                        },
                        xAxis: {
                            categories: year
                        },
                        yAxis: {
                            title: {
                                text: 'Dollars'
                            }
                        },
                        series: [{
                            name: 'Sector',
                            data: adjustedSpending
                        }],
                });
	
	

                }
                
                
        });
        
        
        $(document).ready(function() {
            $('#example').dataTable( {
                "ajax": 'dataTable.json'
            } );
        } );
            
