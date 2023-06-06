puts "seeding..."

Comment.destroy_all
Grocery.destroy_all
User.destroy_all

Comment.reset_pk_sequence
Grocery.reset_pk_sequence
User.reset_pk_sequence


puts "seeding users..."

user1 = User.create!(username: "seanoh812", password: "flatiron", password_confirmation: "flatiron")
user2 = User.create!(username: "ricardo627", password: "flatiron", password_confirmation: "flatiron")
user3 = User.create!(username: "gehrigb7", password: "flatiron", password_confirmation: "flatiron")
user4 = User.create!(username: "shreepandey", password: "flatiron", password_confirmation: "flatiron")
user5 = User.create!(username: "testuser", password: "Passw0rd!", password_confirmation: "Passw0rd!")


puts "seeding groceries..."

grocery1 = Grocery.create!(name: "Duracell AAA Batteries",
                        price: 5,
                        quantity: "10 count",
                        store: "Costco",
                        date: "2022-09-21",
                        owner: User.pluck(:username).sample
                        )
    grocery1.image.attach(io: File.open(Rails.root.join('client/assets/batteries.webp')),
                        filename: 'batteries.webp')

grocery2 = Grocery.create!(name: "Organic Raw Honey",
                        price: 7,
                        quantity: "24 oz. x 1",
                        store: "Costco",
                        date: "2022-10-01",
                        owner: User.pluck(:username).sample
                        )
    grocery2.image.attach(io: File.open(Rails.root.join('client/assets/honey.webp')),
                        filename: 'honey.webp')

grocery3 = Grocery.create!(name: "Tide Pods",
                        price: 13,
                        quantity: "50 count",
                        store: "Sam's Club",
                        date: "2022-09-27",
                        owner: User.pluck(:username).sample
                        )
    grocery3.image.attach(io: File.open(Rails.root.join('client/assets/tidepods.webp')),
                        filename: 'tidepods.webp')

grocery4 = Grocery.create!(name: "Bounty Paper Towels",
                        price: 12,
                        quantity: "6 ea.",
                        store: "Safeway",
                        date: "2022-09-23",
                        owner: User.pluck(:username).sample
                        )
    grocery4.image.attach(io: File.open(Rails.root.join('client/assets/papertowel.webp')),
                        filename: 'papertowel.webp')

grocery5 = Grocery.create!(name: "Prime Dry Aged Steak",
                        price: 290,
                        quantity: "5 lbs",
                        store: "Whole Foods",
                        date: "2022-10-05",
                        owner: User.pluck(:username).sample
                        )
    grocery5.image.attach(io: File.open(Rails.root.join('client/assets/steak.jpeg')),
                        filename: 'steak.jpeg')

grocery6 = Grocery.create!(name: "Butter Croissants",
                        price: 3,
                        quantity: "6 count",
                        store: "Costco",
                        date: "2022-10-04",
                        owner: User.pluck(:username).sample
                        )
    grocery6.image.attach(io: File.open(Rails.root.join('client/assets/croissants.jpeg')),
                        filename: 'croissants.jpeg')

grocery7 = Grocery.create!(name: "Red Bull Energy Drink",
                        price: 21,
                        quantity: "12 cans",
                        store: "BJ's",
                        date: "2022-09-29",
                        owner: User.pluck(:username).sample
                        )
    grocery7.image.attach(io: File.open(Rails.root.join('client/assets/redbull.webp')),
                        filename: 'redbull.webp')

grocery8 = Grocery.create!(name: "Heinz Tomato Ketchup",
                        price: 7,
                        quantity: "44 oz x 2",
                        store: "Costco",
                        date: "2022-09-30",
                        owner: User.pluck(:username).sample
                        )
    grocery8.image.attach(io: File.open(Rails.root.join('client/assets/ketchup.webp')),
                        filename: 'ketchup.webp')

grocery9 = Grocery.create!(name: "Kleenex Facial Tissue",
                        price: 10,
                        quantity: "5 boxes (230 per box)",
                        store: "BJ's",
                        date: "2022-09-24",
                        owner: User.pluck(:username).sample
                        )
    grocery9.image.attach(io: File.open(Rails.root.join('client/assets/kleenex.jpeg')),
                        filename: 'kleenex.jpeg')

