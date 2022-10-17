var questions = [
    "Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”",
    "Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.",
    "Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:",
    "Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.",
    'Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.',
    "Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.",
    "Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.",
    "Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”",
    "Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.",
    "Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.",
    "More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.",
    "Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.",
    "Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.",
    "Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.",
    "Print a second set of invitation messages, one for each person who is still in your list.",
    "Seeing the World: Think of at least five places in the world you’d like to visit.",
    "Store the locations in a array. Make sure the array is not in alphabetical order.",
    "Print your array in its original order.",
    "Print your array in alphabetical order without modifying the actual list.",
    "Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.",
    "Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.",
    "They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.",
    "Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:",
    "More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:",
    "Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of green, yellow, or red.",
    "Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:",
    "Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.",
    "Hello Admin: Make a array of five or more usernames, including the name admin. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:",
    "No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.",
    "Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.",
    "Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.",
    "Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.",
    "Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!",
    "T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.",
    "Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.",
    "Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.",
    "City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:",
    "Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.",
    "Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.",
    "Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.",
    "Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.",
    "Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.",
    "Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.",
];
for (let i = 0; i < 43; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", `accordion-item ${i}`);
    div.setAttribute("id", `${i}`);
    document
        .getElementById("accordionPanelsStayOpenExample")
        .appendChild(div);
    // div.innerHTML = "This is a paragraph.";
    let div_h2 = document.createElement("h2");
    div_h2.setAttribute("class", `accordion-header ${i}`);
    div_h2.setAttribute("id", `panelsStayOpen-heading${i}`);
    document.getElementById(i).appendChild(div_h2);
    let btn = document.createElement("button");
    btn.setAttribute("class", `accordion-button ${i}`);
    btn.setAttribute("data-bs-toggle", "collapse");
    btn.setAttribute("data-bs-target", `#panelsStayOpen-collapse${i}`);
    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-controls", `panelsStayOpen-collapse${i}`);
    btn.innerHTML = `Question ${i + 1}: ${questions[i]}`;
    document.getElementById(`panelsStayOpen-heading${i}`).appendChild(btn);
    let sibling_div = document.createElement("div");
    sibling_div.setAttribute("id", `panelsStayOpen-collapse${i}`);
    sibling_div.setAttribute("class", `accordion-collapse collapse ${i}`);
    sibling_div.setAttribute(
        "aria-labelledby",
        `panelsStayOpen-heading${i}`
    );
    document.getElementById(`${i}`).appendChild(sibling_div);
    let accordion_body_div = document.createElement("div");
    accordion_body_div.setAttribute("class", `accordion-body ${i}`);
    accordion_body_div.setAttribute("id", `accordion-body__${i}`);
    document
        .getElementById(`panelsStayOpen-collapse${i}`)
        .appendChild(accordion_body_div);
    let accordion_body_text = document.createElement("strong");
    accordion_body_text.innerHTML = `Answer ${i + 1}`;
    document
        .getElementById(`accordion-body__${i}`)
        .appendChild(accordion_body_text);
}

let name = "Daniyal";
let sentence = `Hello ${name}, would you like to learn some Python today?`;
document.getElementById(`accordion-body__0`).innerHTML = sentence;

function initCap(value) {
    return value
        .toLowerCase()
        .replace(/(?:^|[^a-zØ-öø-ÿ])[a-zØ-öø-ÿ]/g, function (m) {
            return m.toUpperCase();
        });
}

let list_element = document.createElement("ul");
list_element.setAttribute("id", `list_values`);
document.getElementById(`accordion-body__1`).appendChild(list_element);
arr = [name.toUpperCase(), name.toLowerCase(), initCap(name)];
for (let i = 0; i < arr.length; i++) {
    let ul_element = document.createElement("li");
    ul_element.setAttribute("id", `${i}`);
    ul_element.innerHTML = arr[i];
    document.getElementById(`list_values`).appendChild(ul_element);
}

sentence = `${name} once said, “A person who never made a mistake never tried anything new.”`;
document.getElementById(`accordion-body__2`).innerHTML = sentence;

let famous_person = "Newton";
sentence = `${famous_person} once said, “A person who never made a mistake never tried anything new.”`;
document.getElementById(`accordion-body__3`).innerHTML = sentence;

