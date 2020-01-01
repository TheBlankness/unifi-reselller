const name = document.querySelector("#name");
const icNumber = document.querySelector("#ic");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const address1 = document.querySelector("#address1");
const address2 = document.querySelector("#address2");
const city = document.querySelector("#city");
const state = document.querySelector("#state");
const zip = document.querySelector("#zip");
const package = document.querySelector("#package");
const messages = document.querySelector("#messages");
const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", function() {
  console.log(name.value);
  if (
    name.value === "" ||
    icNumber.value === "" ||
    email.value === "" ||
    phone.value === "" ||
    address1.value === "" ||
    address2.value === "" ||
    city.value === "" ||
    state.value === "" ||
    city.value === "" ||
    package.value === ""
  ) {
    messages.textContent = "Please fill in the form";
    return;
  }

  fetch(
    "https://asia-east2-unifi-customer-handler.cloudfunctions.net/api/register/public/customer",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json"
        // "Content-Type": "application/x-www-form-urlencoded"
      },
      body: JSON.stringify({
        name: `${name.value}`,
        icNumber: `${icNumber.value}`,
        email: `${email.value}`,
        phone: `${phone.value}`,
        address1: `${address1.value}`,
        address2: `${address2.value}`,
        city: `${city.value}`,
        state: `${state.value}`,
        zip: `${zip.value}`,
        package: `${package.value}`
      })
    }
  )
    .then(function(res) {
      console.log(res);
    })
    .catch(function(err) {
      console.log(err);
    });
});

function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    tablinks[i].className = tablinks[i].className.replace(" btn-warning", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active btn-warning";
}

function ScrolllToBenefits() {
  $("html, body").animate(
    {
      scrollTop: $("#why").offset().top
    },
    1500
  );
}
function ScrolllToSteps() {
  $("html, body").animate(
    {
      scrollTop: $("#steps").offset().top
    },
    1500
  );
}
function ScrolllToPackages() {
  $("html, body").animate(
    {
      scrollTop: $("#packages").offset().top
    },
    1500
  );
}
function ScrolllToSubscribe() {
  var canSee = $("#mynavbar").is(":visible");
  if (canSee) {
    $("html, body").animate(
      {
        scrollTop: $("#buy").offset().top - 280
      },
      1500
    );
  } else {
    $("html, body").animate(
      {
        scrollTop: $("#buy").offset().top - 100
      },
      1500
    );
  }
}

function hantar() {
  alert("lol");
  var people = document.getElementById("people").value;
  var nationality = document.getElementById("nationality").value;

  alert(people + " " + nationality);
}
