function report()
{
    var request=new XMLHttpRequest();
    var cntry=document.getElementById("cntry").value;

    var apikey = '431b656892250c4e5e7f9620748aca9f';
    let url=`https://api.covid19api.com/live/country/${cntry}`;
    request.open('GET',url,true);
    request.send();
    request.onload = function(){
        let table = document.createElement("TABLE");
        let row = table.insertRow(-1);
        let sno = row.insertCell(-1)
        let activecases = row.insertCell(-1)
        let deathcases = row.insertCell(-1)
        let recovercases=row.insertCell(-1)
        sno.innerHTML = "SNo"
        activecases.innerHTML = "Active Cases"
        deathcases.innerHTML = "Death Cases"
        recovercases.innerHTML="Recovered Cases"
        table.border = "1"
        try{
            let res = JSON.parse(this.response)
            console.log(res)
            res.forEach((day)=>{
                    let row = table.insertRow(-1);
                    let sno = row.insertCell(-1)
                    let actcases = row.insertCell(-1)
                    let dthcases = row.insertCell(-1)
                    let recvcases = row.insertCell(-1)
                    sno.innerHTML = res.indexOf(day)+1
                    actcases.innerHTML = day.Active
                    dthcases.innerHTML = day.Deaths
                    recvcases.innerHTML = day.Recovered
            })
        Mytable = document.getElementById("Mytable")
        Mytable.innerHTML = "";
        Mytable.value="";
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