let stripping = `\t\t\t\t\t\t\t\t ${name} \t\t\t\t\t\t\t\t\t\n\n`;
document.getElementById(`accordion-body__4`).innerHTML = stripping;
stripping = stripping.trim();
document.getElementById(`accordion-body__4`).innerHTML = stripping;

console.log(5 + 3);
console.log(16 / 2);
console.log(4 * 2);
console.log(12 - 4);

function getValue() {
    let div_input = document.createElement("div");
    div_input.setAttribute("id", `1`);
    div_input.innerHTML = `Your favorite number is ${document.getElementById("input_val").value
        }`;
    document.getElementById(`accordion-body__5`).appendChild(div_input);
}
let input = document.createElement("input");
input.setAttribute("id", `input_val`);
let subbtn = document.createElement("button");
subbtn.setAttribute("onClick", `getValue()`);
subbtn.setAttribute("type", `submit`);
subbtn.innerHTML = "Submit";
document.getElementById(`accordion-body__5`).appendChild(input);
document.getElementById(`accordion-body__5`).appendChild(subbtn);

let friends_ul = document.createElement("ul");
friends_ul.setAttribute("id", `list_values_friends`);
document.getElementById(`accordion-body__6`).appendChild(friends_ul);
friends = ["Arshad", "Ibrahim", "Ismail"];
for (let i = 0; i < arr.length; i++) {
    let ul_element = document.createElement("li");
    ul_element.setAttribute("id", `${i}`);
    ul_element.innerHTML = "Hello " + friends[i];
    document.getElementById(`list_values_friends`).appendChild(ul_element);
}
let transportation_ul = document.createElement("ul");
transportation_ul.setAttribute("id", `list_values_transportation`);
document
    .getElementById(`accordion-body__7`)
    .appendChild(transportation_ul);
transportation = ["Honda motorcycle", "Tesla", "Bus", "Kawasaki Ninja"];
for (let x of transportation) {
    // console.log(x);
    let ul_element = document.createElement("li");
    ul_element.setAttribute("id", `${x}`);
    ul_element.innerHTML = "I would like to own a  " + x;
    document
        .getElementById(`list_values_transportation`)
        .appendChild(ul_element);
}
let guest_ul = document.createElement("ul");
guest_ul.setAttribute("id", `list_values_guest`);
document.getElementById(`accordion-body__8`).appendChild(guest_ul);
let guest_list = ["Ahmed", "Noman", "Arshad"];
for (let x of guest_list) {
    // console.log(x);
    let ul_element = document.createElement("li");
    ul_element.setAttribute("id", `${x}`);
    ul_element.innerHTML = "I am inviting  " + x;
    document.getElementById(`list_values_guest`).appendChild(ul_element);
}
guest_list.push("Fahad");
let new_guest_ul = document.createElement("ul");
new_guest_ul.setAttribute("id", `list_values_new_guest`);
document.getElementById(`accordion-body__9`).appendChild(new_guest_ul);
for (let x of guest_list) {
    // console.log(x);
    let ul_element = document.createElement("li");
    ul_element.setAttribute("id", `${x}`);
    if (x == "Ahmed") {
        ul_element.innerHTML = x + " is not coming";
    } else {
        ul_element.innerHTML = "I am inviting  " + x;
    }

    document
        .getElementById(`list_values_new_guest`)
        .appendChild(ul_element);
}
guest_list.splice(2, 0, "Irfan", "Ismail", "Atta", "Abidi", "Fakhir");
let more_guest_ul = document.createElement("ul");
more_guest_ul.setAttribute("id", `list_values_more_guest`);
document.getElementById(`accordion-body__10`).appendChild(more_guest_ul);
for (let x of guest_list) {
    console.log(x);
    let ul_element = document.createElement("li");
    ul_element.setAttribute("id", `${x}`);
    if (x == "Ahmed") {
        ul_element.innerHTML = x + " is not coming";
    } else {
        ul_element.innerHTML = "I am inviting  " + x;
    }
    document
        .getElementById(`list_values_more_guest`)
        .appendChild(ul_element);
}
let more_guest_ul_ = document.createElement("ul");
more_guest_ul_.setAttribute("id", `list_values_more_guest_`);
document.getElementById(`accordion-body__11`).appendChild(more_guest_ul_);
for (let x of guest_list) {
    console.log(x);
    let ul_element = document.createElement("li");
    ul_element.setAttribute("id", `${x}`);
    ul_element.innerHTML = "I am inviting  " + x;
    document
        .getElementById(`list_values_more_guest_`)
        .appendChild(ul_element);
}
let final_message = document.createElement("p");
final_message.innerHTML = "I found a bigger dinner table";
document.getElementById("accordion-body__11").appendChild(final_message);
guest_list.splice(0, 0, "Ali");
document.getElementById("accordion-body__12").innerHTML =
    "I can invite only two people for dinner";
