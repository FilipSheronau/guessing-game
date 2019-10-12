class GuessingGame {
    constructor() {
        this.minValue = null;
        this.maxValue = null;
        this.guessValue = null;
    }
        
    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        this.guessValue = Math.round(this.minValue+((this.maxValue-this.minValue)/2));
        return this.guessValue;
    }

    lower() {
        this.maxValue = this.guessValue;
    }

    greater() {
        this.minValue = this.guessValue;
    }
}

module.exports = GuessingGame;
