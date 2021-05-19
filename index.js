var TotalMinutes;
var Totalseconds;
var minutes_UnderTen = false;
var seconds_UnderTen = false;

function startTime()
{
  TotalMinutes = document.getElementById('minutesField').value
  Totalseconds = document.getElementById('secondsField').value

  if(TotalMinutes > 60 || Totalseconds > 60)
  {
    alert("ERROR! Please both numbers need to 60 or below")
  }
  else
  {
    setInterval(countdownTimer, 1000); 
  }
}


function countdownTimer()
{
  if (TotalMinutes > "00" && Totalseconds == "00")
  {
    Totalseconds = 59;
    TotalMinutes--;
  }

  else if (TotalMinutes == 00 && Totalseconds == 00) //this if statement validates end time and prevents it from displaying negative.
  {
      TotalMinutes = 0;
      Totalseconds = 0;
  }
  else
  {
    Totalseconds--;
  }

   if(TotalMinutes < "10" && Totalseconds < "10")
   {
      minutes.innerHTML = `0${TotalMinutes}`;
      seconds.innerHTML = `0${Totalseconds}`;
   }
   else if(TotalMinutes < "10")
   {
      minutes.innerHTML = `0${TotalMinutes}`;
      seconds.innerHTML = `${Totalseconds}`;
   }
   else if(Totalseconds < "10")
   {
      minutes.innerHTML = `${TotalMinutes}`;
      seconds.innerHTML = `0${Totalseconds}`;
   }
   else
   { 
    minutes.innerHTML = `${TotalMinutes}`;
    seconds.innerHTML = `${Totalseconds}`;
   }
}

function Close()
{
  var cvLightbox = document.getElementById("cv-lightbox");
  cvLightbox.style.display = "none";
}