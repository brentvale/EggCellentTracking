# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#EGGS
# const initialState = {
#   "1": {
#     id: 1,
#     chicken_id: 1,
#     find_date: "date.now"
#   },
#   "2": {
#     id: 2,
#     chicken_id: 1,
#     find_date: "date.now"
#   },
# };

#CHICKENS
Chicken.create(chicken_name: "Polly",
                biography: "Polly was the first to lay",
                arrival_date: "circa summer 2016",
                departure_date: "n/a",
                breed: "(black) Sex Link",
                egg_description: "big brown eggs")
Chicken.create(chicken_name: "Bernadette",
                biography: "Bernadette ALWAYS gets the worm!",
                arrival_date: "Dec. 17, 2016",
                departure_date: "n/a",
                breed: "(red) Sex Link",
                egg_description: "big brown eggs")
Chicken.create(chicken_name: "PB(poopy butt)",
                biography: "We miss this little girl.  Such a sad thing to see such a beautiful bird in such pain.",
                arrival_date: "Dec. 17, 2016",
                departure_date: "March 2016: infection",
                breed: "(red) Sex Link",
                egg_description: "never laid eggs")
Chicken.create(chicken_name: "Pidgy",
                biography: "Pidgy is a lot of people's favorite.  She's part of the Midge and Pidge duo of easter eggers",
                arrival_date: "circa summer 2016",
                departure_date: "n/a",
                breed: "Easter Egger",
                egg_description: "darker brown eggs, possibly blue eggs as well") 
Chicken.create(chicken_name: "Midge-Eagle",
                biography: "Midge-Eagle! She a gorgeous easter egger that looks like a chicken-shaped golden eagle. The second half of the Midge and Pidge duo.",
                arrival_date: "Dec. 17, 2016",
                departure_date: "n/a",
                breed: "Easter Egger",
                egg_description: "only confirmed blue egg layer!")  
Chicken.create(chicken_name: "Hank",
                biography: "Hank was found on the road.  Hank is a she.",
                arrival_date: "circa summer 2016",
                departure_date: "n/a",
                breed: "Kelso Hen",
                egg_description: "unsure")      
Chicken.create(chicken_name: "Buffy",
                biography: "Buffy is beautiful!",
                arrival_date: "Dec. 17, 2016",
                departure_date: "n/a",
                breed: "Buff Orpington",
                egg_description: "unsure")
Chicken.create(chicken_name: "Ingrid",
                biography: "Sister of Gertrude. Crooked beak is as crooked beak does. Ingrid has a crooked beak (and unless she's standing next to her sister Brent can't tell them apart)",
                arrival_date: "Dec. 17, 2016",
                departure_date: "n/a",
                breed: "Barred Plymouth Rock",
                egg_description: "unsure")
Chicken.create(chicken_name: "Gertrude",
                biography: "Sister of Ingrid.",
                arrival_date: "Dec. 17, 2016",
                departure_date: "n/a",
                breed: "Barred Plymouth Rock",
                egg_description: "unsure")