# mern comment-box
## 5/19/2018
### David Eliason

## What
* full-stack using Node.js, MongoDB (mLab), Express, React

## Modules
* express (server)
* body-parser (get body data from networked req)
* nodemon (restart server upon changes)
* morgan (logging)
* concurrently (spin up two scripts simultaneously in package.json)
* mongoose (build Schema/Model for easier use of MongoDB)
* babel-cli babel-preset-es2015 babel-preset-stage-0  (react)
* react-markdown (as it says)
* whatwg-fetch (use browser included fetch instead of another library)
* prop-types (check that input data is what we expect)
* eslint, babel-eslint (JS env rules)

## Adding eslint using airbnb rules (MacOS)

(
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "$PKG@latest"
)

## 

