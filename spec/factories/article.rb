FactoryGirl.define do
  factory :article do  |a|
    a.sequence(:name) { |i| "my article number #{i}" }
    a.text 'Its is my first article in this blog'
    association :user, :factory => :user
  end
end