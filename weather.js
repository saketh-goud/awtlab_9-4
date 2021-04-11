function report()
{
    var request=new XMLHttpRequest();
    var cty=document.getElementById("city").value;

    var apikey = '11fd986653e9d13be6b6c29d7ffc7f00';
    var url=`https://api.openweathermap.org/data/2.5/forecast?q=${cty}&appid=${apikey}`;
    request.open('GET',url,true);
    request.send();
    request.onload = function(){
        let table = document.createElement("TABLE");
        let row = table.insertRow(-1);
        let sno = row.insertCell(-1)
        let temperature = row.insertCell(-1)
        let date = row.insertCell(-1)
        let time = row.insertCell(-1)
        sno.innerHTML = "SNo"
        temperature.innerHTML = "Temperature"
        date.innerHTML = "Date"
        time.innerHTML = "Time"
        table.border = "1"
        try{
            let result = JSON.parse(this.response)
            let res=new Array(result);
            //console.log(res)
    
            res.forEach((day)=>{
                //console.log(day.dt_txt)
                let disp=day.list;
                for(let i=0;i<disp.length;i++)
                {
                    let date=disp[i].dt_txt.split(" ");
                    let row = table.insertRow(-1);
                    let sno = row.insertCell(-1)
                    let temperatureDisp = row.insertCell(-1)
                    let dateDisp = row.insertCell(-1)
                    let tm = row.insertCell(-1)
                    sno.innerHTML = disp.indexOf(disp[i])+1
                    temperatureDisp.innerHTML = disp[i].main.temp
                    dateDisp.innerHTML = date[0]
                    tm.innerHTML = date[1]
                }
            })
            Mytable = document.getElementById("Mytable")
    	Mytable.innerHTML = "";
        Mytable.append(table)
        console.log("Fetching  ... ")
        }
        catch(err)
        {
            alert("Error")
        }











    }
    console.log("sending");
}