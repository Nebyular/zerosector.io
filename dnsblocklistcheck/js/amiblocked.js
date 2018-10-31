//document.getElementById("submit").addEventListener("click", myFunction);

function myFunction() {
    var ispval = null;
    var blockedmodal = document.getElementById("blocked");
    var unblockedmodal = document.getElementById("notblocked");
    var blockeddata = document.getElementById("blocklist");
    var array = ["Telstra", "Bigpond", "Foxtel Broadband", "Belong", "TPG", "iiNet","AAPT","Westnet","PIPE Networks","Netspace","TransACT","Internode","Optus","iPrimus","Dodo"];
    var counter = 0;
    var output = false;
    ispval = document.getElementById('ispinput').value;

    while (array[counter] != null) {
        if (ispval == array[counter]) {
            //do stuff
            blockedmodal.style.display = "block";
            unblockedmodal.style.display = "none";
            blockeddata.style.display = "block";
            output = true;
        }
        counter ++;
    }

    if (output == false){
        //Do the other thing
        blockedmodal.style.display = "none";
        unblockedmodal.style.display = "block"
        blockeddata.style.display = "none";
    }
    ispval = null;  
}
