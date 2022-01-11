/** Task 1:
 * create 3 objects with the name movie1, movie2, movie3
 * Add 3 properties to it
 * - id -> just a unique id, you can start with 1
 * - name -> a movie name (e.g. COCO)
 * - image  -> an http link of the image on the internet
 * rating -> a rating number from 1 to 10
 *
 * After you create the movies, console log them.
 * Open the live server, and see the logs in the console of the browser
 *
 */

// add the movies variables here ....
const movie1 = {
    id: 1,
    name: "COCO",
    image: "https://images.moviesanywhere.com/43e488c14820c91d7f838509bf68b529/7f534183-4d42-49d6-ad99-960e4751d053.jpg?r=3x1&w=2400",
    rating: 7
}

const movie2 = {
    id: 2,
    name: "fight Club",
    image: "https://cdn.domestika.org/c_limit,dpr_1.0,f_auto,q_auto,w_820/v1576552355/content-items/003/521/446/FIGHTCLUB_FINAL-original.jpg?1576552355",
    rating: 10
}

const movie3 = {
    id: 3,
    name: "Braveheart",
    image: "https://whatsondisneyplus.com/wp-content/uploads/2021/03/braveheart.jpg",
    rating: 10
}

console.log(movie1);
console.log(movie2);
console.log(movie3);

/** Task 2:
 * Create an array `movies`
 * Add to it the movies that you created on top.
 * Once you add one movie,
 * you will see the movie card in the html page!
 *
 * Don't add to the array the movies variables,
 * just copy paste the content to be in the following format
 * [
 *    {
 *       prop: value,
 *       prop: value,
 *       prop: value,
 *    },
 * ]
 */

 const movies = [
    {
        id: 1,
        name: "COCO",
        image: "https://images.moviesanywhere.com/43e488c14820c91d7f838509bf68b529/7f534183-4d42-49d6-ad99-960e4751d053.jpg?r=3x1&w=2400",
        rating: 7
    }
    
    , {
        id: 2,
        name: "fight Club",
        image: "https://cdn.domestika.org/c_limit,dpr_1.0,f_auto,q_auto,w_820/v1576552355/content-items/003/521/446/FIGHTCLUB_FINAL-original.jpg?1576552355",
        rating: 10
    }
    
    , {
        id: 3,
        name: "Braveheart",
        image: "https://whatsondisneyplus.com/wp-content/uploads/2021/03/braveheart.jpg",
        rating: 10
    }
 ]

/** TASK 3:
 * Create a new file call it `movies.json`
 * Copy paste the content of the array inside the json file
 * Make sure it's a json format.
 */

