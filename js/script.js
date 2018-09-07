$( function() {
  $( "#datepicker" ).datepicker( $.datepicker.regional[ "fr" ] );

  // Je définile foramat de la date
  var dateFormat = "mm/dd/yy",

  // Je défini les options pour la date de début, le nombre de mois à afficher,affichage des boutons, etc...
  debut = $( "#debut" ).datepicker({
    showButtonPanel: true,
    changeMonth: false,
    numberOfMonths: 2
  })
  .on( "change", function() {
    fin.datepicker( "option", "minDate", getDate( this ) );
  }),
  // Je défini les options pour la date de fin
  fin = $( "#fin" ).datepicker({
    showButtonPanel: true,
    changeMonth: false,
    numberOfMonths: 2
  })
  .on( "change", function() {
    debut.datepicker( "option", "maxDate", getDate( this ) );
  });
 
  // Fonction pour récupérer la date au format choisi
  function getDate( element ) {
    var date;

    // Je vérifie que la date est au format indiqué si c'est pas le cas renvoi une erreur.
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }
 
    return date;
  }
});