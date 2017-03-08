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
    name: 'Jump Roping',
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
    video: 'http://videocdn.bodybuilding.com/video/mp4/118000/118171m.mp4',
    img1: 'http://www.bodybuilding.com/exercises/exerciseImages/sequences/3153/Male/m/3153_1.jpg',
    img2: 'http://www.bodybuilding.com/exercises/exerciseImages/sequences/3153/Male/m/3153_2.jpg',
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
    name: 'Jefferson Squats',
    video: 'http://videocdn.bodybuilding.com/video/mp4/40000/40421m.mp4',
    img1: 'http://www.bodybuilding.com/exercises/exerciseImages/sequences/283/Male/m/283_1.jpg',
    img2: 'http://www.bodybuilding.com/exercises/exerciseImages/sequences/283/Male/m/283_2.jpg',
    bodyOnly: false,
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
    name: 'Butt Lift (Bridge)',
    video: 'https://videocdn.bodybuilding.com/video/mp4/38000/38531m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/99/Male/m/99_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/99/Male/m/99_2.jpg',
    bodyOnly: true,
    muscle: 'Glutes',
    description:
    `Lie flat on the floor on your back with the hands by your side and your knees bent. Your feet should be placed around shoulder width. This will be your starting position.
Pushing mainly with your heels, lift your hips off the floor while keeping your back straight. Breathe out as you perform this part of the motion and hold at the top for a second.
Slowly go back to the starting position as you breathe in.`
  },
  {
    name: '90/90 Hamstring',
    video: 'https://videocdn.bodybuilding.com/video/mp4/58000/59582m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/578/Male/m/578_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/578/Male/m/578_2.jpg',
    bodyOnly: true,
    muscle: 'Hamstrings',
    description:
    `Lie on your back, with one leg extended straight out.
With the other leg, bend the hip and knee to 90 degrees. You may brace your leg with your hands if necessary. This will be your starting position.
Extend your leg straight into the air, pausing briefly at the top. Return the leg to the starting position.
Repeat for 10-20 repetitions, and then switch to the other leg.`
  },
  {
    name: 'Child\'s Pose',
    video: 'https://videocdn.bodybuilding.com/video/mp4/58000/59742m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/426/Male/m/426_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/426/Male/m/426_2.jpg',
    bodyOnly: true,
    muscle: 'Lower Back',
    description:
    `Get on your hands and knees, walk your hands in front of you.
Lower your buttocks down to sit on your heels. Let your arms drag along the floor as you sit back to stretch your entire spine.
Once you settle onto your heels, bring your hands next to your feet and relax. "breathe" into your back.
Rest your forehead on the floor. Avoid this position if you have knee problems.`
  },
  {
    name: 'Superman',
    video: 'https://videocdn.bodybuilding.com/video/mp4/40000/41971m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/228/Male/m/228_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/228/Male/m/228_2.jpg',
    bodyOnly: true,
    muscle: 'Lower Back',
    description:
    `To begin, lie straight and face down on the floor or exercise mat. Your arms should be fully extended in front of you. This is the starting position.
Simultaneously raise your arms, legs, and chest off of the floor and hold this contraction for 2 seconds. Tip: Squeeze your lower back to get the best results from this exercise. Remember to exhale during this movement. Note: When holding the contracted position, you should look like superman when he is flying.
Slowly begin to lower your arms, legs and chest back down to the starting position while inhaling.
Repeat for the recommended amount of repetitions prescribed in your program.`
  },
  {
    name: 'Atlas Stones',
    video: 'https://videocdn.bodybuilding.com/video/mp4/76000/76452m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/659/Male/m/659_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/659/Male/m/659_2.jpg',
    bodyOnly: false,
    muscle: 'Lower Back',
    description:
    `Begin with the atlas stone between your feet. Bend at the hips to wrap your arms vertically around the Atlas Stone, attempting to get your fingers underneath the stone. Many stones will have a small flat portion on the bottom, which will make the stone easier to hold.
Pulling the stone into your torso, drive through the back half of your feet to pull the stone from the ground.
As the stone passes the knees, lap it by sitting backward, pulling the stone on top of your thighs.
Sit low, getting the stone high onto your chest as you change your grip to reach over the stone.
Stand, driving through with your hips. Close distance to the loading platform, and lean back, extending
the hips to get the stone as high as possible.`
  },
  {
    name: 'Spinal Stretch',
    video: 'https://videocdn.bodybuilding.com/video/mp4/60000/60692m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/481/Male/m/481_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/481/Male/m/481_2.jpg',
    bodyOnly: true,
    muscle: 'Middle Back',
    description:
    `Sit in a chair so your back is straight and your feet planted on the floor.
Interlace your fingers behind your head, elbows out and your chin down.
Twist your upper body to one side about 3 times as far as you can. Then lean forward and twist your torso to reach your elbow to the floor on the inside of your knee.
Return to upright position and then repeat for your other side.`
  },
  {
    name: 'One Arm Against Wall',
    video: 'https://videocdn.bodybuilding.com/video/mp4/60000/60232m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/478/Male/m/478_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/478/Male/m/478_2.jpg',
    bodyOnly: true,
    muscle: 'Lats',
    description:
    `From a standing position, place a bent arm against a wall or doorway.
Slowly lean toward your arm until you feel a stretch in your lats.`
  },
  {
    name: 'Dynamic Back Stretch',
    video: 'https://videocdn.bodybuilding.com/video/mp4/58000/59792m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/586/Male/m/586_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/586/Male/m/586_2.jpg',
    bodyOnly: true,
    muscle: 'Lats',
    description:
    `Stand with your feet shoulder width apart. This will be your starting position.
Keeping your arms straight, swing them straight up in front of you 5-10 times, increasing the range of motion each time until your arms are above your head.`
  },
  {
    name: 'Weighted Pull Ups',
    video: 'https://videocdn.bodybuilding.com/video/mp4/90000/91102m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/928/Male/m/928_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/928/Male/m/928_2.jpg',
    bodyOnly: false,
    muscle: 'Lats',
    description:
    `Attach a weight to a dip belt and secure it around your waist. Grab the pull-up bar with the palms of your hands facing forward. For a medium grip, your hands should be spaced at shoulder width. Both arms should be extended in front of you holding the bar at the chosen grip.
Youâ€™ll want to bring your torso back about 30 degrees while creating a curvature in your lower back and sticking your chest out. This will be your starting position.
Now, exhale and pull your torso up until your head is above your hands. Concentrate on squeezing yourshoulder blades back and down as you reach the top contracted position.
After a brief moment at the top contracted position, inhale and slowly lower your torso back to the starting position with your arms extended and your lats fully stretched.`
  },
  {
    name: 'Shotgun Row',
    video: 'https://videocdn.bodybuilding.com/video/mp4/104000/105202m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1971/Male/m/1971_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1971/Male/m/1971_2.jpg',
    bodyOnly: false,
    muscle: 'Lats',
    description:
    `Attach a single handle to a low cable.
After selecting the correct weight, stand a couple feet back with a wide-split stance. Your arm should be extended and your shoulder forward. This will be your starting position.
Perform the movement by retracting the shoulder and flexing the elbow. As you pull, supinate the wrist, turning the palm upward as you go.
After a brief pause, return to the starting position.`
  },
  {
    name: 'Rope Climb',
    video: 'https://videocdn.bodybuilding.com/video/mp4/100000/100322m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1441/Male/m/1441_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1441/Male/m/1441_2.jpg',
    bodyOnly: false,
    muscle: 'Lats',
    description:
    `Grab the rope with both hands above your head. Pull down on the rope as you take a small jump.
Wrap the rope around one leg, using your feet to pinch the rope. Reach up as high as possible with your arms, gripping the rope tightly.
Release the rope from your feet as you pull yourself up with your arms, bringing your knees towards your chest.
Resecure your feet on the rope, and then stand up to take another high hold on the rope. Continue until you reach the top of the rope.
To lower yourself, loosen the grip of your feet on the rope as you slide down using a hand over hand motion.`
  },
  {
    name: 'Dumbbell Bench Press',
    video: 'https://videocdn.bodybuilding.com/video/mp4/38000/39001m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1/Male/m/1_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1/Male/m/1_2.jpg',
    bodyOnly: false,
    muscle: 'Chest',
    description:
    ` Lie down on a flat bench with a dumbbell in each hand resting on top of your thighs. The palms of your hands will be facing each other.
Then, using your thighs to help raise the dumbbells up, lift the dumbbells one at a time so that you can hold them in front of you at shoulder width.
Once at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. The dumbbells should be just to the sides of your chest, with your upper arm and forearm creating a 90 degree angle. Be sure to maintain full control of the dumbbells at all times. This will be your starting position.
Then, as you breathe out, use your chest to push the dumbbells up. Lock your arms at the top of the lift and squeeze your chest, hold for a second and then begin coming down slowly. Tip: Ideally, lowering the weight should take about twice as long as raising it.
Repeat the movement for the prescribed amount of repetitions of your training program.`
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
