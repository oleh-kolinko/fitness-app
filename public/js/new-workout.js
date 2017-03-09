

  $('#choose-exercise').hide();
  

  let day = 0;
  $('.add-exercise').click((e)=>{
    day = $(e.currentTarget).attr('data-day');
    console.log(day);
    $('#choose-exercise').fadeIn(500);
  });

  $('#choose-exercise #add').click((e)=>{
    const newExercise = $('#exercise-selector').val();
    const newSets = $('#sets').val();
    const newReps = $('#reps').val();
    console.log(newExercise);

    //VISIBLE
    const htmlBlueprient = `<div class='exercise-box'>
    <a href="/exercises/${newExercise}" target="_blank">${newExercise}</a>
    <span class='chip'> ${newSets}x${newReps} REPS</span>
    </div>`;
    $(htmlBlueprient).appendTo(`#tab${day}`);

    //NAME
    $('<input>').attr({
      hidden: 'true',
      value: newExercise,
      name: 'exercise',
    }).appendTo(`#tab${day}`);
    //DAY
    $('<input>').attr({
      hidden: 'true',
      value: day,
      name: 'day',
    }).appendTo(`#tab${day}`);
    //SETS
    $('<input>').attr({
      hidden: 'true',
      value: newSets+'x'+newReps,
      name: 'reps',
    }).appendTo(`#tab${day}`);

    $('#choose-exercise').hide();
  });
