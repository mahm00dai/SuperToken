class Token {
    constructor(tokenSupply = 0) {
        this.tokenSupply = tokenSupply.toFixed(6);
        this.tokenPrice = this.TokenPrice(tokenSupply);
        this.buyTaxPercentage = 0.05;
        this.sellTaxPercentage = 0.05;
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
        this.y = this.x;
        
        console.log("\n");
        console.log("X 'TokenSupply' : ", this.x);
        console.log("Y 'TokenPrice' : ", this.y);
        

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

            let tax = buyPrice.toFixed(6) * this.buyTaxPercentage.toFixed(6);
            buyPrice += tax;

            this.tokenSupply -= qty;
            this.soldTokens += qty;
            // this.treasuryBalance += tax;
            this.treasuryBalance += buyPrice;

            console.log("\n");
            console.log("SoldTokens = ", this.soldTokens.toFixed(6));
            console.log("TokenSupply = ", this.tokenSupply.toFixed(6));
            console.log("TreasuryBalance = ", this.treasuryBalance.toFixed(6));
            console.log("BuyPrice = ", buyPrice.toFixed(6));
            
        } else {
            console.log("\n");
            console.log("Quantity : ", qty, " is higher than Token Supply");
            console.log("\n");
        }
        
        return(buyPrice.toFixed(6));
    };

    Sell (qty) {
        //returns Sell Price for the mentioned quantity based on the Available supply 
        //and updates the tokenSupply and treasuryBlanace.

        let sellPrice = 0;

        if (qty <= this.soldTokens){

            for(let i = this.soldTokens; i > this.soldTokens - qty; i--)
                sellPrice += i;

            let tax = sellPrice.toFixed(6) * this.sellTaxPercentage.toFixed(6);
            sellPrice -= tax;

            this.tokenSupply += qty;
            this.soldTokens -= qty;
            // this.treasuryBalance += tax;
            this.treasuryBalance -= sellPrice;
            
            console.log("\n");
            console.log("SoldTokens = ", this.soldTokens.toFixed(6));
            console.log("TokenSupply = ", this.tokenSupply.toFixed(6));
            console.log("TreasuryBalance = ", this.treasuryBalance.toFixed(6));
            console.log("SellPrice = ", sellPrice.toFixed(6));
        } else {
            console.log("\n");
            console.log("Quantity : ", qty, " is higher than Sold Tokens");
            console.log("\n");
        }
        
        return(sellPrice.toFixed(6));
    };
}


var T = new Token();

T.TokenPrice(100000);

T.Buy(10);

T.Buy(1124.389299);

T.Sell(123);

T.Sell(369.329332);







//        Test Cases        //
// ------------------------//

// T.Buy(10);
// T.Sell(10);
// T.Sell(10);
