$(document).ready(function () {
    amenities = {}
    $('input:checkbox').change(
        function(){
            if ($(this).is(':checked')) {
                amenities[$(this).attr("data-id")] = $(this).attr("data-name")
                $("DIV.amenities h4").text("")
                $("DIV.amenities h4").append(Object.values(amenities))
            }
            else {
                delete amenities[$(this).attr("data-id")]
            }
        });
    
})