let more_guest_ul_li = document.createElement("ul");
more_guest_ul_li.setAttribute("id", `list_values_more_guest_li`);
document
    .getElementById(`accordion-body__12`)
    .appendChild(more_guest_ul_li);

for (let x of guest_list) {
    console.log(x);
    let ul_element = document.createElement("li");
    ul_element.setAttribute("id", `${x}`);
    ul_element.innerHTML = "I am inviting  " + x;
    document
        .getElementById(`list_values_more_guest_li`)
        .appendChild(ul_element);
}
guest_list.app;

do {
    let more_guest_ul_li = document.createElement("ul");
    more_guest_ul_li.setAttribute("id", `list_values_more_guest_li_`);
    document
        .getElementById(`accordion-body__13`)
        .appendChild(more_guest_ul_li);
    let pop = guest_list.pop();
    let ul_element = document.createElement("li");
    ul_element.setAttribute("id", `${pop}`);
    ul_element.innerHTML = pop + " sorry, I can't invite you.";
    document
        .getElementById(`list_values_more_guest_li_`)
        .appendChild(ul_element);
} while (guest_list.length != 2);
for (let x of guest_list) {
    console.log(x);
    let ul_element = document.createElement("li");
    ul_element.setAttribute("id", `${x}`);
    ul_element.innerHTML = "You're invited " + x;
    document
        .getElementById(`list_values_more_guest_li_`)
        .appendChild(ul_element);
}
do {
    let more_guest_ul_li = document.createElement("ul");
    more_guest_ul_li.setAttribute("id", `list_values_more_guest_li_em`);
    document
        .getElementById(`accordion-body__14`)
        .appendChild(more_guest_ul_li);
    let pop = guest_list.pop();
    let ul_element = document.createElement("li");
    ul_element.setAttribute("id", `${pop}`);
    ul_element.innerHTML = pop + " sorry, I can't invite you.";
    document
        .getElementById(`list_values_more_guest_li_em`)
        .appendChild(ul_element);
} while (guest_list.length != 0);

let places = ["Pakistan", "Turkey", "Japan", "America", "England"];
let places_ul = document.createElement("ul");
places_ul.setAttribute("id", `places`);
document.getElementById(`accordion-body__15`).appendChild(places_ul);
for (let x of places) {
    console.log(x);
    let ul_element = document.createElement("li");
    ul_element.setAttribute("id", `${x}`);
    ul_element.innerHTML = x;
    document.getElementById(`places`).appendChild(ul_element);
}

places_new = places.sort();
console.log(places_new);
places_ul = document.createElement("ul");
places_ul.setAttribute("id", `places_`);
document.getElementById(`accordion-body__16`).appendChild(places_ul);
for (let x of places_new) {
    console.log(x);
    let ul_element = document.createElement("li");
    ul_element.setAttribute("id", `${x}`);
    ul_element.innerHTML = x;
    document.getElementById(`places_`).appendChild(ul_element);
}

places_ul = document.createElement("ul");
places_ul.setAttribute("id", `places_org`);
document.getElementById(`accordion-body__17`).appendChild(places_ul);
for (let x of places) {
    console.log(x);
    let ul_element = document.createElement("li");
    ul_element.setAttribute("id", `${x}`);
    ul_element.innerHTML = x;
    document.getElementById(`places_org`).appendChild(ul_element);
}

