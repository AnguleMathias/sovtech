# sovtech

## Badges

[![Maintainability](https://api.codeclimate.com/v1/badges/66afabc0b2c84edd8d7f/maintainability)](https://codeclimate.com/github/AnguleMathias/sovtech/maintainability)

## Features

- Users can:
  1. Query all characters in the Star Wars
  2. Search a single star wars character by name
  

## Endpoints

* Query type that resolves all People
```
query People($pageNumber: String){
    People(page: $pageNumber){
      name
      height
      mass
      gender
      homeworld    
    }
}
```

* Query type that resolves (searches for) a particular Person (People) given their name
```
query Person($name: String) {
  Person(name: $name) {
    name
    height
    mass
    gender
    homeworld
  }
}
```

## Deployment

Api [host](#)

## Documentation

Api [documentation](https://swapi.dev/)

## Getting Started

- Clone the project into your local repository using this command:

            `git clone https://github.com/AnguleMathias/sovtech.git`

- Change directory to the cloned folder using the following command for Windows, Linux and MacOS

            `cd sovtech`

- Install the app dependencies.(for Windows, Linux and MacOS)

            `yarn install`

- Run the app(for Windows, Linux and MacOS)

            `yarn start`

:wink:
