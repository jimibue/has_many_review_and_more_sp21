class Language < ApplicationRecord
    has_many :questions, dependent: :destroy

    # class method ie you call on the class (in this case Language)
    def self.get_all_questions
        languages = Language.all
        all_questions = []
        languages.each do |lang|
            lang.questions.each do |q|
              all_questions.push(q)
            end
        end

        return all_questions
    end

    def self.get_lang_info
        languages = Language.all

        languages.map do |lang|
            lang.get_info
        end
    end

    # instance method called on a instance of the class
    def get_info
        "here is some info on#{self.name}: #{self.about}"
    end
end