places.reverse();
places_ul = document.createElement("ul");
places_ul.setAttribute("id", `places_rev`);
document.getElementById(`accordion-body__18`).appendChild(places_ul);
for (let x of places) {
    console.log(x);
    let ul_element = document.createElement("li");
    ul_element.setAttribute("id", `${x}`);
    ul_element.innerHTML = x;
    document.getElementById(`places_rev`).appendChild(ul_element);
}

//   document.getElementById(``).appendChild(places_ul);
let p_element = document.createElement("p");
// p_element.setAttribute("id", `${x}`);
p_element.innerHTML = guest_list.length + " are invited.";
document.getElementById(`accordion-body__19`).appendChild(p_element);

let countries = ["Pakistan", "Turkey", "Japan", "America", "England"];
let countries_ul = document.createElement("ul");
countries_ul.setAttribute("id", `countries`);
document.getElementById(`accordion-body__20`).appendChild(countries_ul);
for (let x of countries) {
    console.log(x);
    let ul_element = document.createElement("li");
    ul_element.setAttribute("id", `${x}`);
    ul_element.innerHTML = x;
    document.getElementById(`countries`).appendChild(ul_element);
}

countries_obj = {
    1: countries[0],
    2: countries[1],
    3: countries[2],
    4: countries[3],
};
let p_countries_element = document.createElement("p");

p_countries_element.innerHTML = typeof countries_obj;
document
    .getElementById(`accordion-body__21`)
    .appendChild(p_countries_element);

let p_countries_element_err = document.createElement("p");

p_countries_element_err.innerHTML = typeof countries_obj[6];
document
    .getElementById(`accordion-body__22`)
    .appendChild(p_countries_element_err);

function testing() {
    let div_input = document.createElement("div");
    div_input.setAttribute("id", `1`);
    div_input.innerHTML =
        Number.parseInt(document.getElementById("input_val_drive").value) >=
            18
            ? "You can drive"
            : "You can not drive.";
    document.getElementById(`accordion-body__23`).appendChild(div_input);
}
let input_drive = document.createElement("input");
input_drive.setAttribute("id", `input_val_drive`);
let subbtn_drv = document.createElement("button");
subbtn_drv.setAttribute("onClick", `testing()`);
subbtn_drv.setAttribute("type", `submit`);
subbtn_drv.innerHTML = "Test whether you can drive or not";
document.getElementById(`accordion-body__23`).appendChild(input_drive);
document.getElementById(`accordion-body__23`).appendChild(subbtn_drv);

function testing_alien() {
    let div_input = document.createElement("div");
    div_input.setAttribute("id", `1`);
    if (document.getElementById("alien").value.toLowerCase() == "green") {
        div_input.innerHTML = "You have earned 5 points";
        // earned 10 points
    } else if (
        document.getElementById("alien").value.toLowerCase() == "yellow"
    ) {
        div_input.innerHTML = "You have earned 10 points";
    } else if (
        document.getElementById("alien").value.toLowerCase() == "red"
    ) {
        div_input.innerHTML = "You have earned 15 points";
    }
    document.getElementById(`accordion-body__24`).appendChild(div_input);
}
let alien = document.createElement("input");
alien.setAttribute("id", `alien`);
let subbtn_alien = document.createElement("button");
subbtn_alien.setAttribute("onClick", `testing_alien()`);
subbtn_alien.setAttribute("type", `submit`);
subbtn_alien.innerHTML = "Test with color";
document.getElementById(`accordion-body__24`).appendChild(alien);
document.getElementById(`accordion-body__24`).appendChild(subbtn_alien);

