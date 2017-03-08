const mongoose = require('mongoose');//get mongoose
mongoose.connect('mongodb://localhost/fitness-app');//connect to DB

const Exercise = require('../models/exercise');//get product model from /models/product.js
const Workout = require('../models/workout');//get product model from /models/product.js

const exercises = [
  {
    name: 'PUSHUPS',
    video: 'https://videocdn.bodybuilding.com/video/mp4/40000/40811m.mp4',
    img1: 'http://www.bodybuilding.com/exercises/exerciseImages/sequences/70/Male/l/70_1.jpg',
    img2: 'http://www.bodybuilding.com/exercises/exerciseImages/sequences/70/Male/l/70_1.jpg',
    bodyOnly: true,
    muscle: 'Chest',
    description:
    ` Lie on the floor face down and place your hands about 36 inches apart while holding your torso up at arms length.
     Next, lower yourself downward until your chest almost touches the floor as you inhale.
     Now breathe out and press your upper body back up to the starting position while squeezing your chest.
     After a brief pause at the top contracted position, you can begin to lower yourself downward again for as many repetitions as needed.
    `
  },
  {
    name: 'Handstand Push-Ups',
    video: 'https://videocdn.bodybuilding.com/video/mp4/62000/62702m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/227/Male/m/227_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/227/Male/m/227_2.jpg',
    bodyOnly: true,
    muscle: 'Shoulders',
    description:
    ` With your back to the wall bend at the waist and place both hands on the floor at shoulder width.
     Kick yourself up against the wall with your arms straight. Your body should be upside down with the arms and legs fully extended. Keep your whole body as straight as possible. Tip: If doing this for the first time, have a spotter help you. Also, make sure that you keep facing the wall with your head, rather than looking down.
     Slowly lower yourself to the ground as you inhale until your head almost touches the floor. Tip: It is of utmost importance that you come down slow in order to avoid head injury.
     Push yourself back up slowly as you exhale until your elbows are nearly locked.
     Repeat for the recommended amount of repetitions.`
  },
  {
    name: 'Spider Curl',
    video: 'https://videocdn.bodybuilding.com/video/mp4/40000/41371m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/178/Male/m/178_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/178/Male/m/178_2.jpg',
    bodyOnly: false,
    muscle: 'Biceps',
    description:
    ` Start out by setting the bar on the part of the preacher bench that you would normally sit on. Make sure to align the barbell properly so that it is balanced and will not fall off.\
     Move to the front side of the preacher bench (the part where the arms usually lay) and position yourself to lay at a 45 degree slant with your torso and stomach pressed against the front side of the preacher bench.
     Make sure that your feet (especially the toes) are well positioned on the floor and place your upper arms on top of the pad located on the inside part of the preacher bench.
     Use your arms to grab the barbell with a supinated grip (palms facing up) at about shoulder width apart or slightly closer from each other.
     Slowly begin to lift the barbell upwards and exhale. Hold the contracted position for a second as you squeeze the biceps.
     Slowly begin to bring the barbell back to the starting position as your breathe in. .
     Repeat for the recommended amount of repetitions.`
  },
  {
    name: 'Seated Calf Raise',
    video: 'https://videocdn.bodybuilding.com/video/mp4/40000/40201m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/152/Male/m/152_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/152/Male/m/152_2.jpg',
    bodyOnly: true,
    muscle: 'Calves',
    description:
    ` Sit on the machine and place your toes on the lower portion of the platform provided with the heels extending off. Choose the toe positioning of your choice (forward, in, or out) as per the beginning of this chapter.
     Place your lower thighs under the lever pad, which will need to be adjusted according to the height of your thighs. Now place your hands on top of the lever pad in order to prevent it from slipping forward.
     Lift the lever slightly by pushing your heels up and release the safety bar. This will be your starting position.
     Slowly lower your heels by bending at the ankles until the calves are fully stretched. Inhale as you perform this movement.
     Raise the heels by extending the ankles as high as possible as you contract the calves and breathe out. Hold the top contraction for a second.
     Repeat for the recommended amount of repetitions.`
  },
  {
    name: 'Rope Jumping',
    video: 'https://videocdn.bodybuilding.com/video/mp4/70000/71832m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/651/Male/m/651_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/651/Male/m/651_2.jpg',
    bodyOnly: true,
    muscle: 'Quadriceps',
    description:
    `Hold an end of the rope in each hand. Position the rope behind you on the ground. Raise your arms up and turn the rope over your head bringing it down in front of you. When it reaches the ground, jump over it. Find a good turning pace that can be maintained. Different speeds and techniques can be used to introduce variation.
     Rope jumping is exciting, challenges your coordination, and requires a lot of energy. A 150 lb person will burn about 350 calories jumping rope for 30 minutes, compared to over 450 calories running.`
  },
  {
    name: 'Dumbbell Shrug',
    video: 'https://videocdn.bodybuilding.com/video/mp4/38000/39141m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/96/Male/m/96_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/96/Male/m/96_2.jpg',
    bodyOnly: true,
    muscle: 'Traps',
    description:
    ` Stand erect with a dumbbell on each hand (palms facing your torso), arms extended on the sides.
     Lift the dumbbells by elevating the shoulders as high as possible while you exhale. Hold the contraction at the top for a second. Tip: The arms should remain extended at all times. Refrain from using the biceps to help lift the dumbbells. Only the shoulders should be moving up and down.
     Lower the dumbbells back to the original position.
     Repeat for the recommended amount of repetitions.`
  },
  {
    name: 'Dips',
    video: 'https://videocdn.bodybuilding.com/video/mp4/52000/53961m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/3153/Male/m/3153_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/3153/Male/m/3153_2.jpg',
    bodyOnly: true,
    muscle: 'Quadriceps',
    description:
    ` Begin standing with your legs shoulder-width apart.
Place your hands on the floor and kick your legs back so you end up with your stomach and thighs on the floor. Your elbows should be bent.
From this position, press up like you're doing a push-up and push your hips up.
Jump your feet under your hips and stand.
Finish the movement by jumping in the air and bringing your hands over your head.
Repeat.`
  },
  {
    name: 'Burpee',
    video: 'https://videocdn.bodybuilding.com/video/mp4/118000/118171m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/55/Male/m/55_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/55/Male/m/55_2.jpg',
    bodyOnly: true,
    muscle: 'Traps',
    description:
    ` To get into the starting position, hold your body at arm's length with your arms nearly locked above the bars.
     Now, inhale and slowly lower yourself downward. Your torso should remain upright and your elbows should stay close to your body. This helps to better focus on tricep involvement. Lower yourself until there is a 90 degree angle formed between the upper arm and forearm.
     Then, exhale and push your torso back up using your triceps to bring your body back to the starting position.
     Repeat the movement for the prescribed amount of repetitions.`
  },
];


