# Steam Inventory Scraper
Search, scrape, list inventories of players with ease.
[Follow this link](https://yussufjpg.github.io/Steam-Inventory-Scraper/) for better explanation.

## How to use ?
### Beginning
----------
 - Open terminal on **project directory**,  
  
- Type `git clone https://github.com/yussufjpg/Steam-Inventory-Scraper.git`,  
  
- Type `npm install`,  
  
- Open a folder named `'Saves'`,  
  
- Configure settings according to the [documentation](https://yussufjpg.github.io/Steam-Inventory-Scraper/#configuring),  
  
- Open console on **project directory**,  
  
- Type `node index.js`

### Configuring Settings
----------
In this section you're going to learn meaning of every line in `config.json` file.  
  
`config.json` file has a structure like this;  
  
```json
{  
"game": 730,  
"contextid":"2",  
"searchFor":"AK-47",  
"mode":"list"  
}```  
  
Let's explain lines one by one.  
  
- `"game": 730`  line is for game id if you don't put the right game id you won't get right results.  
  
- `"contextid":"2"`  is 2 by default.  
  
- `"searchFor":"item-name"`  change the `item-name` line by your need it's `AK-47` by default.  
  
- `"mode":"list"`  this line is where things get serious because there are 3 modes and every mode have a different result. Go to  [**modes**](https://yussufjpg.github.io/Steam-Inventory-Scraper/#modes)  for more info about modes.

#### Modes 
----------
There are 3 different modes which does the same job but giving the results in a different way.  
- `Scrape`  
Scrapes inventories then stores in ./saves  
- `Search`  
Searches inventories and says if user has the item or not.  
- `List`  
Lists the all inventory of users in terminal but not saves
