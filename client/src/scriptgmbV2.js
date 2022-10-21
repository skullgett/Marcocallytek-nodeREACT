var requestOptions = {
  method: "GET",
  redirect: "follow",
};
fetch("https://api.ipregistry.co/?key=ccu1zlzhgetyu5", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    localStorage.setItem(
      "calling_code",
      "+" + result.location.country.calling_code
    );
    localStorage.setItem("country", result.location.country.code);
    localStorage.setItem("country_name", result.location.country.name);
    var countryCode = document.getElementById("countryCode-1");
    var countryCode2 = document.getElementById("countryCode-2");
    countryCode.value = "+" + result.location.country.calling_code;
    countryCode2.value = "+" + result.location.country.calling_code;
    localStorage.setItem("lang", result.location.language.code);
  })
  .catch((error) => console.log("error", error));

$(document).ready(function () {
  $(".telephone_number").inputFilter(function (value) {
    return /^\d*$/.test(value); // Allow digits only, using a RegExp
  });
});

function goToForm() {
  document.getElementById("header-form").scrollIntoView({ behavior: "smooth" });
}
function loading(act, error = false) {
  $spinner = $("<div></div>", { class: "spinner-border mr-2", role: "status" })
    .append("<span></span>", { class: "sr-only" })
    .html(" ");
  if (act) {
    $("#submit-button-1, #submit-button-2")
      .html("")
      .append($spinner)
      .append($("<span></span>").html("Cargando..."));
    const span = document.createElement("span");
    span.innerHTML = "Espere un momento";
    const spinner = document.createElement("div");
    spinner.classList.add("spinner-border");
    spinner.classList.add("mr-2");
    spinner.setAttribute("role", "status");
    const div = document.createElement("div");
    div.classList.add("my-5");
    div.appendChild(spinner);
    div.appendChild(span);
    swal({
      content: div,
      // timer: 20000,
      allowOutsideClick: false,
      closeOnClickOutside: false,
      buttons: false,
    });
  } else {
    if (!error) {
      swal(
        "Enviado",
        "¡Exito! Nos comunicaremos contigo más tarde.",
        "success"
      );
    } else {
      swal("Ups!", error, "error");
    }
    $("#submit-button-1, #submit-button-2").html("Solicitar información");
  }
  $("#submit-button-1, #submit-button-2").prop("disabled", act);
}
function sendInfo(e) {
  e.preventDefault();
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  if (
    !e.target[0].value ||
    !e.target[1].value ||
    !e.target[2].value ||
    !e.target[4].value ||
    !validateEmail(e.target[2].value)
  )
    return;
  const data = {
    aff: 98249,
    idpass: "123qwe321",
    idnombre: e.target[0].value,
    idapellidos: e.target[1].value,
    idcorreo: e.target[2].value,
    idphone: e.target[4].value,
    phonecode: localStorage.getItem("calling_code"),
    country: localStorage.getItem("country"),
    country_name: localStorage.getItem("country_name"),
    lang: localStorage.getItem("lang"),
    source: window.location.href,
    active: "1",
    subAffiliate: "Insider Amazon YT-MX",
    keyConn: "MTMlJkZ4QnJhdm8=",
    progressiveAdd: "active",
  };

  loading(true);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(data);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };
  fetch(
    "https://dashboard.digitalrhino.net/api/rhinoSignUpnewVersion.php",
    requestOptions
  )
    .then((response) => response.json())
    .then((response) => {
      if (response.result) {
        loading(false);
        $(
          'input[type="text"]:not(#countryCode-1):not(#countryCode-2), input[type="email"]:not(#countryCode-1):not(#countryCode-2)'
        ).val("");
        $("form.needs-validation").removeClass("was-validated");
        gtag("event", "conversion", {
          send_to: "AW-591477176/6JDfCMTlr-MBELjzhJoC",
        });
      } else {
        e.target[4].value = "";
        e.target[4].focus();
        loading(false, response.message);
      }
    })
    .catch((error) => {
      loading(false, "Error, intente nuevamente más tarde");
      console.log("error", error);
    });
  return false;
}
