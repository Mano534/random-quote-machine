import { createStore } from "redux";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
let quotes = [
    { quote : "I love you the more in that I believe you had liked me for my own sake and for nothing else."
    , author : "John Keats" }
     , 
     { quote : "When you reach the end of your rope, tie a knot in it and hang on."
     , author : "Franklin D. Roosevelt" }
     ,
     { quote : "There is nothing permanent except change."
     , author : "Heraclitus" }
     ,
     { quote : "You cannot shake hands with a clenched fist."
     , author : "Indira Gandhi" }
     ,
     { quote : "Let us sacrifice our today so that our children can have a better tomorrow."
     , author : "A. P. J. Abdul Kalam" }
     ,
     { quote : "It is better to be feared than loved, if you cannot be both."
     , author : "Niccolo Machiavelli" }
     ,
     { quote : "Good judgment comes from experience, and a lot of that comes from bad judgment."
     , author : "Will Rogers" }
     ,
     { quote : "Think in the morning. Act in the noon. Eat in the evening. Sleep in the night."
     , author : "William Blake" }
     ,
     { quote : "Life without love is like a tree without blossoms or fruit."
     , author : "Khalil Gibran" }
     ,
     { quote : "No act of kindness, no matter how small, is ever wasted."
     , author : "Aesop" }
     ,
     { quote : "Love cures people - both the ones who give it and the ones who receive it."
     , author : "Karl A. Menninger" }
     ,
     { quote : "Work like you don't need the money. Love like you've never been hurt. Dance like nobody's watching."
     , author : "Satchel Paige" }
     ,
     { quote : "It is far better to be alone, than to be in bad company."
     , author : "George Washington" }
     ,
     { quote : "If you cannot do great things, do small things in a great way."
     , author : "Napoleon Hill" }
     ,
     { quote : "Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak"
     , author : "Thomas Carlyle" }
     ,
     { quote : "Independence is happiness."
     , author : "Susan B. Anthony" }
     ,
     { quote : "The supreme art of war is to subdue the enemy without fighting."
     , author : "Sun Tzu" }
     ,
     { quote : "Keep your face always toward the sunshine - and shadows will fall behind you."
     , author : "Walt Whitman" }
     ,
     { quote : "Being entirely honest with oneself is a good exercise."
     , author : "Sigmund Freud" }
     ,
     { quote : "Happiness can exist only in acceptance."
     , author : "George Orwell" }
     ,
     { quote : "Love has no age, no limit; and no death."
     , author : "John Galsworthy" }
     ,
     { quote : "You can't blame gravity for falling in love."
     , author : "Albert Einstein" }
]
let NEWQUOTE ='NEWQUOTE';
let color = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];


let initinalState = {
    quote : quotes[0].quote,
    author : quotes[0].author,
    backgrounds : color[0] , 
    element : <p id="text" style={{ opacity : 1,color : color[0]}}>{quotes[0].quote}</p>
}
let reducer =(state = initinalState,action)=>{
    switch (action.type){
        case NEWQUOTE:
            let x = Math.floor(Math.random()*20);
            let bg = Math.floor(Math.random()*50);
            let ele=<p id="text" className="px-sm-5" p-2 style={{ opacity : 1 , color : color[bg]}}>{quotes[x].quote}</p>;
            return {...state,quote : quotes[x].quote,
                author : quotes[x].author,
                backgrounds : color[bg],
                element : ele
            }
        default : 
            return state
    }
}
let store = createStore(reducer);






export default store ; 
