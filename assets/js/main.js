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

function displaya() {
    var diva = document.getElementById("orangeglow");
    if (diva.style.display === 'none') {
        diva.style.display = 'block';
    } else {
        diva.style.display = 'none';
    }
}

