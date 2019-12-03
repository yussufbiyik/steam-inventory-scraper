const steaminventory = require('get-steam-inventory');
const fs = require('fs');

const config = require('./config.json'); //Search parameters.
const users = require('./users.json'); //Users written to list inventories. Use SteamId64, not any other.

var appid = config.game; //Extracting appid from config.json file.
var searchFor = config.searchFor; //Extracting search item from config.json file.
var mode = config.mode; //Extracting mode from config.json file.
//var save = config.save; //Extracting saving details from config.json file.
var contextid = config.contextid; //Extracting contextid (2 by default) from config.json file.
var steamid = users.users; //Extracting list of users from users.json file..

//Bulk scraping inventories.
function bulkScrape(steamid,q,p){
    
    steamid.forEach(function(item, q, steamid){
        var usr = steamid[q];
        
        steaminventory.getinventory(appid, usr, contextid).then(data => {

        var saveName = "./saves/"+usr+ ".txt";
        file = fs.createWriteStream(saveName);
        file.on('error', function(err){console.log(err);})

        data.marketnames.forEach(function(item,p, array){
            file.write(data.marketnames[p]);
            file.write(', ' + '\n'); 
        });
            console.log("Scraped inventory details of the user with the id " + usr + " are saved!");
        }).catch(err => console.log(err + " (" + "user - " + usr + ")"));

        
        q++;
    });
}

// Bulk listing inventories.

function bulkList(q,steamid){
    steamid.forEach(function(item, q, steamid){
        var usr = steamid[q];
        
        steaminventory.getinventory(appid, usr, contextid).then(data => {
            console.log('-------------------------------------------------------');

            console.log("Inventory of "+ usr);

            console.log(data.marketnames);
            
            console.log("End of " + usr + "'s inventory.");
            
            console.log('-------------------------------------------------------\n\n');
        }).catch(err => console.log( "(" + err + " user - " + usr + ")" ));
        q++;
    });
}

// Searching for items in inventory of players.

function searchForItem(searchFor,steamid,q){
    steamid.forEach(function(item, q, steamid){
        var usr = steamid[q];
        
        steaminventory.getinventory(appid, usr, contextid).then(data => { 

            console.log("User with the id " + usr + " has item named " + searchFor);

        }).catch(err => console.log(err + " (" + "user - " + usr + ")"));
        q++;
    });
}

var q = 0;
var p = 0;
if(mode === "search"){
    searchForItem(searchFor,steamid,q);
}
if(mode === "scrape"){
    bulkScrape(steamid,q,p);
}
if(mode === "list"){
    bulkList(q,steamid);
}


