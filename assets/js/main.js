function confirm()
  {
    if (document.getElementById('userpassword').value ==
        document.getElementById('passconfirm').value)
        {
          document.getElementById('check').style.color = 'green';
          document.getElementById('check').innerHTML = '&#10004';
        }
        else
        {
          document.getElementById('check').style.color = 'red';
          document.getElementById('check').innerHTML = '&#10060';
        }
}

function toggle() {
    var toggle = document.getElementById("login-modal");
    if (toggle.style.display === 'none') {
        toggle.style.display = 'block';
    } else {
        toggle.style.display = 'none';
    }
}