grocery10 = Grocery.create!(name: "Dog Food (Salmon & Potato)",
                        price: 30,
                        quantity: "20 lbs",
                        store: "Costco",
                        date: "2022-09-28",
                        owner: User.pluck(:username).sample
                        )
    grocery10.image.attach(io: File.open(Rails.root.join('client/assets/dogfood.jpeg')),
                        filename: 'dogfood.jpeg')

grocery11 = Grocery.create!(name: "Colgate Toothpaste",
                        price: 11,
                        quantity: "6.4 oz x 2",
                        store: "Safeway",
                        date: "2022-09-26",
                        owner: User.pluck(:username).sample
                        )
    grocery11.image.attach(io: File.open(Rails.root.join('client/assets/toothepaste.webp')),
                        filename: 'toothepaste.webp')

grocery12 = Grocery.create!(name: "Cooking Oil (Vegetable)",
                        price: 9,
                        quantity: "3 qt x 1",
                        store: "Costco",
                        date: "2022-10-02",
                        owner: User.pluck(:username).sample
                        )
    grocery12.image.attach(io: File.open(Rails.root.join('client/assets/cookingoil.webp')),
                        filename: 'cookingoil.webp')

grocery13 = Grocery.create!(name: "Black Truffles (minced)",
                        price: 25,
                        quantity: "2.82 oz x 1",
                        store: "Wegmans",
                        date: "2022-10-03",
                        owner: User.pluck(:username).sample
                        )
    grocery13.image.attach(io: File.open(Rails.root.join('client/assets/blacktruffle.webp')),
                        filename: 'blacktruffle.webp')

grocery14 = Grocery.create!(name: "Kitchen Trash Bag",
                        price: 12,
                        quantity: "100 count (13 gallon per bag)",
                        store: "Costco",
                        date: "2022-09-20",
                        owner: User.pluck(:username).sample
                        )
    grocery14.image.attach(io: File.open(Rails.root.join('client/assets/trashbag.jpeg')),
                        filename: 'trashbag.jpeg')

grocery15 = Grocery.create!(name: "Chobani Greek Yogurt",
                        price: 10,
                        quantity: "5.3 oz x 10",
                        store: "Whole Foods",
                        date: "2022-10-04",
                        owner: User.pluck(:username).sample
                        )
    grocery15.image.attach(io: File.open(Rails.root.join('client/assets/chobani.webp')),
                        filename: 'chobani.webp')

grocery16 = Grocery.create!(name: "Chicken Breast",
                        price: 10,
                        quantity: "12.5 oz x 3",
                        store: "Costco",
                        date: "2022-10-01",
                        owner: User.pluck(:username).sample
                        )
    grocery16.image.attach(io: File.open(Rails.root.join('client/assets/chickenbreast.webp')),
                        filename: 'chickenbreast.webp')

grocery17 = Grocery.create!(name: "SP Sparkling Water",
                        price: 12,
                        quantity: "11.15 fl oz x 12",
                        store: "Sam's Club",
                        date: "2022-09-28",
                        owner: User.pluck(:username).sample
                        )
    grocery17.image.attach(io: File.open(Rails.root.join('client/assets/sparklingwater.webp')),
                        filename: 'sparklingwater.webp')

grocery18 = Grocery.create!(name: "String Cheese Sticks",
                        price: 6,
                        quantity: "20 count (1 oz each)",
                        store: "Giant",
                        date: "2022-10-02",
                        owner: User.pluck(:username).sample
                        )
    grocery18.image.attach(io: File.open(Rails.root.join('client/assets/stringcheese.jpeg')),
                        filename: 'stringcheese.jpeg')

grocery19 = Grocery.create!(name: "Famous Amos Cookies",
                        price: 9,
                        quantity: "2 oz x 20",
                        store: "BJ's",
                        date: "2022-10-03",
                        owner: User.pluck(:username).sample
                        )
    grocery19.image.attach(io: File.open(Rails.root.join('client/assets/cookies.jpeg')),
                        filename: 'cookies.jpeg')

grocery20 = Grocery.create!(name: "Strawberry Jam",
                        price: 4,
                        quantity: "64 oz x 1",
                        store: "Whole Foods",
                        date: "2022-10-04",
                        owner: User.pluck(:username).sample
                        )
    grocery20.image.attach(io: File.open(Rails.root.join('client/assets/strawberryjam.webp')),
                        filename: 'strawberryjam.webp')


puts "seeding comments..."

30.times do
    Comment.create!(content: Faker::Marketing.buzzwords, user_id: User.pluck(:id).sample, grocery_id: Grocery.pluck(:id).sample)
end


puts "done seeding!"
