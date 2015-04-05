        
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
                        colors: ['#A6CEE3'],
                        chart: {
                            renderTo: 'column1',
                            type: 'column'
                        },
                         credits: {
                                enabled: false
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
                        colors: ['#DBEBF4','#CAE2EE','#A6CEE3','#B8D8E9','#85A5B6','#647C88','#42525B','#21292D'],
                        chart: {
                            renderTo: 'pie1',
                            type: 'pie'
                        },
                         credits: {
                                enabled: false
                        },
                        title: {
                            text: ''
                        },
                        
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: false
                                },
                                style:{
                                        fontSize:'11px'
                                },
                                showInLegend: true
                            }
                        },             
                        
                        legend: {
                                align: 'center',
                                layout: 'vertical',
                                verticalAlign: 'bottom',
                                x: 40,
                                y: 0
                            },
                                
                        series: [{
                            name: 'Billions',
                            data: [
                            ['Peace and security',8.6],
                            ['Humanitarian assistance',6.2],
                            ['Health',9.2],
                            ['Program management',1.3],
                            ['Economic development',2.8],
                            ['Democracy, human rights and governance',1.9],
                            ['Education and social services',1.4],
                            ['Environment',0.8],

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
                         credits: {
                                enabled: false
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
                "ajax": 'js/foreignAidTable.json',
                "paging": true,
                "aLengthMenu": [[10, 25, 50, 75, 126], ["10 per page", "25 per page", "50 per page", "75 per page", "All"]],
                "iDisplayLength": 10,
                "bInfo" : false
                });
        } );

