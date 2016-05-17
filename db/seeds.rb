# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


benches = Bench.create([
  { lat: 37.775785, lng: -122.445979, description: "Papalote" },
  { lat: 37.772045, lng: -122.437015, description: "The Little Chihuahua" },
  { lat: 37.781899, lng: -122.410426, description: "Cancun" }
])
