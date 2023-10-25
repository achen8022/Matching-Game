let deck = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let score = 0;
let cardOne,cardTwo;


function shuffle(deck)
{
    for(var i = 0; i < deck.length; i++)
    {
        var temp = Math.floor(Math.random() * (i+1));
        var swap = deck[i];
        deck[i] = deck[temp];
        deck[temp] = swap;
    }
}