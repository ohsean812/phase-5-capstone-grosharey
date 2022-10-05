puts "seeding..."

Comment.destroy_all
Grocery.destroy_all
User.destroy_all

Comment.reset_pk_sequence
Grocery.reset_pk_sequence
User.reset_pk_sequence

user1 = User.create!(username: "username1", password: "password", password_confirmation: "password")
user2 = User.create!(username: "username2", password: "password", password_confirmation: "password")
user3 = User.create!(username: "username3", password: "password", password_confirmation: "password")

# 8.times do
#     Grocery.create!(name: Faker::Food.dish, price: rand(10..20), quantity: Faker::Measurement.weight, store: "Costco", date: "Faker::Date.between(from: '2022-09-21', to: '2022-09-25')", owner: User.pluck(:username).sample)
# end

grocery1 = Grocery.create!(name: "Toothpaste",
                        price: 10,
                        quantity: "3 ea.",
                        store: "Giant",
                        date: "2022-09-23",
                        owner: User.pluck(:username).sample
                        )
    grocery1.image.attach(io: File.open(Rails.root.join('client/assets/toothpaste.jpeg')),
                        filename: 'toothpaste.jpeg')

grocery2 = Grocery.create!(name: "Ketchup",
                        price: 6,
                        quantity: "44oz * 2ea.",
                        store: "Sam's Club",
                        date: "2022-09-25",
                        owner: User.pluck(:username).sample
                        )
    grocery2.image.attach(io: File.open(Rails.root.join('client/assets/ketchup.webp')),
                        filename: 'ketchup.webp')

grocery3 = Grocery.create!(name: "External Hard Drive",
                        price: 50,
                        quantity: "2 TB",
                        store: "Costco",
                        date: "2022-09-27",
                        owner: User.pluck(:username).sample
                        )
    grocery3.image.attach(io: File.open(Rails.root.join('client/assets/harddrive.avif')),
                        filename: 'harddrive.avif')



20.times do
    Comment.create!(content: Faker::Company.bs, user_id: User.pluck(:id).sample, grocery_id: Grocery.pluck(:id).sample )
end

puts "done seeding!"
