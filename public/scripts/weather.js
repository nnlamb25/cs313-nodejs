function search()
{
    if (event.keyCode == 13)
    {
        $('#info_button').click();
    }
}

function getLocation()
{
    $("#weather_info").empty();
    $("#weather_info").append("Getting your location...<br>");
    if (navigator.geolocation) 
    {
        navigator.geolocation.getCurrentPosition(showPosition);
    } 
    else 
    { 
        $("#weather_info").empty();
        $("#weather_info").append("Search for a city or use your current location!");
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position)
{
    $("#weather_info").empty();
    $("#weather_info").append("Filling your request...<br>");
        
    if (position != '')
    {
        var url = "/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;
            
        window.location.replace(url);
    }
    else
    {
        var city = document.getElementById("search_bar").value;
        if (city.length < 2)
        {
            $("#weather_info").empty();
            $("#weather_info").append("Search for a city or use your current location!");
            alert("ERROR: Must enter a city name");
            return;
        }
        
        var url = "/weather?city=" + city;
        
        window.location.replace(url);
    }
}
    /*
    if (position == '')
    {
        position = document.getElementById("search_bar").value;
        if (position.length < 2)
        {
            alert("ERROR: Must enter a city name");
            return;
        }
        $.ajax(
        {
            beforeSend: function()
            { 
                $("#weather_info").empty();
                $("#weather_info").append("Filling your request...<br>");
            },
            type: 'GET',
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + position + "&appid=3411e21b6e00192d6705faf2bb0b65d1",
            success: function(result)
            {
                var fTemp = Number(result.main.temp) * (9/5) - 459.67;
                $("#weather_info").empty();
                $("#weather_info").append(position + ":<br>");
                $("#weather_info").append(result["weather"][0]["description"] + "<br>");
                $("#weather_info").append("Temp: " + String(Math.round(fTemp)) + " ℉<br>");
                $("#weather_info").append("Wind: " + result.wind.speed + " m/s<br>");
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) 
            { 
                $("#weather_info").empty();
                $("#weather_info").append("Search for a city or use your current location!");
                console.log("ERROR:");
                console.log("Request Status: " + XMLHttpRequest.status);
                console.log("Text Status: " + textStatus);
                console.log("Error Thrown: " + errorThrown);
                alert("ERROR: Invalid city name");
            }
        });
    }
    else
    {
        $.ajax(
        {
            beforeSend: function()
            { 
                $("#weather_info").empty();
                $("#weather_info").append("Filling your request...<br>");
            },
            type: 'GET',
            url: "http://api.openweathermap.org/data/2.5/weather?lat=" + 
               position.coords.latitude + "&lon=" + position.coords.longitude + 
               "&appid=3411e21b6e00192d6705faf2bb0b65d1",
            success: function(result)
            {
                var fTemp = Number(result.main.temp) * (9/5) - 459.67;
                $("#weather_info").empty();
                $("#weather_info").append("Your Location:<br>");
                $("#weather_info").append(result["weather"][0]["description"] + "<br>");
                $("#weather_info").append("Temp: " + String(Math.round(fTemp)) + " ℉<br>");
                $("#weather_info").append("Wind: " + result.wind.speed + " m/s<br>");
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) 
            { 
                $("#weather_info").empty();
                $("#weather_info").append("Search for a city or use your current location!");
                console.log("ERROR:");
                console.log("Request Status: " + XMLHttpRequest.status);
                console.log("Text Status: " + textStatus);
                console.log("Error Thrown: " + errorThrown);
                alert("ERROR: Cannot find your location");
            }
        });
    }
}*/