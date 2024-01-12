document.addEventListener("DOMContentLoaded", function () {
    // Initialize variables and functions
    let playing = true;
    let interval = timer(); 
  
    function timer() {
      return setInterval(function () {
        let counter = document.getElementById("counter");
        let count = parseInt(counter.innerText);
        counter.innerText = count + 1;
      }, 1000);
    }
  
    // Event listener for minus button
    document.getElementById("minus").addEventListener("click", function () {
      let counter = document.getElementById("counter");
      let count = parseInt(counter.innerText);
      counter.innerText = count - 1;
    });
  
    // Event listener for plus button
    document.getElementById("plus").addEventListener("click", function () {
      let counter = document.getElementById("counter");
      let count = parseInt(counter.innerText);
      counter.innerText = count + 1;
    });
  
    // Event listener for heart button
    document.getElementById("heart").addEventListener("click", function () {
      let counter = document.getElementById("counter");
      let count = parseInt(counter.innerText);
      let likesList = document.querySelector(".likes");
      let existingLike = Array.from(likesList.children).find(
        (li) => parseInt(li.dataset.num) === count
      );
  
      if (existingLike) {
        let likeCount = parseInt(existingLike.children[0].innerText);
        existingLike.innerHTML = `${count} has been liked <span>${
          likeCount + 1
        }</span> times`;
      } else {
        let newLike = document.createElement("li");
        newLike.setAttribute("data-num", count);
        newLike.innerHTML = `${count} has been liked <span>1</span> time`;
        likesList.appendChild(newLike);
      }
    });
  
    // Event listener for pause button
    document.getElementById("pause").addEventListener("click", function () {
      playing = !playing;
      if (playing) {
        interval = timer();
        this.innerText = "pause";
      } else {
        clearInterval(interval);
        this.innerText = "resume";
      }
  
      // Disable/enable all buttons except the pause button
      Array.from(document.getElementsByTagName("button")).forEach((button) => {
        if (button.id !== "pause") {
          button.disabled = !playing;
        }
      });
    });
  
    // Event listener for comment form submission
    document.getElementById("comment-form").addEventListener("submit", function (event) {
      event.preventDefault();
      let commentInput = document.getElementById("comment-input");
      let commentText = commentInput.value;
      commentInput.value = "";
  
      let commentsList = document.getElementById("list");
      let newComment = document.createElement("p");
      newComment.innerText = commentText;
      commentsList.appendChild(newComment);
    });
  });
  