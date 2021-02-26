# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Language.destroy_all
Question.destroy_all 
javascript = Language.create(name:'JavaScript', about:'Language #1')
ruby = Language.create(name:'Ruby', about:'Sweet Syntacic Sugar')
java = Language.create(name:'Java', about:'has nothing to do with javscript')



# this didn't work, but it also didn;t crahs my program
Question.create(text:'is java a typed language', answer:'yes',language_id: java.id )   
#same as above
java.questions.create(text:'is java a typed language', answer:'yes')     

# has many
javascript.questions.create(text:'What es6?', answer:'Updated js version released in 2016')    
ruby.questions.create(text:'what do a symbol start with', answer:': example=> :name')  

 