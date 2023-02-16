let login = prompt("Who is there?","")

if (login === "Admin"){
    let password = prompt("Password?")
    if (password === "I am the boss",""){
        alert("Hello");
    } else if (password === "" || password === "null"){
        alert("Canceled");
    } else alert ("wrong password");

} else if (login === "" || login === "null"){
    alert("Canceled");
} else alert ("I dont know who are you");