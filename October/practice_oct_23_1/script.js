//Playlists Objects
const booPlaylists = [
  {
    name: "Boo 1",
    createdIn: "May 2020",
    vibes: "Liminal",
    identifier: 1,
    link: "https://open.spotify.com/playlist/6xsxOEuIWXD0DHuOHzKmcw?si=047767c610a04b13",
  },
  {
    name: "Boo 2",
    createdIn: "June 2020",
    vibes: "Deep Space",
    identifier: 2,
    link: "https://open.spotify.com/playlist/5OL2PmsI2YUoK3ddVVo8gQ?si=904d125edb07417d",
  },
  {
    name: "Boo 3",
    createdIn: "June 2020",
    vibes: "Palm Trees & Thoughts",
    identifier: 3,
    link: "https://open.spotify.com/playlist/5tYRXXvRFDWkT23Bo8wwt4?si=31e19176847e4e4b",
  },
  {
    name: "Boo 4",
    createdIn: "June 2020",
    vibes: "Energy",
    identifier: 4,
    link: "https://open.spotify.com/playlist/2ta6LqX2g6MesFTmSrKEMW?si=c38fc8db1f5242bf",
  },
  {
    name: "Boo 5",
    createdIn: "July 2020",
    vibes: "Indie Electricity",
    identifier: 5,
    link: "https://open.spotify.com/playlist/09T0m86iu9FphCyOhtAghT?si=4045da8816594e0b",
  },
  {
    name: "Boo 6",
    createdIn: "July 2020",
    vibes: "Palm Trees & Thoughts",
    identifier: 6,
    link: "https://open.spotify.com/playlist/1s7ZMry5uRZsdC0MzZyZi6?si=5f98c89203414dca",
  },
  {
    name: "Boo 7",
    createdIn: "July 2020",
    vibes: "Indie Electricity",
    identifier: 7,
    link: "https://open.spotify.com/playlist/32lXLFKT2uQQxj5UjxMxtp?si=945bb4f87f5c4750",
  },
  {
    name: "Boo 8",
    createdIn: "August 2020",
    vibes: "Energy",
    identifier: 8,
    link: "https://open.spotify.com/playlist/1efGBszfhSsTafp29xtMCi?si=47d62b36b9bc4777",
  },
  {
    name: "Boo 9",
    createdIn: "August 2020",
    vibes: "Liminal",
    identifier: 9,
    link: "https://open.spotify.com/playlist/7GWYDsW2rtcXpvRJozXfEs?si=845e9d34a7234674",
  },
  {
    name: "Boo 10",
    createdIn: "September 2020",
    vibes: "Liminal",
    identifier: 10,
    link: "https://open.spotify.com/playlist/4pbL7QJJguJtN1yD6EHSzZ?si=e1aaf06998414e03",
  },
  {
    name: "Boo 11",
    createdIn: "September 2020",
    vibes: "Energy",
    identifier: 11,
    link: "https://open.spotify.com/playlist/6eOqQuk8hokcFn5vSMg9Pi?si=efd18cae03f64320",
  },
  {
    name: "Boo 12",
    createdIn: "September 2020",
    vibes: "Indie Electricity",
    identifier: 12,
    link: "https://open.spotify.com/playlist/0vzw2yCmsreYH71FrKEuzm?si=1dbc84847b884fe1",
  },
  {
    name: "Boo 13",
    createdIn: "October 2020",
    vibes: "Indie Electricity",
    identifier: 13,
    link: "https://open.spotify.com/playlist/0Nljds7W4U0D43nvkFmQOM?si=b79ac54682614eea",
  },
  {
    name: "Boo 14",
    createdIn: "October 2020",
    vibes: "Reckoning",
    identifier: 14,
    link: "https://open.spotify.com/playlist/70tkmjpYhG8xqHnYp68VRx?si=cce5a8014488477c",
  },
  {
    name: "Boo 15",
    createdIn: "October 2020",
    vibes: "Indie Electricity",
    identifier: 15,
    link: "https://open.spotify.com/playlist/44NjOibdf2vloevF0oqPE0?si=57e1fabea3414adf",
  },
  {
    name: "Boo 16",
    createdIn: "November 2020",
    vibes: "Liminal",
    identifier: 16,
    link: "https://open.spotify.com/playlist/3UrTE5RupSNjQ9H6uuU5zY?si=b9e04c34b98a4029",
  },
  {
    name: "Boo 17",
    createdIn: "November 2020",
    vibes: "Indie Electricity",
    identifier: 17,
    link: "https://open.spotify.com/playlist/3LTkrbk8sv3I1MAunAtLF7?si=b8c22cbc63bc4b16",
  },
  {
    name: "Boo 18",
    createdIn: "November 2020",
    vibes: "Energy",
    identifier: 18,
    link: "https://open.spotify.com/playlist/3yF3uGLitYfcV1udSPEk58?si=e93bf6b77a404b42",
  },
  {
    name: "Boo 19",
    createdIn: "November 2020",
    vibes: "Liminal",
    identifier: 19,
    link: "https://open.spotify.com/playlist/5dLBZjavTWSIwKM5yFA0PS?si=b0816067a4314eab",
  },
  {
    name: "Boo 20",
    createdIn: "November 2020",
    vibes: "Energy",
    identifier: 20,
    link: "https://open.spotify.com/playlist/7eg6uIK9LvGS3fWzZ4Y7g0?si=0222904ab90347be",
  },
  {
    name: "Boo 21",
    createdIn: "November 2020",
    vibes: "Deep Space",
    identifier: 21,
    link: "https://open.spotify.com/playlist/0oPbP671dwiednkqox6ifC?si=24a7db6219d345f3",
  },
  {
    name: "Boo 22",
    createdIn: "December 2020",
    vibes: "Indie Electricity",
    identifier: 22,
    link: "https://open.spotify.com/playlist/6AMZLD1GHRbe7SLLL6fzQb?si=f31b331978fd4d5c",
  },
  {
    name: "Boo 23",
    createdIn: "December 2020",
    vibes: "Energy",
    identifier: 23,
    link: "https://open.spotify.com/playlist/4tWH5V8dUojVeDERAD01PL?si=f1eb4a548e984fc0",
  },
  {
    name: "Boo 24",
    createdIn: "Decemeber 2020",
    vibes: "Liminal",
    identifier: 24,
    link: "https://open.spotify.com/playlist/56O4RNosLUelOwPjDDXa6D?si=bee8d889b7a844c5",
  },
  {
    name: "Boo 25",
    createdIn: "December 2020",
    vibes: "Indie Electricity",
    identifier: 25,
    link: "https://open.spotify.com/playlist/6SNc4HImHcUPiXAjBuhpek?si=2b26c7d87a784442",
  },
  {
    name: "Boo 26",
    createdIn: "Decemeber 2020",
    vibes: "Deep Space",
    identifier: 26,
    link: "https://open.spotify.com/playlist/7irWjv9TVrYijx6R8AKeBg?si=3e6cdf15a34e4c3c",
  },
  {
    name: "Boo 27",
    createdIn: "Decemeber 2020",
    vibes: "Liminal",
    identifier: 27,
    link: "https://open.spotify.com/playlist/3spwBCzqwSf8EPjYe5jOyQ?si=6c01a92bb13f40a5",
  },
  {
    name: "Boo 28",
    createdIn: "January 2021",
    vibes: "Chaos",
    identifier: 28,
    link: "https://open.spotify.com/playlist/1tK0LPm1g4KV5VTWBGpME3?si=69637ed9886f4206",
  },
  {
    name: "Boo 29",
    createdIn: "January 2020",
    vibes: "Purity",
    identifier: 29,
    link: "https://open.spotify.com/playlist/0T23KwuFXGwB8CgPtT5fnd?si=258437e20a9249e4",
  },
];


