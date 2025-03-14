import User from "../models/user.mjs";
import Ingredients  from "../models/ingredients.mjs";
import PokeBowl from "../models/pokebowl.mjs";
import Order from "../models/order.mjs";
import dayjs from "dayjs";

const test_user = new User("Joni","Kurnamu","jkurmaku25@polito.it","2025-03-07")
console.log(test_user);

let ingr_arr = ["Fish","Avocado","Ketchup"]

const test_ing = new Ingredients(ingr_arr)
console.log(test_ing);
 
const test_bowl = new PokeBowl("large","base",test_ing)
console.log(test_bowl);

const test_bow2 = new PokeBowl("medium","base",test_ing)

let bowl_container = []
bowl_container.push(test_bowl)
bowl_container.push(test_bow2)

const test_order1 = new Order(bowl_container,dayjs())
console.log(test_order1);
