            // Filter Cards

document.querySelector("#filter-marketing").addEventListener("change", filterMarketing);
document.querySelector("#filter-programming").addEventListener("change", filterProgramming);
document.querySelector("#filter-design").addEventListener("change", filterDesign);

function filterMarketing() {
    hideAllCards();

    if(document.querySelector("#filter-marketing").checked) {
      document.querySelector(".filter-card-marketing").classList.add('active')
        var marketingCards = document.querySelectorAll(".card-marketing");
        marketingCards.forEach(marketingCard => {
            marketingCard.style.display = "inline-block";
        });

        document.querySelector("#filter-design").checked = false;
        document.querySelector(".filter-card-design").classList.remove('active')
        document.querySelector("#filter-programming").checked = false;
        document.querySelector(".filter-card-programming").classList.remove('active')

    } else {
        showAllCards();
        document.querySelector(".filter-card-marketing").classList.remove('active')
    }
}

function filterProgramming() {
    hideAllCards();

    if(document.querySelector("#filter-programming").checked) {
      document.querySelector(".filter-card-programming").classList.add('active')
        var programmingCards = document.querySelectorAll(".card-programming");
        programmingCards.forEach(programmingCard => {
            programmingCard.style.display = "inline-block";
        });

        document.querySelector("#filter-design").checked = false;
        document.querySelector(".filter-card-design").classList.remove('active')
        document.querySelector("#filter-marketing").checked = false;
        document.querySelector(".filter-card-marketing").classList.remove('active')

    } else {
        showAllCards();
        document.querySelector(".filter-card-programming").classList.remove('active')
    }
}

function filterDesign() {
    hideAllCards();

    if(document.querySelector("#filter-design").checked) {
      document.querySelector(".filter-card-design").classList.add('active')
        var designCards = document.querySelectorAll(".card-design");
        designCards.forEach(designCard => {
            designCard.style.display = "inline-block";
        });

        document.querySelector("#filter-programming").checked = false;
        document.querySelector(".filter-card-programming").classList.remove('active')
        document.querySelector("#filter-marketing").checked = false;
        document.querySelector(".filter-card-marketing").classList.remove('active')

    } else {
        showAllCards();
        document.querySelector(".filter-card-design").classList.remove('active')
    }
}


function hideAllCards() {
  var allCards = document.querySelectorAll(".cards");  

  allCards.forEach(card => {
      card.style.display = "none";
  });
}


function showAllCards() {
    var allCards = document.querySelectorAll(".cards");  

    allCards.forEach(card => {
        card.style.display = "inline-block";
    });
}

    //Load more Button

  let loadButton = document.querySelectorAll('.loadButton');
  let loadMore = document.querySelector('.loadMore-button')
  let currentimg = 6; 
  loadMore.addEventListener('click', function(){
    for(let i = currentimg; i < currentimg + 6; i++) {
        if(loadButton[i]){
          loadButton[i].style.display = 'block';
        }
    }
    currentimg += 6;
      if (currentimg >= loadButton.length) {
        event.target.style.display = "none";
      }
  })

    //Validation Form 

    const form = document.getElementById("form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const company = document.getElementById("company");
    const phone = document.getElementById("phone");
    const inputtip = document.getElementById("inputtip");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      validateInputs();
    });

      const setError = (element, message) => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector(".error");

      errorDisplay.innerText = message;
      inputControl.classList.add("error");
      inputControl.classList.remove("success");
    };

    const setSuccess = (element) => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector(".error");

      errorDisplay.innerText = "";
      inputControl.classList.add("success");
      inputControl.classList.remove("error");
    };


    function isEmail(email) {
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }


     const validateInputs = () => {
      const usernameValue = username.value.trim();
      const emailValue = email.value.trim();
      const companyValue = company.value.trim();
      const phoneValue = phone.value.trim();

      if (usernameValue === "") {
        setError(username, "Ве молиме наведете го вашето име и презиме");
      } else {
        setSuccess(username);
      }

      if (emailValue === "") {
        setError(email, "Ве молиме наведете ја вашата емаил адреса");
      } else if (!isEmail(emailValue)) {
        setError(email, "Вашата емаил адреса не е валидна");
      } else {
        setSuccess(email);
      }

      if (companyValue === "") {
        setError(company, "Ве молиме наведете го името на вашата компанија");
      } else {
        setSuccess(company);
      }

      if (phoneValue === "") {
        setError(phone, "Ве молиме наведете го вашиот телефонски број");
      } else if (phoneValue.length < 9) {
        setError(phone, "Телефонскиот број треба да има најмалце 9 броеви");
      } else {
        setSuccess(phone);
      }
    };
        let selectedNew = document.querySelector(".selected1");
        let optionsContainer = document.querySelector(".options-container");

        let optionsList = document.querySelectorAll(".option");

        selectedNew.addEventListener("click", () => {
            optionsContainer.classList.toggle("option-active");
        });

        optionsList.forEach(o => {
        o.addEventListener("click", () => {
            selectedNew.innerHTML = o.querySelector("label").innerHTML;
            optionsContainer.classList.remove("option-active");
        });
        });

        const studentType = document.getElementById('selected1')
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            checkInputs();
        })

        function checkInputs() {
            const studentTypeValue = studentType.innerText

            if (studentTypeValue === 'Изберете тип на студент') {
                const studentSmall = document.getElementById('student-type-message')
                studentType.className = 'selected1 error-student-type'
                studentSmall.innerText = 'Ве молиме изберете тип на студент'
                studentSmall.style.visibility = 'visible'
                studentSmall.style.color = '#e74c3c'

            } else {
                const studentSmall = document.getElementById('student-type-message')
                studentType.className = 'selected1 success-student-type'
                studentSmall.style.visibility = 'hidden'

            }
        }
        function setErrorFor(input, message){
            const formGroup = input.parentElement
            const small = formGroup.querySelector('small')
            small.innerText = message
            formGroup.className = 'form-group col-md-6 error'
        }
        function setSuccessFor(input){
            const formGroup = input.parentElement
            formGroup.className = 'form-group col-md-6 success'
        }
