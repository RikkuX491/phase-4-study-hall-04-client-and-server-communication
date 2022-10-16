class Movie < ApplicationRecord
    validates :title, presence: true
    validates :quote, presence: true
end
