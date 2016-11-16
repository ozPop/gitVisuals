# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


githubuser = GithubUser.create(
          username: 'ozPop',
          github_id: 18332252,
          avatar_url: "https://avatars.githubusercontent.com/u/18332252?v=3",
          github_profile: "https://github.com/ozPop",
          public_repos: 395,
          public_gists: 5,
          followers: 1,
          following: 5,
          starred_url: "https://api.github.com/users/ozPop/starred",
          gists_url: "https://api.github.com/users/ozPop/gists",
          github_created_at: "2016-04-07 11:15:3"
)

githubuser2 = GithubUser.create(
          username: "Natalisp",
          github_id: 12477106,
          avatar_url: "https://avatars.githubusercontent.com/u/12477106?v=3",
          github_profile: "https://github.com/Natalisp",
          public_repos: 361,
          public_gists: 0,
          followers: 0,
          following: 0,
          starred_url: "https://api.github.com/users/Natalisp/starred",
          gists_url: "https://api.github.com/users/Natalisp/gists",
          github_created_at: "2015-3-23 11:15:3"
)
