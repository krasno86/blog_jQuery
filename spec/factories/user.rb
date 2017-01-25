FactoryGirl.define do
  factory :user do |u|
    u.sequence(:email) { |i| "user#{i}@example.org" }
    u.password 'password'
    u.password_confirmation { |user| user.password }
  end
end