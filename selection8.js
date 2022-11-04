var selection = {
    username : "pravin123@gmail.com",
    password : "pravin@8308"
}



function changeclick(){
    var user = document.getElementById("txtuser").value;
    var password = document.getElementById("txtpassword").value;
    if(user===""){
        document.getElementById("txtresult").innerHTML = "Enter User Name";
    }
    else{
        if(selection.username===user){
            if(selection.password===password){
                document.write("Login Succusses")
            
            }
            else {
                document.getElementById("txtresult").innerHTML = "Invalid Password";
            }
           
        } 
        else{
            document.getElementById("txtresult").innerHTML = "Invalid Login";
        } 
        
        
    }
   
}