const workouts = [
  {
    name: 'Beast',
    owner: '58bdac10d7d0a241068ba745',
    upvotes: 10,
    plan:[
      {day: 0 , reps: 2, exercise:'Bench press'},
      {day: 1 , reps: 2, exercise:'Bench press'},
      {day: 1 , reps: 2, exercise:'Bench press'},
      {day: 2 , reps: 2, exercise:'Squat'},
      {day: 2 , reps: 2, exercise:'Bench press'},
    ],
    goal: 'Gain Weight',
  },
  {
    name: 'Animal',
    owner: '58bdac10d7d0a241068ba745',
    upvotes: 10,
    plan:[
      {day: 0 , reps: 2, exercise:'Bench press'},
      {day: 1 , reps: 2, exercise:'Bench press'},
      {day: 2 , reps: 2, exercise:'Bench press'},
      {day: 3 , reps: 2, exercise:'Squat'},
      {day: 4 , reps: 2, exercise:'Bench press'},
      {day: 5 , reps: 2, exercise:'Bench press'},
      {day: 5 , reps: 2, exercise:'Squat'},
      {day: 6 , reps: 2, exercise:'Bench press'},
    ],
    goal: 'Lose Weight',
  },
  {
    name: 'Shark',
    owner: '58bd7402d661823548ea3c9e',
    upvotes: 10,
    plan:[
      {day: 0 , reps: 2, exercise:'Bench press'},
      {day: 1 , reps: 2, exercise:'Bench press'},
      {day: 2 , reps: 2, exercise:'Bench press'},
      {day: 3 , reps: 2, exercise:'Squat'},
      {day: 4 , reps: 2, exercise:'Bench press'},
      {day: 5 , reps: 2, exercise:'Bench press'},
      {day: 5 , reps: 2, exercise:'Squat'},
      {day: 6 , reps: 2, exercise:'Bench press'},
    ],
    goal: 'Lose weight',
  },
];


Exercise.create(exercises, (err, docs) => {
  if(err) throw err;

  docs.forEach((oneDoc)=>{
    console.log(`${oneDoc.name} ${oneDoc._id}`);
  });

  mongoose.disconnect();
});

// Workout.create(workouts, (err, docs) => {
//   if(err) throw err;
//
//   docs.forEach((oneDoc)=>{
//     console.log(`${oneDoc.name} ${oneDoc._id}`);
//   });
//
//   mongoose.disconnect();
// });
