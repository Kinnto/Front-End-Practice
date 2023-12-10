
function uppercase(){
    var fname = document.getElementById("fName").value;
    var lname = document.getElementById("lName").value;
//capital first chatacter
    document.getElementById("result").style.textTransform="capitalize";
//make 1st letter to the end & ad ay at the end
    if(fname){
        var pfName = fname.slice(1).toLowerCase()+ fname[0].toLowerCase() + 'ay';
        var plName = lname.slice(1).toLowerCase()+ lname[0].toLowerCase() + 'ay';

        //result
        document.getElementById("result").innerHTML = "Your Pig Latin Name is " + pfName + " " + plName;
    }
}

