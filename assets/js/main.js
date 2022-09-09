/*HAMBURGER MENU*/
(() => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("overlay");
    let open = false;

    const change = () => {
        if (!open) {
            hamburger.classList.add("open");
            menu.classList.add("menu");
        } else {
            hamburger.classList.remove("open");
            menu.classList.remove("menu");
        }
        open = !open;
    };

    hamburger.addEventListener("click", change);
})();

/*CONFIRM PASSWORD*/
function confirm() {
    if (document.getElementById('userpassword').value ==
        document.getElementById('passconfirm').value) {
        document.getElementById('check').style.color = 'green';
        document.getElementById('check').innerHTML = '&#10004';
    }
    else {
        document.getElementById('check').style.color = 'red';
        document.getElementById('check').innerHTML = '&#10060';
    }
}

/*MODAL TOGGLE*/
function toggle() {
    var toggle = document.getElementById("login-modal");
    var close = document.getElementById("close");

    if (toggle.style.display === 'none') {
        toggle.style.display = 'block';
        close.innerHTML = 'Close';
    } else {
        toggle.style.display = 'none';
        close.innerHTML = 'Sign In';
    }
}

/*CARD MENU*/
function displaya() {
    var diva = document.getElementById("diva");
    var dive = document.getElementById("dive");
    var divi = document.getElementById("divi");
    var divo = document.getElementById("divo");
    var divu = document.getElementById("divu");

    if (diva.style.display === 'none') {
        diva.style.display = 'block';
        dive.style.display = 'none';
        divi.style.display = 'none';
        divo.style.display = 'none';
        divu.style.display = 'none';
    } else {
        diva.style.display = 'none';
        dive.style.display = 'none';
        divi.style.display = 'none';
        divo.style.display = 'none';
        divu.style.display = 'none';
    }
}

function displaye() {
    var diva = document.getElementById("diva");
    var dive = document.getElementById("dive");
    var divi = document.getElementById("divi");
    var divo = document.getElementById("divo");
    var divu = document.getElementById("divu");

    if (dive.style.display === 'none') {
        dive.style.display = 'block';
        diva.style.display = 'none';
        divi.style.display = 'none';
        divo.style.display = 'none';
        divu.style.display = 'none';
    } else {
        dive.style.display = 'none';
        diva.style.display = 'none';
        divi.style.display = 'none';
        divo.style.display = 'none';
        divu.style.display = 'none';
    }
}

function displayi() {
    var diva = document.getElementById("diva");
    var dive = document.getElementById("dive");
    var divi = document.getElementById("divi");
    var divo = document.getElementById("divo");
    var divu = document.getElementById("divu");

    if (divi.style.display === 'none') {
        divi.style.display = 'block';
        diva.style.display = 'none';
        dive.style.display = 'none';
        divo.style.display = 'none';
        divu.style.display = 'none';
    } else {
        divi.style.display = 'none';
        diva.style.display = 'none';
        dive.style.display = 'none';
        divo.style.display = 'none';
        divu.style.display = 'none';
    }
}

function displayo() {
    var diva = document.getElementById("diva");
    var dive = document.getElementById("dive");
    var divi = document.getElementById("divi");
    var divo = document.getElementById("divo");
    var divu = document.getElementById("divu");

    if (divo.style.display === 'none') {
        divo.style.display = 'block';
        diva.style.display = 'none';
        dive.style.display = 'none';
        divi.style.display = 'none';
        divu.style.display = 'none';
    } else {
        divo.style.display = 'none';
        diva.style.display = 'none';
        dive.style.display = 'none';
        divi.style.display = 'none';
        divu.style.display = 'none';
    }
}

function displayu() {
    var diva = document.getElementById("diva");
    var dive = document.getElementById("dive");
    var divi = document.getElementById("divi");
    var divo = document.getElementById("divo");
    var divu = document.getElementById("divu");

    if (divu.style.display === 'none') {
        divu.style.display = 'block';
        diva.style.display = 'none';
        dive.style.display = 'none';
        divi.style.display = 'none';
        divo.style.display = 'none';
    } else {
        divu.style.display = 'none';
        diva.style.display = 'none';
        dive.style.display = 'none';
        divi.style.display = 'none';
        divo.style.display = 'none';
    }
}

/*CURRENCY FOR DONATION FORM*/
var price_field = document.querySelector('#amount');
price_field.addEventListener('keyup', function () {
    formatCurrency(this);
});
price_field.addEventListener('blur', function () {
    formatCurrency(this, "blur");
});
function formatNumber(n) {
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function formatCurrency(input, blur) {
    var input_val = input.value;
    if (input_val === "") { return; }
    var original_len = input_val.length;
    var caret_pos = input.selectionStart;
    if (input_val.indexOf(".") >= 0) {
        var decimal_pos = input_val.indexOf(".");
        var left_side = input_val.substring(0, decimal_pos);
        var right_side = input_val.substring(decimal_pos);
        left_side = formatNumber(left_side);
        right_side = formatNumber(right_side);
        if (blur === "blur") {
            right_side += "00";
        }
        right_side = right_side.substring(0, 2);
        input_val = "$" + left_side + "." + right_side;
    } else {
        input_val = formatNumber(input_val);
        input_val = "$" + input_val;
        if (blur === "blur") {
            input_val += ".00";
        }
    }
    input.value = input_val;
    var updated_len = input_val.length;
    caret_pos = updated_len - original_len + caret_pos;
}