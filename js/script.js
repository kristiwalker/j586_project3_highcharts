        
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
                            dispursement.push(parseInt($foraid.find('dispursement').text())); //parseInt is a function that says turn this text into an integer. Push adds the data to the back of each one so that order makes sense. Pop goes to the front.
                            country.push($foraid.find('country').text()); //parseInt is a function that says turn this text into an integer. Push adds the data to the back of each one so that order makes sense. Pop goes to the front.                        
                    
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
                            text: ''
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
                            name: 'Dollars',
                            showInLegend: false,
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
                    
                });
	
                buildChart(); //finally builds chart -- needs to be inside function but outside loop so it won't try to write the chart 100 times, etc.
        }

        function buildChart(xml){ //tells how to build chart, but need to add buildChart blah blah in document ready above
	
                console.log(category);
                var chart2 = new Highcharts.Chart({
                        colors: ['#3e7fa3','#316480','#8bb2c8','#316480','#6599b6','#b2ccda','#d8e5ec','#78a6bf'],
                        chart: {
                            renderTo: 'pie1',
                            type: 'pie',
                            style: {
                                fontFamily: 'arial, serif',
                                fontSize: 11,
                                fontWeight: 200
                                }
                        },
                        title: {
                            text: ''
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
                            name: 'Dollars',
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
                            adjustedSpending.push(parseInt($perYear.find('adjustedSpending').text())); //parseInt is a function that says turn this text into an integer. Push adds the data to the back of each one so that order makes sense. Pop goes to the front.
                            year.push($perYear.find('year').text()); //parseInt is a function that says turn this text into an integer. Push adds the data to the back of each one so that order makes sense. Pop goes to the front.

            
                        
                    
                });
	
                console.log(adjustedSpending);
                buildChart(); //finally builds chart -- needs to be inside function but outside loop so it won't try to write the chart 100 times, etc.
        }

        function buildChart(xml){ //tells how to build chart, but need to add buildChart blah blah in document ready above
	
	
                var chart3 = new Highcharts.Chart({
                        colors: ['#000'],
                        chart: {
                            renderTo: 'line1',
                            type: 'line'
                        },
                        title: {
                            text: ''
                        },
                        xAxis: {
                            categories: year,
                            plotBands: [{
                                from: -0.5,
                                to: 1.5,
                                color: "#F5F5F5"
                            }, {
                                from: 1.5,
                                to: 5.5,
                                color: "#fa9d9d"

                            },{
                                from: 5.5,
                                to: 9.5,
                                color: "#a6cee3"
                            },{
                                from: 9.5,
                                to: 13.5,
                                color: "#F5F5F5"
                            },{
                                from: 13.5,
                                to: 14.5,
                                color: "#fa9d9d"
                                }]
                        },
                        yAxis: {
                            title: {
                                text: 'Billions'
                            },
                            gridLineColor: 'white',

                        },
                        series: [{
                            showInLegend: false,
                            name: 'Billions',
                            data: adjustedSpending
                        }],
                });
	
	

                }
                
                
        });
        
        
        $(document).ready(function() {
            $('#example').dataTable( {
                "ajax": 'all-dispursements/usaid-all-dispursements.json',
                "scrollY":        "400px",
                "scrollCollapse": true,
                "paging":         false
            } );
        } );
            
