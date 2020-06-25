User.destroy_all
Category.destroy_all
Opening.destroy_all
FilterSet.destroy_all
SavedSearch.destroy_all

tom = User.create!(email: 'tom@example.com', password: 'abc123')
sam = User.create!(email: 'sam@example.com', password: 'abc123')

devops = Category.create!(name: 'DevOps')
Opening.create!(title: 'Site Reliability Engineer', category: devops)

developers = Category.create!(name: 'Developers')
Opening.create!(title: 'Full Stack Developer', category: developers)

filter_set = FilterSet.create!(category: devops)
SavedSearch.create!(
  user: sam,
  filter_set: filter_set,
  name: 'DevOps Jobs for Sam',
  frequency: 'daily'
)

filter_set = FilterSet.create!(category: developers)
SavedSearch.create!(
  user: tom,
  filter_set: filter_set,
  name: 'Developer Jobs for Tom',
  frequency: 'weekly'
)
