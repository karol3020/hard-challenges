// // first way
// function showRating(rating){
//     let ratings = "";
//     for (let i = 0; i < 4; ++i){
//         if (i === 3){
//             ratings = ratings + "*"
//         }
//         else{
//             ratings = ratings + "* "
//         }
//     }
//     return ratings
// }

// console.log(showRating(4,5))

//second way 

function showRating(rating){
    //initialise an empty string
    let ratings = "";
//loop through the rounded down rating
    for (let i = 0; i < Math.floor(rating); ++i){
        //add a star for every interation    
        ratings += "*"
        // iff its not the last interation add a space
        if (i !== Math.floor(rating) - 1){
            ratings += " "
        }
    }
    //if the number is not a integer
    if (!Number.isInteger(rating)){
        //add a full stop
        ratings += " .";
    }
    //return
    return ratings;
}

console.log(showRating(4.5))

function sortLowtoHigh(numbers){
return numbers.sort((a,b) => a-b)
}

console.log(sortLowtoHigh([20,40,10,30,50,10]))

function sortHightoLow(objects){
return objects.sort((a, b) => b.price - a.price);
}

console.log(sortHightoLow([
    {id:1, price:50},
    {id:2, price:20},
    {id:3, price:60},
    {id:4, price:10},
]));

// console.log('person1: shows ticket')
// console.log('person2: shows ticket')

// const promiseWifeBringTicks = new Promise((resolve, reject) => {
//     setTimeout(() => {
//    resolve('ticket');     
//     },3000)
// });

// const getPopcorn = promiseWifeBringTicks.then((t) => {
//     console.log('wife: i have the tics')
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve, reject) => resolve('${t} popcorn') );
// });

// const getButter = getPopcorn.then((t) => {
//     console.log('husband: i got some popcorn')
//     console.log('husband: we should go in')
//     console.log('wife: i need butter on my popcorn');
//     return new Promise((resolve, reject) => resolve('${t} butter'));
// })

// getButter.then((t) => console.log(t))

// console.log('person4: shows ticket')
// console.log('person5: shows ticket')

// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const preMovie = async () => {
//     const promiseWifeBringTicks = new Promise((resolve, reject)  => {
//         setTimeout(() => resolve('ticket'), 3000);
//     });

//     let ticket = await promiseWifeBringTicks;
//     return ticket;
// }

// preMovie().then((m) => console.log(m));

// console.log('person3: shows ticket');
// console.log('person4: shows ticket');

// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const preMovie = async () => {

//     const promiseWifeBringTicks = new Promise((resolve, reject) => {
//         setTimeout(() => reject('ticket'), 3000);
//     });

//     let ticket
//     try {
//         ticket = await promiseWifeBringTicks;
//     } catch (e) {
//         ticket = 'sad face';
//     }

//     return ticket;
// }

// preMovie().then((m) => console.log('person3: shows ${m}'))

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

// const testUserForm = async () => {

//     const loadUserForm = new Promise ((resolve, reject) => {
//         setTimeout(() => resolve('page loaded'), 3000);
//     });

    
//     const enterUserForm = new Promise ((resolve, reject) => {
//         setTimeout(() => resolve('user entered'), 3000);
//     });

//     const verifyUserDetails = () => {

//     }

//     await loadUserForm;
//     await enterUserForm; 
//     const testResult = verifyUserDetails();

//     return testResult;
// }

// pretestUserForm().then((m) => console.log('shows ${m}'))


async function postsByUser(userId){
    const Promise = await fetch ("https://jsonplaceholder.typicode.com/posts")

    const result = await Promise.json()

    const posts = result.filter(element => element.userId === userId)

    console.log(posts)
}

postsByUser(4);

async function firstSixIncomplete(completed){
    const Promise = await fetch ("https://jsonplaceholder.typicode.com/todos")

    const result = await Promise.json()

    const first = result.filter(element => element.completed === completed).slice(0,6);

    console.log(first)
}

firstSixIncomplete(false);