const source = $("#wonders-template").html()
const template = Handlebars.compile(source)

const render = function(wonders){
    $("#wonders").empty()
    let newHtml = template({wonders})
    $("#wonders").append(newHtml)
}

const fetch = function(){
    $.get("/wonders", function(response){
        render(response)
    })
}

const addWonder = function(){
    let newWonder = $("#new-wonder-input").val()
    let newLocation = $("#new-location-input").val()
    
    let data = { name: newWonder, location: newLocation }
    $.post('/wonders', data, function (response) {
        console.log("POST complete")
        console.log(response)
        fetch()
    })
}

const updateVisited = function (wonder) {
    console.log(wonder)
    $.ajax({
        url: `wonders/${wonder}`,
        method: "PUT",
        success: function (response) {
            console.log("PUT complete")
            fetch()
        }
    })
}

const deleteWonder = function (wonder) {
    console.log(wonder)
    $.ajax({
        url: `/wonder/${wonder}`,
        method: "DELETE",
        success: function (response) {
            fetch()
         }
    })
}

$("#wonders").on("click", ".visit", function(){
    let wonder = $(this).closest(".wonder").find(".name").text()
    updateVisited(wonder)
})
$("#wonders").on("click", ".delete", function(){
    let wonder = $(this).closest(".wonder").find(".name").text()
    console.log(wonder);
    deleteWonder(wonder)
})

fetch()