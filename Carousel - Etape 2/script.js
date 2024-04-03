// Attends que le document soit chargé et prêt à être manipulé
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        // Permet de définir la largeur des éléments du carrousel en fonction de leur contenu
        autoWidth:true,
        // Permet de boucler en continu le carrousel
        loop:true,

        // Fonction appelée lorsque le carrousel est chargé
        onSliderLoad: function() {
            
            // Retire la classe "cS-hidden" de l'élément ayant l'id "autoWidth"
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
