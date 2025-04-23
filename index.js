require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "ishuagrawal",
    "id": 29902139,
    "node_id": "MDQ6VXNlcjI5OTAyMTM5",
    "avatar_url": "https://avatars.githubusercontent.com/u/29902139?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ishuagrawal",
    "html_url": "https://github.com/ishuagrawal",
    "followers_url": "https://api.github.com/users/ishuagrawal/followers",
    "following_url": "https://api.github.com/users/ishuagrawal/following{/other_user}",
    "gists_url": "https://api.github.com/users/ishuagrawal/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ishuagrawal/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ishuagrawal/subscriptions",
    "organizations_url": "https://api.github.com/users/ishuagrawal/orgs",
    "repos_url": "https://api.github.com/users/ishuagrawal/repos",
    "events_url": "https://api.github.com/users/ishuagrawal/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ishuagrawal/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Ishu Agrawal",
    "company": null,
    "blog": "",
    "location": "Sunnyvale, CA",
    "email": null,
    "hireable": null,
    "bio": "USC '24 - CS Major",
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2017-07-04T20:51:22Z",
    "updated_at": "2025-03-09T03:55:51Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Hello Twitter!')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login</h1>')
})

app.get('/github', (req, res) => {
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})