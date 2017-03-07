

  $('#choose-exercise').hide();

  let day = 0;
  $('.add-exercise').click((e)=>{
    day = $(e.currentTarget).parent().attr('data-day');
    console.log(day);
    $('#choose-exercise').fadeIn(500);
  });

  $('#choose-exercise #add').click((e)=>{
    const newExercise = $('#exercise-selector').val();
    const newSets = $('#sets').val();
    console.log(newExercise);

    //VISIBLE
    const htmlBlueprient = `<div class='exercise-box'>${newExercise}</div>`;
    $(htmlBlueprient).appendTo(`.day-box[data-day=${day}]`);

    //NAME
    $('<input>').attr({
      hidden: 'true',
      value: newExercise,
      name: 'exercise',
    }).appendTo(`.day-box[data-day=${day}]`);
    //DAY
    $('<input>').attr({
      hidden: 'true',
      value: day,
      name: 'day',
    }).appendTo(`.day-box[data-day=${day}]`);
    //SETS
    $('<input>').attr({
      hidden: 'true',
      value: newSets,
      name: 'sets',
    }).appendTo(`.day-box[data-day=${day}]`);

    $('#choose-exercise').hide();
  });
