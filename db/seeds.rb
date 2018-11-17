# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# =====================================================
#             SEEDS DEVELOPERS
# =====================================================

sites = ["Atlanta","Austin", "Boston","Chicago", "Dallas",
"Denver","Detroit","Los Angeles","Miami","New York City","Phoenix",
"San Diego","San Francisco","Seattle","Washington D.C."]

technologies = ["MEAN Stack", "MERN Stack", "NERDS Stack", "LAMP Stack", "Ruby on Rails", "PHP"]

  # CREATE TABLE developers (id SERIAL, name VARCHAR(255), age INT, state VARCHAR(50), ga_site VARCHAR(50), company VARCHAR(255), technology VARCHAR(255));


50.times do
  site = sites.sample
  technology = technologies.sample
  Developer.create({
    'name' =>  "#{Faker::Name.name}",
    'age' => Faker::Number.between(18, 50),
    'state' => "#{Faker::Address.state}",
    'ga_site' => site,
    'company' => "#{Faker::SiliconValley.company}",
    'technology' =>technology
  })
end

p "developers data seeded"
