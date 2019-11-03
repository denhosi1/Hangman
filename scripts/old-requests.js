// const getPuzzle = (callback) => {
//     //Making an HTTP request
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         if(e.target.readyState === 4 && e.target.status === 200){
//             const puzzleJSON = JSON.parse(e.target.responseText)
//             callback(undefined, puzzleJSON.puzzle)
//         }
//         else if(e.target.readyState === 4) {
//             callback('An error has taken place', undefined)
//         }
//     })

//     request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
//     request.send()
// }

// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     //Making an HTTP request
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         if(e.target.readyState === 4 && e.target.status === 200){
//             const puzzleJSON = JSON.parse(e.target.responseText)
//             resolve(puzzleJSON.puzzle)
//         }
//         else if(e.target.readyState === 4) {
//             reject('An error has taken place')
//         }
//     })

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
// })

const getPuzzle = async wordCount => {
  const response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to get puzzle");
  }
};

const getPuzzleOld = wordCount => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch puzzle");
      }
    })
    .then(data => {
      return data.puzzle;
    });
};

// const getCountryDetails = (countryCode, callback) => {
//     //Making an HTTP request
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         if(e.target.readyState === 4 && e.target.status === 200){
//             const countries = JSON.parse(e.target.responseText)
//             const myCountry = countries.find((country) => country.alpha2Code === countryCode.toUpperCase())
//             callback(undefined, myCountry.name)
//         }
//         else if(e.target.readyState === 4) {
//             callback('An error has occurred', undefined)
//         }
//     })

//     request.open('GET', 'http://restcountries.eu/rest/v2/all')
//     request.send()
// }

// const getCountryDetails = (countryCode, callback) => new Promise((resolve, reject) =>{
//     //Making an HTTP request
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         if(e.target.readyState === 4 && e.target.status === 200){
//             const countries = JSON.parse(e.target.responseText)
//             const myCountry = countries.find((country) => country.alpha2Code === countryCode.toUpperCase())
//             resolve(myCountry.name)
//         }
//         else if(e.target.readyState === 4) {
//             reject('An error has occurred')
//         }
//     })

//     request.open('GET', 'http://restcountries.eu/rest/v2/all')
//     request.send()
// })

const getCountryDetails = async countryCode => {
  const response = await fetch("http://restcountries.eu/rest/v2/all");
  if (response.status === 200) {
    const data = await response.json();
    return data.find(
      country => country.alpha2Code === countryCode.toUpperCase()
    );
  } else {
    throw new Error("Unable to fetch country details.");
  }
};

const getCountryDetailsOld = countryCode => {
  return fetch("http://restcountries.eu/rest/v2/all")
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch country details.");
      }
    })
    .then(data =>
      data.find(country => country.alpha2Code === countryCode.toUpperCase())
    );
};

const getLocationOld = () => {
  return fetch(
    "https://ipinfo.io/2407:7000:9d30:3400:51b7:a179:a24:4afa/json?token=4b0379da504c7a"
  ).then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Unable to get ip details");
    }
  });
};

const getLocation = async () => {
  const response = await fetch(
    "https://ipinfo.io/2407:7000:9d30:3400:51b7:a179:a24:4afa/json?token=4b0379da504c7a"
  );
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Unable to get ip details");
  }
};

const getCurrentCountry = async () => {
  const location = await getLocation();
  const country = await getCountryDetails(location.country);
  return country;
  //Could also do the following
  //return getCountryDetails(location.country)
};

// const getPuzzleSync = () => {
//     //Making an HTTP request
//     const request = new XMLHttpRequest()
//     request.open('GET', 'http://puzzle.mead.io/slow-puzzle?wordCount=3', false)
//     request.send()

//     if(request.readyState === 4 && request.status === 200){
//         const puzzleJSON = JSON.parse(request.responseText)
//         return puzzleJSON.puzzle
//     }
//     else if(request.readyState === 4) {
//         throw new Error('An error has taken place')
//     }
// }