function person_age() {
    let div_input = document.createElement("div");
    div_input.setAttribute("id", `1`);
    if (Number.parseInt(document.getElementById("personage").value) < 2) {
        div_input.innerHTML = "the person is a baby";
        // earned 10 points
    } else if (
        Number.parseInt(document.getElementById("personage").value) >= 2 &&
        Number.parseInt(document.getElementById("personage").value) < 4
    ) {
        div_input.innerHTML = "the person is a toddler";
    } else if (
        Number.parseInt(document.getElementById("personage").value) >= 4 &&
        Number.parseInt(document.getElementById("personage").value) < 13
    ) {
        div_input.innerHTML = "the person is a kid.";
    } else if (
        Number.parseInt(document.getElementById("personage").value) >= 13 &&
        Number.parseInt(document.getElementById("personage").value) < 20
    ) {
        div_input.innerHTML = "the person is a teenager.";
    } else if (
        Number.parseInt(document.getElementById("personage").value) >= 20 &&
        Number.parseInt(document.getElementById("personage").value) < 65
    ) {
        div_input.innerHTML = "the person is an adult.";
    } else if (
        Number.parseInt(document.getElementById("personage").value) >= 65
    ) {
        div_input.innerHTML = "the person is an elder.";
    }
    document.getElementById(`accordion-body__25`).appendChild(div_input);
}
let personage = document.createElement("input");
personage.setAttribute("id", `personage`);
let subbtn_personage = document.createElement("button");
subbtn_personage.setAttribute("onClick", `person_age()`);
subbtn_personage.setAttribute("type", `submit`);
subbtn_personage.innerHTML = "Submit";
document.getElementById(`accordion-body__25`).appendChild(personage);
document
    .getElementById(`accordion-body__25`)
    .appendChild(subbtn_personage);

let favorite_fruits = ["Mango", "apple", "banana"];
console.log(favorite_fruits.includes("Orange"));

function check_fruits() {
    let div_input = document.createElement("div");
    div_input.setAttribute("id", `1`);
    if (favorite_fruits.includes(document.getElementById("fruits").value)) {
        div_input.innerHTML =
            "You really like " + document.getElementById("fruits").value;
        // earned 10 points
    } else {
        div_input.innerHTML = "Fruit is not available";
    }
    document.getElementById(`accordion-body__26`).appendChild(div_input);
}
let fruits = document.createElement("input");
fruits.setAttribute("id", `fruits`);
let subbtn_fruits = document.createElement("button");
subbtn_fruits.setAttribute("onClick", `check_fruits()`);
subbtn_fruits.setAttribute("type", `submit`);
subbtn_fruits.innerHTML = "Submit";
document.getElementById(`accordion-body__26`).appendChild(fruits);
document.getElementById(`accordion-body__26`).appendChild(subbtn_fruits);

let usernames = ["admin", "daniyal", "fahad", "Ismail"];

function usernames_check() {
    let div_input = document.createElement("div");
    div_input.setAttribute("id", `1`);
    if (
        document.getElementById("username").value.toLowerCase() == "admin"
    ) {
        div_input.innerHTML =
            "Hello Admin, would you like to see a status report?";
        // earned 10 points
    } else if (usernames.length == 0) {
        div_input.innerHTML = "We need to find some users!";
    } else {
        div_input.innerHTML = `Hello ${initCap(
            document.getElementById("username").value
        )}, thank you for logging in again`;
    }
    document.getElementById(`accordion-body__27`).appendChild(div_input);
}
let username = document.createElement("input");
username.setAttribute("id", `username`);
let subbtn_username = document.createElement("button");
subbtn_username.setAttribute("onClick", `usernames_check()`);
subbtn_username.setAttribute("type", `submit`);
subbtn_username.innerHTML = "Submit";
document.getElementById(`accordion-body__27`).appendChild(username);
document
    .getElementById(`accordion-body__27`)
    .appendChild(subbtn_username);
//   usernames = [];
current_users = usernames;
new_users = ["daniyal", "ali", "ahmed"];

let div_user = document.createElement("div");
div_user.setAttribute("id", `username`);

document.getElementById(`accordion-body__28`).appendChild(div_user);
for (let x of current_users) {
    for (let y of new_users) {
        if (x.includes(y)) {
            div_user.innerHTML = `${y} username is available`;
        } else {
            div_user.innerHTML = `${y} username is not available`;
        }
    }
}

function case_sensative() {
    let div_input = document.createElement("div");
    div_input.setAttribute("id", `1`);
    if (
        document.getElementById("case_sens").value !=
        initCap(document.getElementById("case_sens").value)
    ) {
        div_input.innerHTML = `Name should be ${initCap(
            document.getElementById("case_sens").value
        )}`;
    } else {
        div_input.innerHTML = `Username ${document.getElementById("case_sens").value
            } is correct`;
    }
    // earned 10 points
    document.getElementById(`accordion-body__29`).appendChild(div_input);
}
let case_sens = document.createElement("input");
case_sens.setAttribute("id", `case_sens`);
let subbtn_case_sens = document.createElement("button");
subbtn_case_sens.setAttribute("onClick", `case_sensative()`);
subbtn_case_sens.setAttribute("type", `submit`);
subbtn_case_sens.innerHTML = "Submit";
document.getElementById(`accordion-body__29`).appendChild(case_sens);
document
    .getElementById(`accordion-body__29`)
    .appendChild(subbtn_case_sens);

let pizza_ul = document.createElement("ul");
pizza_ul.setAttribute("id", `pizza_ul`);
document.getElementById(`accordion-body__31`).appendChild(pizza_ul);
pizza = ["Cheese Pizza", "Veggie Pizza", "BBQ Chicken Pizza"];
for (let i = 0; i < pizza.length; i++) {
    let ul_element = document.createElement("li");
    ul_element.setAttribute("id", `${i}`);
    ul_element.innerHTML = pizza[i];
    document.getElementById(`pizza_ul`).appendChild(ul_element);
}

let animals = ["frogs", "newts", "salamanders", "toads"];
let characteristic = [
    "They are cold-blooded.",
    "They absorb water and breathe through their thin skin.",
    "They have at least one special skin gland used for defense.",
    "Most follow the life cycle of egg-larva-adult.",
];
for (let x of animals) {
    for (let y of characteristic) {
        let p_ul = document.createElement("p");
        p_ul.setAttribute("id", `p_ul`);
        p_ul.innerHTML = x + ", " + y.toLowerCase();
        document.getElementById(`accordion-body__32`).appendChild(p_ul);
    }
}

function shirt_size_(
    size = document.getElementById("shirt_size").value,
    message = document.getElementById("message_shirt").value
) {
    let div_input_size = document.createElement("p");
    div_input.setAttribute("id", `1`);
    let div_input_message = document.createElement("p");
    div_input.setAttribute("id", `2`);
    if (size != "" && message == "") {
        div_input_size.innerHTML = `Size of shirt is ${size}`;
        document
            .getElementById(`accordion-body__33`)
            .appendChild(div_input_size);
        div_input_message.innerHTML = `Message on shirt is not given.`;
        document
            .getElementById(`accordion-body__33`)
            .appendChild(div_input_message);
    } else if (size == "" && message != "") {
        div_input_size.innerHTML = `Size of the shirt is not given `;
        document
            .getElementById(`accordion-body__33`)
            .appendChild(div_input_size);
        div_input_message.innerHTML = `Message is ${message}.`;
        document
            .getElementById(`accordion-body__33`)
            .appendChild(div_input_message);
    } else {
        div_input_size.innerHTML = `Size of shirt is ${size}`;
        document
            .getElementById(`accordion-body__33`)
            .appendChild(div_input_size);
        div_input_message.innerHTML = `Message is ${message}.`;
        document
            .getElementById(`accordion-body__33`)
            .appendChild(div_input_message);
    }
    // earned 10 points
    // document.getElementById(`accordion-body__29`).appendChild(div_input);
}
let shirt_label = document.createElement("label");
shirt_label.innerHTML = "Shirt Size";
let shirt_size = document.createElement("input");
let message_label = document.createElement("label");
message_label.innerHTML = "Message on Shirt";
let message_shirt = document.createElement("input");
shirt_size.setAttribute("id", `shirt_size`);
message_shirt.setAttribute("id", `message_shirt`);
let subbtn_shirt_label = document.createElement("button");
subbtn_shirt_label.setAttribute("onClick", `shirt_size_(2,2)`);
subbtn_shirt_label.setAttribute("type", `submit`);
subbtn_shirt_label.innerHTML = "Submit";
document
    .getElementById(`accordion-body__33`)
    .appendChild(subbtn_shirt_label);
document.getElementById(`accordion-body__33`).appendChild(shirt_label);
document.getElementById(`accordion-body__33`).appendChild(shirt_size);
document.getElementById(`accordion-body__33`).appendChild(message_label);
document.getElementById(`accordion-body__33`).appendChild(message_shirt);

