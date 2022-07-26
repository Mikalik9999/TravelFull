document.getElementById("menu").onclick = function() {open()};
document.getElementById("close").onclick = function() {close()};
document.getElementById("nextRight").onclick = function() {right()};
document.getElementById("nextLeft").onclick = function() {left()};
document.getElementById("oneCountry").onclick = function() {one()};
document.getElementById("twoCountry").onclick = function() {two()};
document.getElementById("threeCountry").onclick = function() {three()};
document.getElementById("nextSpainFull").onclick = function() {one()};
document.getElementById("login").onclick = function() {sign()};
document.getElementById("registered").onclick = function() {login()};
document.getElementById("accountMobi").onclick = function() {sign()};
document.getElementById("twoCountry").classList.add('fullJapan');


document.onclick = function (e) {
    if ((e.target.className !== "buttonLogin") &&
        (document.getElementById("navigationMenu").classList.contains('show')) &&
        e.target.className !== "menuBurger") {
        close();
    }
}


function open() {
    document.getElementById("menu").style.display="none";
    document.getElementById("navigationMenu").classList.add("show");
}

function close() {
    document.getElementById("navigationMenu").classList.add("transformation");
    function close() {
        document.getElementById("navigationMenu").classList.remove("show");
        document.getElementById("menu").style.display="block";
        document.getElementById("navigationMenu").classList.remove("transformation")
    }
    setTimeout(close, 1000);
}

function right () {
    if (document.getElementById("spain").innerText === 'JAPAN')
    {
        document.getElementById("country").classList.add("showUsa");
        document.getElementById("spain").innerText= 'USA';
        document.getElementById("nextSpain").style.background = "rgba(242, 120, 92, 0.5)";
        document.getElementById("nextUsa").style.background = "#F2785C";
        document.getElementById("nextJapan").style.background = "rgba(242, 120, 92, 0.5)";
    } else if (document.getElementById("spain").innerText === 'SPAIN'){
    document.getElementById("country").classList.add("showJapan");
    document.getElementById("spain").innerText= 'JAPAN';
    document.getElementById("nextSpain").style.background = "#F2785C";
    document.getElementById("nextJapan").style.background = "rgba(242, 120, 92, 0.5)";
    }
}

function left () {
    if (document.getElementById("spain").innerText === 'JAPAN')
    {
        document.getElementById("country").classList.remove("showUsa");
        document.getElementById("country").classList.remove("showJapan");
        document.getElementById("spain").innerText= 'SPAIN';
        document.getElementById("nextSpain").style.background = "rgba(242, 120, 92, 0.5)";
        document.getElementById("nextJapan").style.background = "#F2785C";
        document.getElementById("nextUsa").style.background = "rgba(242, 120, 92, 0.5)";
    } else if (document.getElementById("spain").innerText === 'USA'){
    document.getElementById("country").classList.remove("showUsa");
    document.getElementById("country").classList.add("showJapan");
    document.getElementById("spain").innerText= 'JAPAN';
    document.getElementById("nextSpain").style.background = "#F2785C";
    document.getElementById("nextJapan").style.background = "rgba(242, 120, 92, 0.5)"
    document.getElementById("nextUsa").style.background = "rgba(242, 120, 92, 0.5)";
    }
}

function one () {
    if (document.getElementById("twoCountry").classList.contains('fullJapan')) {
        x()
    } else if (document.getElementById("twoCountry").classList.contains('fullSpain')){
        leftAnimation();
    } else {two()}
}

function two () {
    document.getElementById("twoCountry").style.backgroundImage = "url('image/japan.jpg')"
    document.getElementById("twoText").innerText = 'JAPAN';
    document.getElementById("threeCountry").style.backgroundImage = "url('image/usaAnimation.jpg')"
    document.getElementById("threeText").innerText = 'USA';
    document.getElementById("oneCountry").style.backgroundImage = "url('image/spainAnimation.jpg')"
    document.getElementById("oneText").innerText= 'SPAIN';
    document.getElementById("nextSpainFull").style.background = "rgba(242, 120, 92, 0.5)";
    document.getElementById("nextJapanFull").style.background = "#F2785C";
    document.getElementById("nextUsaFull").style.background = "rgba(242, 120, 92, 0.5)";
    document.getElementById("twoCountry").classList.add('fullJapan');
    document.getElementById("twoCountry").classList.remove('fullUsa');
    document.getElementById("twoCountry").classList.remove('fullSpain');
}

function three () {
    if (document.getElementById("twoCountry").classList.contains('fullJapan')) {
        leftAnimation();
    } else if (document.getElementById("twoCountry").classList.contains('fullUsa')){
        x();
    }
    else {two()}
}

