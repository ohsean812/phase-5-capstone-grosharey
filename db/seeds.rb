puts "seeding..."

Comment.destroy_all
Grocery.destroy_all
User.destroy_all

# Comment.reset_pk_sequence
# Grocery.reset_pk_sequence
# User.reset_pk_sequence

user1 = User.create(username: "username1", password: "password")
user2 = User.create(username: "username2", password: "password")
user3 = User.create(username: "username3", password: "password")

8.times do
    Grocery.create(name: Faker::Food.dish, price: rand(10..20), quantity: Faker::Measurement.weight, store: "Costco", date: "Faker::Date.between(from: '2022-09-13', to: '2022-09-23')")
end

20.times do
    Comment.create(content: Faker::Company.bs, user_id: rand(1..3), grocery_id: rand(1..8))
end

puts "done seeding!"