function describe_city(city) {
    let div_input_size = document.createElement("p");
    div_input.setAttribute("id", `1`);
    cities = ["Karachi", "Lahore", "Heydrabad", "Islamabad", "Multan"];
    if (cities.includes(city)) {
        div_input.innerHTML = city + " is in Pakistan.";
        document
            .getElementById(`accordion-body__35`)
            .appendChild(div_input_size);
    } else {
        div_input.innerHTML = city + " is not in Pakistan.";
        document
            .getElementById(`accordion-body__35`)
            .appendChild(div_input_size);
    }
}
let cit = document.createElement("input");
cit.setAttribute("id", `cit`);

document.getElementById(`accordion-body__35`).appendChild(cit);
let subbtn_cit = document.createElement("button");
subbtn_cit.setAttribute(
    "onClick",
    `describe_city(${document.getElementById("cit").value})`
);
subbtn_cit.setAttribute("type", `submit`);
subbtn_cit.innerHTML = "Submit";
document.getElementById(`accordion-body__35`).appendChild(subbtn_cit);

function show_magicians() {
    magician = [
        "JAY MARSHALL",
        "MAX MAVEN",
        "MASKED MAGICIAN",
        "CAMPBELL McRAE",
    ];
    for (let x of magician) {
        let div_input_size = document.createElement("p");
        div_input.setAttribute("id", `1`);

        div_input.innerHTML = x;
        document.getElementById(`accordion-body__38`).appendChild(div_input);
    }
}
let subbtn_show_magicians = document.createElement("button");
subbtn_show_magicians.setAttribute("onClick", `show_magicians()`);
subbtn_show_magicians.setAttribute("type", `submit`);
subbtn_show_magicians.innerHTML = "show_magicians";
document
    .getElementById(`accordion-body__38`)
    .appendChild(subbtn_show_magicians);

function city_country(city, country) {
    var message = city + ", " + country;
    return message;
}
city = ["Karachi", "Toronto", "Beijing"];
country = ["Pakistan", "Canada", "China"];
for (let x = 0; x <= 2; x++) {
    let div_input = document.createElement("p");
    div_input.setAttribute("id", `${x}`);
    div_input.innerHTML = city_country(city[x], country[x]);
    document.getElementById(`accordion-body__36`).appendChild(div_input);
}

function make_album(partist, palbum) {
    var obj = { name: partist, title: palbum };
    return obj;
}
var album1 = make_album("Atif Aslam", "Aadat");
var album2 = make_album("Ali Zafar", "Jhoom");
var album3 = make_album("Linkin Park", "Meteora");
x = [album1, album2, album3];
for (let i in x) {
    let div_input = document.createElement("p");
    div_input.setAttribute("id", `${x[i]}`);
    div_input.innerHTML = x[i].name + " " + x[i].title;
    document.getElementById(`accordion-body__37`).appendChild(div_input);
}

function show_sandwich_items() {
    document.getElementById("q44-a").innerHTML +=
        "List of items in sandwich : <br />";
    for (i in arguments) {
        document.getElementById("q44-a").innerHTML += arguments[i] + "<br />";
    }
}
sandwich = ["Mayonnaise", "Onion", "Tomato", "Steak", "Lettuce"];
for (let x of sandwich) {
    let div_input = document.createElement("p");
    div_input.setAttribute("id", `${x}`);
    div_input.innerHTML = x;
    document.getElementById(`accordion-body__41`).appendChild(div_input);
}

function get_car(pmodel, pmanufacturer) {
    console.log(arguments);

    var ret_obj = {};

    for (i in arguments) {
        if (typeof arguments[i] != "object") {
            if (i == 0) {
                var obj_name = "Model";
            } else if (i == 1) {
                var obj_name = "Manufacturer";
            } else {
                var obj_name = "Others";
            }
            ret_obj[obj_name] = arguments[i];
        } else {
            for (var key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key)) {
                    ret_obj[key] = arguments[i][key];
                }
            }
        }
    }

    return ret_obj;
}

var car = get_car(2022, "Civic", { color: "red" }, { feature: "ABS" });
console.log(car);