function x () {
    document.getElementById("twoCountry").style.backgroundImage = "url('image/spainAnimation.jpg')"
    document.getElementById("twoText").innerText= 'SPAIN';
    document.getElementById("threeCountry").style.backgroundImage = "url('image/japan.jpg')"
    document.getElementById("threeText").innerText= 'JAPAN';
    document.getElementById("oneCountry").style.backgroundImage = "url('image/usaAnimation.jpg')"
    document.getElementById("oneText").innerText= 'USA';
    document.getElementById("nextSpainFull").style.background = "#F2785C";
    document.getElementById("nextJapanFull").style.background = "rgba(242, 120, 92, 0.5)";
    document.getElementById("nextUsaFull").style.background = "rgba(242, 120, 92, 0.5)";
    document.getElementById("twoCountry").classList.remove('fullJapan');
    document.getElementById("twoCountry").classList.remove('fullUsa');
    document.getElementById("twoCountry").classList.add('fullSpain');
}

function leftAnimation () {
    document.getElementById("twoCountry").style.backgroundImage = "url('image/usaAnimation.jpg')"
    document.getElementById("twoText").innerText= 'USA';
    document.getElementById("threeCountry").style.backgroundImage = "url('image/spainAnimation.jpg')"
    document.getElementById("threeText").innerText= 'SPAIN';
    document.getElementById("oneCountry").style.backgroundImage = "url('image/japan.jpg')"
    document.getElementById("oneText").innerText= 'JAPAN';
    document.getElementById("nextSpainFull").style.background = "rgba(242, 120, 92, 0.5)";
    document.getElementById("nextJapanFull").style.background = "rgba(242, 120, 92, 0.5)";
    document.getElementById("nextUsaFull").style.background = "#F2785C";
    document.getElementById("twoCountry").classList.remove('fullJapan');
    document.getElementById("twoCountry").classList.remove('fullSpain');
    document.getElementById("twoCountry").classList.add('fullUsa');
}

function sign () {
    document.getElementById("sign").style.display = 'flex';
    document.getElementById("sign").classList.add('showAnimation');
    document.getElementById("modal").style.display = 'flex';
    document.getElementById("navigationMenu").classList.remove('show')
    if (document.getElementById("menu").style.display === 'block') {
        document.getElementById("register").style.marginRight = '0';
        document.getElementById("register").style.width = '105%';
        document.getElementById("sign").style.width = '108%';
        document.getElementById("register").style.marginLeft = '0';
        document.getElementById("account").style.width = '72%';
        document.getElementById("input").style.marginRight = '16px';
        document.getElementById("input").style.marginLeft = '16px';
        document.getElementById("lineFooter").style.marginLeft = 'auto';
        document.getElementById("lineFooter").style.marginRight = 'auto';
        document.getElementById("input").style.marginLeft = '16px';
        document.getElementById("menu").style.paddingRight = '85%';
        document.getElementById("registered").style.paddingRight = '10px';
    }
}

function login () {
    if (document.getElementById("or").style.display !== "flex"){
        document.getElementById("h4").innerText= 'Log in to your account';
        document.getElementById("facebook").style.display = "flex";
        document.getElementById("google").style.display = "flex";
        document.getElementById("or").style.display = "flex";
        document.getElementById("forgot").style.display = "block";
        document.getElementById("in").innerText= 'Sign In';
        document.getElementById("account").innerText= 'Don’t have an account?';
        document.getElementById("account").style.width= '29%';
        document.getElementById("registered").innerText= 'Registered';
    } else {
        document.getElementById("h4").innerText= 'Create account';
        document.getElementById("facebook").style.display = "none";
        document.getElementById("google").style.display = "none";
        document.getElementById("or").style.display = "none";
        document.getElementById("forgot").style.display = "none";
        document.getElementById("in").innerText= 'Sign Up';
        document.getElementById("account").innerText= 'Already have an account?';
        document.getElementById("account").style.width= '34%';
        document.getElementById("registered").innerText= 'Log in';
    }
}

let email = document.getElementById("email");
let password = document.getElementById("userPassword");
document.getElementById("signIn").onclick = function () {
    alert("Ваша почта " + email.value + " Ваш пароль " + password.value);
    document.getElementById("sign").style.display = "none";
    document.getElementById("modal").style.display = "none";
}

document.getElementById('modal').onclick = function () {
    if (document.getElementById('sign').style.display === "flex") {
        document.getElementById("sign").classList.remove('showAnimation');
        if (window.innerWidth <= 391){
            document.getElementById("sign").classList.add("transformation");
        } else {
            document.getElementById("sign").classList.add("transformationFull");
        }
        function closed() {
            document.getElementById("sign").classList.remove("transformation");
            document.getElementById("sign").classList.remove("transformationFull");
            document.getElementById("sign").style.display = "none";
        }
        setTimeout(closed, 2000);
        document.getElementById('modal').style.display = "none";
        if (window.innerWidth <= 391){
            close()
        }
    }
}
