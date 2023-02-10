class Card {
    /**
     * name: si es 6 o as o rey
     * type: diamantes, corazon, picas y trebol
     * color: rojo o negro
     * 
     * Son maximo 52 cartas
     */
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }

    static makeDeck = (type, color) => {
        let deck = [];
        for (let i = 0; i < 13; i++) {
            if (i === 0) {
                deck.push(new Card('as', type, color));
                continue;
            }
            if (i === 10) {
                deck.push(new Card("j", type, color));
                continue
            }
            if (i === 11) {
                deck.push(new Card("q", type, color));
                continue
            }
            if (i === 12) {
                deck.push(new Card("k", type, color));
                continue
            }

            deck.push(new Card((i + 1).toString(), type, color));

        }
        return deck;
    }

    static randomizeDeck = (deck) => {
        let updatedDeck = deck;
        let shuffledDeck = [];
        if (deck.length > 13) {
            for (let i = 0; i < 52; i++) {
                const randNumber = Math.floor(Math.random() * updatedDeck.length);
                shuffledDeck.push(updatedDeck[randNumber]);
                updatedDeck.splice(randNumber, 1); //remove pushed item to avoid repetition
            }
            return shuffledDeck;
        }
        for (let i = 0; i < 13; i++) {
            const randNumber = Math.floor(Math.random() * updatedDeck.length);
            shuffledDeck.push(updatedDeck[randNumber]);
            updatedDeck.splice(randNumber, 1); //remove pushed item to avoid repetition
        }
        return shuffledDeck;
    }

    //decks is an array of all randomized decks
    static makeSingleFullDeck = () => {
        const deck0 = Card.randomizeDeck(Card.makeDeck("hearts", "red"));
        const deck1 = Card.randomizeDeck(Card.makeDeck("diamonds", "red"));
        const deck2 = Card.randomizeDeck(Card.makeDeck("clubs", "black"));
        const deck3 = Card.randomizeDeck(Card.makeDeck("spades", "black"));

        let fullDeck = [];

        deck0.map((item, i) => {
            fullDeck.push(item);
        });

        deck1.map((item, i) => {
            fullDeck.push(item);
        });

        deck2.map((item, i) => {
            fullDeck.push(item);
        });

        deck3.map((item, i) => {
            fullDeck.push(item);
        });

        return fullDeck;
    }
}

class Player {
    constructor(deck) {
        this.deck = deck;
    }
}

const poker = (numberOfPlayers, numberOfCardsToGiveToEachPlayer) => {
    const fullDeck = Card.randomizeDeck(Card.makeSingleFullDeck());
    console.log(fullDeck);
    let deckToOnePlayer = [];
    let players = [];
    for (let i = 0; i < numberOfPlayers; i++) {
        for (let j = 0; j < numberOfCardsToGiveToEachPlayer; j++) {
            deckToOnePlayer.push(fullDeck[0]);
            fullDeck.splice(0, 1); //remove pushed item from full deck to avoid repetition
        }
        players.push(new Player(deckToOnePlayer));
        deckToOnePlayer = [];
    }

    return {
        listOfPlayers: players,
        remainingFullDeck: fullDeck,
        cardsNeeded: (numberOfCardsToGiveToEachPlayer*numberOfPlayers) - 52 < 0 ? 0 : (numberOfCardsToGiveToEachPlayer*numberOfPlayers) - 52 
    };
};

console.log(poker(5, 3));