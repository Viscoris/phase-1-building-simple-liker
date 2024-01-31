// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.querySelector("#modal")
  errorModal.classList.add("hidden")

  document.querySelectorAll(".like").forEach(like => {
    like.addEventListener("click", () => {
      mimicServerCall()
      .then(response => {
        const likeGlyph = like.querySelector(".like-glyph")

        if (likeGlyph.innerText === EMPTY_HEART) {
          likeGlyph.innerText = FULL_HEART
          like.classList.add("activated-heart")
        } else {
          likeGlyph.innerText = FULL_HEART
          like.classList.remove("activated-heart")
        }
      })
      .catch(error => {
        errorModal.classList.remove("hidden")
        document.querySelector("#modal-message").innerText = "Random server error. Try again."

        setTimeout(() => {
          errorModal.classList.add("hidden")
        }, 3000)
      })
    })
  })
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
