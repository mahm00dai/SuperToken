class Token {
    constructor(tokenSupply = 0) {
        this.tokenSupply = tokenSupply.toFixed(6);
        this.tokenPrice = this.TokenPrice(tokenSupply);
        this.buyTaxPercentage = 0.01;
        this.sellTaxPercentage = 0.001;
        this.treasuryBalance = 0.000000;
        this.soldTokens = 0;
        
        console.log("\n");
        console.log("TokenPrice = ", this.tokenPrice);
        console.log("TokenSupply = ", this.tokenSupply);
        console.log("BuyTaxPercentage = ", this.buyTaxPercentage);
        console.log("SellTaxPercentage = ", this.sellTaxPercentage);
        console.log("TreasuryBalance = ", this.treasuryBalance);
        console.log("\n");
    };

    TokenPrice (tokenSupply)  {
        //returns Token Price for a given Token Supply. 
        this.tokenSupply = tokenSupply.toFixed(6);

        // Linear Function ( Y = 2X + 10)
        this.x = this.tokenSupply;
        this.y = 2 * this.x + 10;
        
        console.log("\n");
        console.log("X 'TokenSupply' : ", this.x);
        console.log("Y 'TokenPrice' : ", "(2 * ", this.x, " + 10) = ", this.y);
        

        this.tokenPrice = (this.y / this.x).toFixed(6);
        console.log("Price per Token = ", this.tokenPrice);
        console.log("\n");

        return(this.tokenPrice);
    };

    Buy (qty) {
        //returns Buy Price for the mentioned quantity based on the Available supply
        // and updates the tokenSupply and treasuryBlanace.

        let buyPrice = 0;

        if (qty <= this.tokenSupply){
            for(let i = this.soldTokens + 1; i <= this.soldTokens + qty; i++)
                buyPrice += i;

            let tax = buyPrice * this.buyTaxPercentage;
            buyPrice += tax;

            this.tokenSupply -= qty;
            this.soldTokens += qty;
            this.treasuryBalance += buyPrice;

            console.log("\n");
            console.log("SoldTokens = ", this.soldTokens);
            console.log("TokenSupply = ", this.tokenSupply);
            console.log("TreasuryBalance = ", this.treasuryBalance);
            console.log("BuyPrice = ", buyPrice);
            
        } else {
            console.log("\n");
            console.log("Quantity : ", qty, " is higher than Token Supply");
            console.log("\n");
        }
        
        return(buyPrice);
    };

    Sell (qty) {
        //returns Sell Price for the mentioned quantity based on the Available supply 
        //and updates the tokenSupply and treasuryBlanace.

        let sellPrice = 0;

        if (qty <= this.soldTokens){

            for(let i = this.soldTokens; i > this.soldTokens - qty; i--)
                sellPrice += i;

            let tax = sellPrice * this.sellTaxPercentage;
            sellPrice += tax;

            this.tokenSupply += qty;
            this.soldTokens -= qty;
            this.treasuryBalance -= sellPrice;
            
            console.log("\n");
            console.log("SoldTokens = ", this.soldTokens);
            console.log("TokenSupply = ", this.tokenSupply);
            console.log("TreasuryBalance = ", this.treasuryBalance);
            console.log("SellPrice = ", sellPrice);
            console.log("\n");
        } else {
            console.log("\n");
            console.log("Quantity : ", qty, " is higher than Sold Tokens");
            console.log("\n");
        }
        
        return(sellPrice);
    };
}


//        Test Cases        //
// ------------------------//

// let T = new Token();

// T.TokenPrice(100000);

// T.Buy(10);

// T.Buy(1124.389299);

// T.Sell(123);

// T.Sell(369.329332);