// Playlists Card Parts
const playlistName = document.getElementById("playlist-name")
const creationDate = document.getElementById("created-in")
const vibeOfPlaylist = document.getElementById("vibe")
const goTo = document.getElementById("go-to")
const goToButton = document.getElementById("go-to-button")

// The acutal functionality of  the website goes below here.
// This function will generate our playlist, and display it to the website.
function displayPlaylist() {
  // Step One: Generate a number.
  let playlistNumber = Math.floor(Math.random() * 29);
  function generateNumber() {
    console.log(playlistNumber);
    return playlistNumber;
  }

  generateNumber();

  // Step Two: Use the number to call up a playlist.
  function fetchPlaylist() {
    if (playlistNumber == 0) {
      console.log("No playlist found.");
    } else {
      console.log(booPlaylists[Number(playlistNumber)]);
    }
    chosenPlaylist = booPlaylists[Number(playlistNumber)];
    return chosenPlaylist
  }

  fetchPlaylist();
  // Step Three: Display the playlist's information to the card.
  function updateCard(){
    playlistName.innerHTML = String(chosenPlaylist.name)
    creationDate.innerHTML = String(chosenPlaylist.createdIn)
    vibeOfPlaylist.innerHTML = String(chosenPlaylist.vibes)
    goTo.setAttribute('href', String(chosenPlaylist.link))
  }

  updateCard()

  // Step Four: Change Go To Button
  function changeButton(){
    goTo.classList.replace("link", "link-ready")
    goToButton.classList.replace("large-button", "large-button-ready")
  }

  changeButton()
}

