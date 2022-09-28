puts "seeding..."

Comment.destroy_all
Grocery.destroy_all
User.destroy_all

Comment.reset_pk_sequence
Grocery.reset_pk_sequence
User.reset_pk_sequence

user1 = User.create(username: "username1", password: "password")
user2 = User.create(username: "username2", password: "password")
user3 = User.create(username: "username3", password: "password")

# 8.times do
#     Grocery.create(name: Faker::Food.dish, price: rand(10..20), quantity: Faker::Measurement.weight, store: "Costco", date: "Faker::Date.between(from: '2022-09-21', to: '2022-09-25')", owner: User.pluck(:username).sample)
# end

grocery1= Grocery.create(name: "Toothpaste",
                        price: 10,
                        quantity: "3 ea.",
                        store: "Costco",
                        date: "2022-09-21",
                        owner: User.pluck(:username).sample
                        )
    grocery1.image.attach(io: File.open(Rails.root.join('app/assets/cat.jpeg')),
                        filename: 'cat.jpeg')

grocery2= Grocery.create(name: "Ketchup",
                        price: 5,
                        quantity: "10 oz * 2 ea.",
                        store: "Sams Club",
                        date: "2022-09-22",
                        owner: User.pluck(:username).sample
                        )
    grocery2.image.attach(io: File.open(Rails.root.join('app/assets/dog.webp')),
                        filename: 'dog.webp')

grocery3= Grocery.create(name: "External Hard Drive",
                        price: 100,
                        quantity: "5 TB",
                        store: "Microcenter",
                        date: "2022-09-23",
                        owner: User.pluck(:username).sample
                        )
    grocery3.image.attach(io: File.open(Rails.root.join('app/assets/samplepic.png')),
                        filename: 'samplepic.png')



20.times do
    Comment.create(content: Faker::Company.bs, user_id: rand(1..3), grocery_id: rand(1..8))
end

puts "done seeding!"
