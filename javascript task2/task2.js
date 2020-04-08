var data = [
	{
		principal : 2500,
		time : 1.8
	},
	{
		principal : 1000,
		time : 5
	},
	{
		principal : 3000,
		time : 1
	},
	{
		principal : 2000,
		time : 3
	}
];

let rate = 0;
let interest = 0;
let interestData = []

function interestCalculator() {
	for (var i = 0; i < data.length; i++)  {
		
		if (data[i].principal >= 2500 && (data[i].time > 1 && data[i].time < 3)) rate = 2;
		 
		  	else if (data[i].principal < 2500 || data[i].time <= 1) rate = 2;
        
        	else if (data[i].principal >= 2500 && data[i].time >= 3) rate = 4; 
			
			else rate = 1;
		
		interest = (data[i].principal * rate * data[i].time) / 100;
        interestData.push({
            principal: data[i].principal,
            rate,
            time: data[i].time,
            interest
        });
    }; 
    console.log(interestData);
    		return interestData
}

interestCalculator(data);