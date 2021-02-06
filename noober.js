function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}

window.addEventListener('DOMContentLoaded', async function() {
  // YOUR CODE




  

  //Looping through all rides to complete sorting
  // for (let i = 0; i < allRides.length; i++) {
  //   let level = levelOfService(allRides[i])
  //   if (level == 'Noober Pool') {
  //     Pool.push(allRides[i])
  //   } else if (level == 'Noober Purple') {
  //     Purple.push(allRides[i])
  //   } else if (level == 'Noober XL') {
  //     XL.push(allRides[i])
  //   } else if (level == 'Noober X') {
  //     X.push(allRides[i])
  //   }
  // }


  //Asigning an element for the HTML rendering space
  let render = document.querySelector('.rides')

  //Assigning eventlistener to buttons
  let AllButton = document.querySelector('#all-filter')
  AllButton.addEventListener('click', async function() {
    console.log("The All Rides button was clicked")

    let response = await fetch('https://kiei451.com/api/rides.json')
    let allRides = await response.json()

    render.innerHTML = ''
    renderRides(allRides)
  })

  let PoolButton = document.querySelector('#noober-pool-filter')
  PoolButton.addEventListener('click', async function() {
    console.log("The Noober Pool button was clicked")
    //Hittin the API
    response = await fetch('https://kiei451.com/api/rides.json')
    allRides = await response.json()
    let Pool = []
    //Sorting Rides in to new array
    for (let i = 0; i < allRides.length; i++) {
      let level = levelOfService(allRides[i])
      if (level == 'Noober Pool') {
        Pool.push(allRides[i])
      }
    }
    //Rendering HTML
    render.innerHTML = ''
    renderRides(Pool)
  })

  let PurpleButton = document.querySelector('#noober-purple-filter')
  PurpleButton.addEventListener('click', async function() {
    console.log("The purple button has been clicked, PURPLE PARTY TIME!!!!")
    //Hittin the API
    response = await fetch('https://kiei451.com/api/rides.json')
    allRides = await response.json()
    let Purple = []
    //Sorting Rides in to new array
    for (let i = 0; i < allRides.length; i++) {
      let level = levelOfService(allRides[i])
      if (level == 'Noober Purple') {
      Purple.push(allRides[i])
      }
    }
    //Rendering HTML
    render.innerHTML = ''
    renderRides(Purple)
  })

  let XLButton = document.querySelector('#noober-xl-filter')
  XLButton.addEventListener('click', async function() {
    console.log("The Noober XL button was clicked")
    //Hittin the API
    response = await fetch('https://kiei451.com/api/rides.json')
    allRides = await response.json()
    let XL = []
    //Sorting Rides in to new array
    for (let i = 0; i < allRides.length; i++) {
      let level = levelOfService(allRides[i])
      if (level == 'Noober XL') {
      XL.push(allRides[i])
      }
    }
    //Rendering HTML
    render.innerHTML = ''
    renderRides(XL)
  })

  let XButton = document.querySelector('#noober-x-filter')
  XButton.addEventListener('click', async function() {
    console.log("The Noober X button was clicked")
    //Hittin the API
    response = await fetch('https://kiei451.com/api/rides.json')
    allRides = await response.json()
    let X = []
    //Sorting Rides in to new array
    for (let i = 0; i < allRides.length; i++) {
      let level = levelOfService(allRides[i])
      if (level == 'Noober X') {
      X.push(allRides[i])
      }
    }
    //Rendering HTML
    render.innerHTML = ''
    renderRides(X)
  })
})

