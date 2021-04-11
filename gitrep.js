function report()
{
    var request=new XMLHttpRequest();
    var uname=document.getElementById("uname").value;
    var url=`https://api.github.com/users/${uname}/repos`
    request.open('GET',url,true);
    request.send();
    request.onload = function(){
        let table = document.createElement("TABLE");
        let row = table.insertRow(-1);
        let sno = row.insertCell(-1)
        let id=row.insertCell(-1)
        let name=row.insertCell(-1)
        let owner=row.insertCell(-1)
        sno.innerHTML = "SNo"
        id.innerHTML="ID"
        name.innerHTML="RepositoryName"
        owner.innerHTML="Owner"
        table.border = "1"
        try{
            let res = JSON.parse(this.response)
            console.log(res)
            res.forEach((day)=>{
                let row = table.insertRow(-1);
                let sno = row.insertCell(-1)
                let Id=row.insertCell(-1)
                let name=row.insertCell(-1)
                let owner=row.insertCell(-1)
                sno.innerHTML = res.indexOf(day)+1
                Id.innerHTML=day.id
                name.innerHTML=day.name
                owner.innerHTML=day.owner.login
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