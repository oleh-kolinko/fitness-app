const mongoose = require('mongoose');//get mongoose
mongoose.connect('mongodb://localhost/fitness-app');//connect to DB

const Exercise = require('../models/exercise');//get product model from /models/product.js
const Workout = require('../models/workout');//get product model from /models/product.js

const exercises = [

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



    ////------------------------------------------------Chest

  {
    name: 'PUSHUPS',
    video: 'https://videocdn.bodybuilding.com/video/mp4/40000/40811m.mp4',
    img1: 'http://www.bodybuilding.com/exercises/exerciseImages/sequences/70/Male/l/70_1.jpg',
    img2: 'http://www.bodybuilding.com/exercises/exerciseImages/sequences/70/Male/l/70_2.jpg',
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
    name: 'Dumbbell Bench Press',
    video: 'https://videocdn.bodybuilding.com/video/mp4/38000/39001m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1/Male/m/1_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1/Male/m/1_2.jpg',
    bodyOnly: false,
    muscle: 'Chest',
    description:
    `Lie down on a flat bench with a dumbbell in each hand resting on top of your thighs. The palms of your hands will be facing each other.
      Then, using your thighs to help raise the dumbbells up, lift the dumbbells one at a time so that you can hold them in front of you at shoulder width.
      Once at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. The dumbbells should be just to the sides of your chest, with your upper arm and forearm creating a 90 degree angle. Be sure to maintain full control of the dumbbells at all times. This will be your starting position.
      Then, as you breathe out, use your chest to push the dumbbells up. Lock your arms at the top of the lift and squeeze your chest, hold for a second and then begin coming down slowly. Tip: Ideally, lowering the weight should take about twice as long as raising it.
      Repeat the movement for the prescribed amount of repetitions of your training program.`
  },

  {
      name: 'Around The Worlds',
      video: 'https://videocdn.bodybuilding.com/video/mp4/52000/53761m.mp4',
      img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/277/Male/m/277_1.jpg',
      img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/277/Male/m/277_2.jpg',
      bodyOnly: false,
      muscle: 'Chest',
      description:
      `Lay down on a flat bench holding a dumbbell in each hand with the palms of the hands facing towards the ceiling. Tip: Your arms should be parallel to the floor and next to your thighs. To avoid injury, make sure that you keep your elbows slightly bent. This will be your starting position.
      Now move the dumbbells by creating a semi-circle as you displace them from the initial position to over the head. All of the movement should happen with the arms parallel to the floor at all times. Breathe in as you perform this portion of the movement.
      Reverse the movement to return the weight to the starting position as you exhale.`
    },
    {
      name: 'Bar Throw And Press',
      video: 'https://videocdn.bodybuilding.com/video/mp4/122000/122821m.mp4',
      img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/4941/Male/m/4941_1.jpg',
      img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/4941/Male/m/4941_2.jpg',
      bodyOnly: false,
      muscle: 'Chest',
      description:
      `Using a smith machine, adjust the bar height so that when you are lying down the bar is slightly lower than arms distance away. Once you have added the appropriate weight to the bar, lie down on the bench and take a slightly than shoulder width grip on the bar. This will be your starting position.
      Lower the bar all the way down to your chest, and then in an explosive manner, push the bar up as fast as you can, releasing the bar from your grip at the top of the movement. Catch the bar with your arms extended, keeping a slight bend in your elbows.
      Lower the bar back down to the chest and repeat for the recommended number of repetitions.`
    },
    {
      name: 'Bodyweight Flyes',
      video: 'https://videocdn.bodybuilding.com/video/mp4/104000/104862m.mp4',
      img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1561/Male/m/1561_1.jpg',
      img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1561/Male/m/1561_2.jpg',
      bodyOnly: true,
      muscle: 'Chest',
      description:
      `Position two equally loaded EZ bars on the ground next to each other. Ensure they are able to roll.
      Assume a push-up position over the bars, supporting your weight on your toes and hands with your arms extended and body straight.
      Place your hands on the bars. This will be your starting position.
      Using a slow and controlled motion, move your hands away from the midline of your body, rolling the bars apart. Inhale during this portion of the motion.
      After moving the bars as far apart as you can, return to the starting position by pulling them back together. Exhale as you perform this movement.`
    },
    {
      name: 'Butterfly',
      video: 'https://videocdn.bodybuilding.com/video/mp4/38000/38551m.mp4',
      img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/214/Male/m/214_1.jpg',
      img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/214/Male/m/214_2.jpg',
      bodyOnly: false,
      muscle: 'Chest',
      description:
      `Sit on the machine with your back flat on the pad.
      Take hold of the handles. Tip: Your upper arms should be positioned parallel to the floor; adjust the machine accordingly. This will be your starting position.
      Push the handles together slowly as you squeeze your chest in the middle. Breathe out during this part of the motion and hold the contraction for a second.
      Return back to the starting position slowly as you inhale until your chest muscles are fully stretched.
      Repeat for the recommended amount of repetitions.`
    },
    {
      name: 'Around The Worlds',
      video: 'https://videocdn.bodybuilding.com/video/mp4/52000/53761m.mp4',
      img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/277/Male/m/277_1.jpg',
      img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/277/Male/m/277_2.jpg',
      bodyOnly: false,
      muscle: 'Chest',
      description:
      `Lay down on a flat bench holding a dumbbell in each hand with the palms of the hands facing towards the ceiling. Tip: Your arms should be parallel to the floor and next to your thighs. To avoid injury, make sure that you keep your elbows slightly bent. This will be your starting position.
      Now move the dumbbells by creating a semi-circle as you displace them from the initial position to over the head. All of the movement should happen with the arms parallel to the floor at all times. Breathe in as you perform this portion of the movement.
      Reverse the movement to return the weight to the starting position as you exhale.`
    },
    {
      name: 'Kneeling Medicine Ball Throw',
      video: 'https://videocdn.bodybuilding.com/video/mp4/90000/91212m.mp4',
      img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/769/Male/m/769_1.jpg',
      img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/769/Male/m/769_2.jpg',
      bodyOnly: false,
      muscle: 'Chest',
      description:
      `Begin in a kneeling position facing a wall or utilize a partner. Hold the ball with both hands tight into the chest.
      Execute the pass by exploding forward and outward with the hips while pushing the ball as hard as possible.
      Follow through by falling forward, catching yourself with your hands.
      Immediately return to an upright position. Repeat for the desired number of repetitions.`
    },
    {
      name: 'Bodyweight Flyes',
      video: 'https://videocdn.bodybuilding.com/video/mp4/104000/104862m.mp4',
      img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1561/Male/m/1561_1.jpg',
      img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1561/Male/m/1561_2.jpg',
      bodyOnly: true,
      muscle: 'Chest',
      description:
      `Position two equally loaded EZ bars on the ground next to each other. Ensure they are able to roll.
      Assume a push-up position over the bars, supporting your weight on your toes and hands with your arms extended and body straight.
      Place your hands on the bars. This will be your starting position.
      Using a slow and controlled motion, move your hands away from the midline of your body, rolling the bars apart. Inhale during this portion of the motion.
      After moving the bars as far apart as you can, return to the starting position by pulling them back together. Exhale as you perform this movement.`
    },
    {
      name: 'Behind Head Chest Stretch',
      video: 'https://videocdn.bodybuilding.com/video/mp4/58000/59632m.mp4',
      img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/582/Male/m/582_1.jpg',
      img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/582/Male/m/582_2.jpg',
      bodyOnly: true,
      muscle: 'Chest',
      description:
      `Sit on the floor with your legs comfortably in front of you. Your chest should be up and your back straight. Put your hands on the back of your head and interlace your fingers. This will be your starting position
      Have your partner stand behind you and put his/her hands on the inside of your elbows. Allow them to pull back on your elbows until you feel a stretch in your chest and front delts. Hold for 10 seconds.
      After 10 seconds, try to bring your elbows in against your partner's resistance. Hold that contraction for 6 seconds.
      Now, relax your muscles and have your partner gently pull the elbows back as far as it comfortable for you for 30 seconds. (If you want, try contracting your upper back for greater ROM gains.)`
    },
    {
      name: 'Bent-Arm Dumbbell Pullover',
      video: 'https://videocdn.bodybuilding.com/video/mp4/52000/53901m.mp4',
      img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/40/Male/m/40_1.jpg',
      img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/40/Male/m/40_2.jpg',
      bodyOnly: false,
      muscle: 'Chest',
      description:
      `Place a dumbbell standing up on a flat bench.
      Ensuring that the dumbbell stays securely placed at the top of the bench, lie perpendicular to the bench (torso across it as in forming a cross) with only your shoulders lying on the surface. Hips should be below the bench and legs bent with feet firmly on the floor. The head will be off the bench as well.
      Grasp the dumbbell with both hands and hold it straight over your chest with a bend in your arms. Both palms should be pressing against the underside one of the sides of the dumbbell. This will be your starting position. Caution: Always ensure that the dumbbell used for this exercise is secure. Using a dumbbell with loose plates can result in the dumbbell falling apart and falling on your face.
      While keeping your arms locked in the bent arm position, lower the weight slowly in an arc behind your head while breathing in until you feel a stretch on the chest.
      At that point, bring the dumbbell back to the starting position using the arc through which the weight was lowered and exhale as you perform this movement.
      Hold the weight on the initial position for a second and repeat the motion for the prescribed number of repetitions.`
    },



  ///---------------------------------------------------Abdominals




  {
    name: 'Crunches',
    video: 'https://videocdn.bodybuilding.com/video/mp4/38000/38871m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/102/Male/m/102_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/102/Male/m/102_2.jpg',
    bodyOnly: true,
    muscle: 'Abdominals',
    description:
    `Lie flat on your back with your feet flat on the ground, or resting on a bench with your knees bent at a 90 degree angle. If you are resting your feet on a bench, place them three to four inches apart and point your toes inward so they touch.
    Now place your hands lightly on either side of your head keeping your elbows in. Tip: Don't lock your fingers behind your head.
    While pushing the small of your back down in the floor to better isolate your abdominal muscles, begin to roll your shoulders off the floor.
    Continue to push down as hard as you can with your lower back as you contract your abdominals and exhale. Your shoulders should come up off the floor only about four inches, and your lower back should remain on the floor. At the top of the movement, contract your abdominals hard and keep the contraction for a second. Tip: Focus on slow, controlled movement - don't cheat yourself by using momentum.
    After the one second contraction, begin to come down slowly again to the starting position as you inhale.
    Repeat for the recommended amount of repetitions.`
  },
  {
    name: 'Plank',
    video: 'https://videocdn.bodybuilding.com/video/mp4/90000/91032m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/908/Male/m/908_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/908/Male/m/908_2.jpg',
    bodyOnly: true,
    muscle: 'Abdominals',
    description:
    ` Get into a prone position on the floor, supporting your weight on your toes and your forearms. Your arms are bent and directly below the shoulder.
    Keep your body straight at all times, and hold this position as long as possible. To increase difficulty, an arm or leg can be raised.`
  },
  {
    name: 'Elbow to Knee',
    video: 'https://videocdn.bodybuilding.com/video/mp4/104000/105262m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/2031/Male/m/2031_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/2031/Male/m/2031_2.jpg',
    bodyOnly: true,
    muscle: 'Abdominals',
    description:
    `Lie on the floor, crossing your right leg across your bent left knee. Clasp your hands behind your head, beginning with your shoulder blades on the ground. This will be your starting position.
    Perform the motion by flexing the spine and rotating your torso to bring the left elbow to the right knee.
    Return to the starting position and repeat the movement for the desired number of repetitions before switching sides.`
  },
  {
    name: 'Cross-Body Crunch',
    video: 'https://videocdn.bodybuilding.com/video/mp4/38000/38841m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/124/Male/m/124_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/124/Male/m/124_2.jpg',
    bodyOnly: true,
    muscle: 'Abdominals',
    description:
    `Lie flat on your back and bend your knees about 60 degrees.
    Keep your feet flat on the floor and place your hands loosely behind your head. This will be your starting position.
    Now curl up and bring your right elbow and shoulder across your body while bring your left knee in toward your left shoulder at the same time. Reach with your elbow and try to touch your knee. Exhale as you perform this movement. Tip: Try to bring your shoulder up towards your knee rather than just your elbow and remember that the key is to contract the abs as you perform the movement; not just to move the elbow.
    Now go back down to the starting position as you inhale and repeat with the left elbow and the right knee.
    Continue alternating in this manner until all prescribed repetitions are done.`
  },
  {
    name: 'Cocoons',
    video: 'https://videocdn.bodybuilding.com/video/mp4/104000/105242m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/2011/Male/m/2011_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/2011/Male/m/2011_2.jpg',
    bodyOnly: true,
    muscle: 'Abdominals',
    description:
    `Begin by lying on your back on the ground. Your legs should be straight and your arms extended behind your head. This will be your starting position.
    To perform the movement, tuck the knees toward your chest, rotating your pelvis to lift your glutes from the floor. As you do so, flex the spine, bringing your arms back over your head to perform a simultaneous crunch motion.
    After a brief pause, return to the starting position.`
  },
  {
    name: '3/4 Sit-Up',
    video: 'https://videocdn.bodybuilding.com/video/mp4/104000/105232m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/2001/Male/m/2001_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/2001/Male/m/2001_2.jpg',
    bodyOnly: true,
    muscle: 'Abdominals',
    description:
    ` Lie down on the floor and secure your feet. Your legs should be bent at the knees.
    Place your hands behind or to the side of your head. You will begin with your back on the ground. This will be your starting position.
    Flex your hips and spine to raise your torso toward your knees.
    At the top of the contraction your torso should be perpendicular to the ground. Reverse the motion, going only Â¾ of the way down.
    Repeat for the recommended amount of repetitions.`
  },
  {
    name: 'Plate Twist',
    video: 'https://videocdn.bodybuilding.com/video/mp4/40000/40961m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/106/Male/m/106_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/106/Male/m/106_2.jpg',
    bodyOnly: false,
    muscle: 'Abdominals',
    description:
    `Lie down on the floor or an exercise mat with your legs fully extended and your upper body upright. Grab the plate by its sides with both hands out in front of your abdominals with your arms slightly bent.
    Slowly cross your legs near your ankles and lift them up off the ground. Your knees should also be bent slightly. Note: Move your upper body back slightly to help keep you balanced turning this exercise. This is the starting position.
    Move the plate to the left side and touch the floor with it. Breathe out as you perform that movement.
    Come back to the starting position as you breathe in and then repeat the movement but this time to the right side of the body. Tip: Use a slow controlled movement at all times. Jerking motions can injure the back.
    Repeat for the recommended amount of repetitions.`
  },


  //-----------------------------------------------Biceps


  {
    name: 'BARBELL CURL',
    video: 'https://videocdn.bodybuilding.com/video/mp4/38000/38241m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/169/Male/m/169_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/169/Male/m/169_2.jpg',
    bodyOnly: false,
    muscle: 'Biceps',
    description:
    `Stand up with your torso upright while holding a barbell at a shoulder-width grip. The palm of your hands should be facing forward and the elbows should be close to the torso. This will be your starting position.
    While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move.
    Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard.
    Slowly begin to bring the bar back to starting position as your breathe in.
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
    name: 'Dumbbell Bicep Curl',
    video: 'https://videocdn.bodybuilding.com/video/mp4/38000/39011m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/223/Male/m/223_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/223/Male/m/223_2.jpg',
    bodyOnly: false,
    muscle: 'Biceps',
    description:
    `Stand up straight with a dumbbell in each hand at arm's length. Keep your elbows close to your torso and rotate the palms of your hands until they are facing forward. This will be your starting position.
    Now, keeping the upper arms stationary, exhale and curl the weights while contracting your biceps. Continue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a brief pause as you squeeze your biceps.
    Then, inhale and slowly begin to lower the dumbbells back to the starting position.
    Repeat for the recommended amount of repetitions.`
  },
  {
    name: 'Concentration Curls',
    video: 'https://videocdn.bodybuilding.com/video/mp4/38000/38811m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/136/Male/m/136_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/136/Male/m/136_2.jpg',
    bodyOnly: false,
    muscle: 'Biceps',
    description:
    `Sit down on a flat bench with one dumbbell in front of you between your legs. Your legs should be spread with your knees bent and feet on the floor.
    Use your right arm to pick the dumbbell up. Place the back of your right upper arm on the top of your inner right thigh. Rotate the palm of your hand until it is facing forward away from your thigh. Tip: Your arm should be extended and the dumbbell should be above the floor. This will be your starting position.
    While holding the upper arm stationary, curl the weights forward while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Tip: At the top of the movement make sure that the little finger of your arm is higher than your thumb. This guarantees a good contraction. Hold the contracted position for a second as you squeeze the biceps.
    Slowly begin to bring the dumbbells back to starting position as your breathe in. Caution: Avoid swinging motions at any time.
    Repeat for the recommended amount of repetitions. Then repeat the movement with the left arm.`
  },
  {
    name: 'Standing Biceps Cable Curl',
    video: 'https://videocdn.bodybuilding.com/video/mp4/40000/41781m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/131/Male/m/131_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/131/Male/m/131_2.jpg',
    bodyOnly: false,
    muscle: 'Biceps',
    description:
    `Stand up with your torso upright while holding a cable curl bar that is attached to a low pulley. Grab the cable bar at shoulder width and keep the elbows close to the torso. The palm of your hands should be facing up (supinated grip). This will be your starting position.
    While holding the upper arms stationary, curl the weights while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second as you squeeze the muscle.
    Slowly begin to bring the curl bar back to starting position as your breathe in.
    Repeat for the recommended amount of repetitions.`
  },
  {
    name: 'Zottman Preacher Curl',
    video: 'https://videocdn.bodybuilding.com/video/mp4/40000/40601m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/205/Male/m/205_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/205/Male/m/205_2.jpg',
    bodyOnly: false,
    muscle: 'Biceps',
    description:
    `Grab a dumbbell in each hand and place your upper arms on top of the preacher bench or the incline bench. The dumbbells should be held at shoulder height and the elbows should be flexed. Hold the dumbbells with the palms of your hands facing down. This will be your starting position.
    As you breathe in, slowly lower the dumbbells keeping the palms down until your upper arm is extended and your biceps are fully stretched.
    Now rotate your wrists once you are at the bottom of the movement so that the palms of the hands are facing up.
    As you exhale, use your biceps to curl the weights up until they are fully contracted and the dumbbells are at shoulder height. Again, remember that to ensure full contraction you need to bring that small finger higher than the thumb.
    Squeeze the biceps hard for a second at the contracted position and rotate your wrists so that the palms are facing down again.
    Repeat for the recommended amount of repetitions.`
  },
  {
    name: 'Reverse Cable Curl',
    video: 'https://videocdn.bodybuilding.com/video/mp4/40000/40781m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/141/Male/m/141_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/141/Male/m/141_2.jpg',
    bodyOnly: false,
    muscle: 'Biceps',
    description:
    `Stand up with your torso upright while holding a bar attachment that is attached to a low pulley using a pronated (palms down) and shoulder width grip. Make sure also that you keep the elbows close to the torso. This will be your starting position.
    While holding the upper arms stationary, curl the weights while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second as you squeeze the muscle.
    Slowly begin to bring the bar back to starting position as your breathe in.
    Repeat for the recommended amount of repetitions.`
  },




  ////-----------------------------Shoulders

  {
    name: 'Single-Arm Linear Jammer',
    video: 'https://videocdn.bodybuilding.com/video/mp4/104000/105032m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1741/Male/m/1741_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1741/Male/m/1741_2.jpg',
    bodyOnly: false,
    muscle: 'Shoulder',
    description:
    `Position a bar into a landmine or securely anchor it in a corner. Load the bar to an appropriate weight.
    Raise the bar from the floor, taking it to your shoulders with one or both hands. Adopt a wide stance. This will be your starting position.
    Perform the movement by extending the elbow, pressing the weight up. Move explosively, extending the hips and knees fully to produce maximal force. Return to standing position`
  },
  {
    name: 'Side Laterals to Front Raise',
    video: 'https://videocdn.bodybuilding.com/video/mp4/104000/105092m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1791/Male/m/1791_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1791/Male/m/1791_2.jpg',
    bodyOnly: false,
    muscle: 'Shoulder',
    description:
    `In a standing position, hold a pair of dumbbells at your side. This will be your starting position.
    Keeping your elbows slightly bent, raise the weights directly in front of you to shoulder height, avoiding any swinging or cheating.
    At the top of the exercise move the weights out in front of you, keeping your arms extended.
    Lower the weights with a controlled motion.
    On the next repetition, raise the weights in front of you to shoulder height before moving the weights laterally to your sides.
    Lower the weights to the starting position.`
  },
  {
    name: 'Standing Palm-In One-Arm Dumbbell Press',
    video: 'https://videocdn.bodybuilding.com/video/mp4/42000/42111m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/366/Male/m/366_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/366/Male/m/366_2.jpg',
    bodyOnly: false,
    muscle: 'Shoulder',
    description:
    `Start by having a dumbbell in one hand with your arm fully extended to the side using a neutral grip. Use your other arm to hold on to an incline bench to keep your balance.
    Your feet should be shoulder width apart from each other. Now slowly lift the dumbbell up until you create a 90 degree angle with your arm. Note: Your forearm should be perpendicular to the floor. Continue to maintain a neutral grip throughout the entire exercise.
    Slowly lift the dumbbell up until your arm is fully extended. This the starting position.
    While inhaling lower the weight down until your arm is at a 90 degree angle again.
    Feel the contraction for a second and then lift the weight back up towards the starting position while exhaling. Remember to hold on to the incline bench and keep your feet positioned to keep balance during the exercise.
    Repeat for the recommended amount of repetitions.
    Switch arms and repeat the exercise.`
  },
  {
    name: 'Clean and Press',
    video: 'https://videocdn.bodybuilding.com/video/mp4/98000/99762m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/864/Male/m/864_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/864/Male/m/864_2.jpg',
    bodyOnly: false,
    muscle: 'Shoulder',
    description:
    `Assume a shoulder-width stance, with knees inside the arms. Now while keeping the back flat, bend at the knees and hips so that you can grab the bar with the arms fully extended and a pronated grip that is slightly wider than shoulder width. Point the elbows out to sides. The bar should be close to the shins. Position the shoulders over or slightly ahead of the bar. Establish a flat back posture. This will be your starting position.
    Begin to pull the bar by extending the knees. Move your hips forward and raise the shoulders at the same rate while keeping the angle of the back constant; continue to lift the bar straight up while keeping it close to your body.
    As the bar passes the knee, extend at the ankles, knees, and hips forcefully, similar to a jumping motion. As you do so, continue to guide the bar with your hands, shrugging your shoulders and using the momentum from your movement to pull the bar as high as possible. The bar should travel close to your body, and you should keep your elbows out.
    At maximum elevation, your feet should clear the floor and you should start to pull yourself under the bar. The mechanics of this could change slightly, depending on the weight used. You should descend into a squatting position as you pull yourself under the bar.
    As the bar hits terminal height, rotate your elbows around and under the bar. Rack the bar across the front of the shoulders while keeping the torso erect and flexing the hips and knees to absorb the weight of the bar.
    Stand to full height, holding the bar in the clean position.
    Without moving your feet, press the bar overhead as you exhale. Lower the bar under control .`
  },
  {
    name: 'Push Press',
    video: 'https://videocdn.bodybuilding.com/video/mp4/78000/78202m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/186/Male/m/186_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/186/Male/m/186_2.jpg',
    bodyOnly: false,
    muscle: 'Shoulder',
    description:
    `Beginning Position:
    Use the floor-to-shoulder lifting technique described in the Power Clean exercise to move the bar from the floor to the shoulders.
    Upward Movement Phase:
    Slightly flex the hips and knees, keeping torso erect.
    Immediately follow with an explosive push upward by extending the knees.
    Keep torso erect and tensed.
    At maximum hip and knee extension, shift body weight to balls of feet and extend ankle joints.
    At maximum plantar flexion, push bar from the shoulders.
    Push the bar with the arms to a fully extended elbow position overhead.
    Downward Movement Phase:
    Lower bar to shoulders.
    Flex hips and knees slightly as bar touches shoulders.
    Straighten the hips and knees before the upward movement phase begins again.
    Breathing:
    Exhale through the sticking point of the upward movement phase.
    Inhale during the downward movement phase.`
  },
  {
    name: 'Seated Barbell Military Press',
    video: 'https://videocdn.bodybuilding.com/video/mp4/40000/40321m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/382/Male/m/382_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/382/Male/m/382_2.jpg',
    bodyOnly: false,
    muscle: 'Shoulder',
    description:
    `Sit on a Military Press Bench with a bar behind your head and either have a spotter give you the bar (better on the rotator cuff this way) or pick it up yourself carefully with a pronated grip (palms facing forward). Tip: Your grip should be wider than shoulder width and it should create a 90-degree angle between the forearm and the upper arm as the barbell goes down.
    Once you pick up the barbell with the correct grip length, lift the bar up over your head by locking your arms. Hold at about shoulder level and slightly in front of your head. This is your starting position.
    Lower the bar down to the collarbone slowly as you inhale.
    Lift the bar back up to the starting position as you exhale.
    Repeat for the recommended amount of repetitions.
    Variations:

    This exercise can also be performed standing but those with lower back problems are better off performing this seated variety.
    The behind the neck variation is not recommended for people with shoulder problems as it can be hard on the rotator cuff due to the hyperextension created by bringing the bar behind the neck.`
  },



  /////------------------------------back

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
      Perform the movement by retracting the shoulder and flexing the elbow. As you pull, supinate the wrist,
      turning the palm upward as you go.
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

  ////-------------------------------Calves

  {
      name: 'Smith Machine Calf Raise',
      video: 'https://videocdn.bodybuilding.com/video/mp4/104000/104362m.mp4',
      img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1841/Male/m/1841_1.jpg',
      img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1841/Male/m/1841_2.jpg',
      bodyOnly: false,
      muscle: 'Calves',
      description:
      `Place a dumbbell standing up on a flat bench.
      Ensuring that the dumbbell stays securely placed at the top of the bench, lie perpendicular to the bench (torso across it as in forming a cross) with only your shoulders lying on the surface. Hips should be below the bench and legs bent with feet firmly on the floor. The head will be off the bench as well.
      Grasp the dumbbell with both hands and hold it straight over your chest with a bend in your arms. Both palms should be pressing against the underside one of the sides of the dumbbell. This will be your starting position. Caution: Always ensure that the dumbbell used for this exercise is secure. Using a dumbbell with loose plates can result in the dumbbell falling apart and falling on your face.
      While keeping your arms locked in the bent arm position, lower the weight slowly in an arc behind your head while breathing in until you feel a stretch on the chest.
      At that point, bring the dumbbell back to the starting position using the arc through which the weight was lowered and exhale as you perform this movement.
      Hold the weight on the initial position for a second and repeat the motion for the prescribed number of repetitions.`
  },
  {
    name: 'Standing Calf Raises',
    video: 'https://videocdn.bodybuilding.com/video/mp4/40000/41821m.mp4',
    img1: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/48/Male/m/48_1.jpg',
    img2: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/48/Male/m/48_2.jpg',
    bodyOnly: true,
    muscle: 'Calves',
    description:
    `Adjust the padded lever of the calf raise machine to fit your height.
    Place your shoulders under the pads provided and position your toes facing forward (or using any of the two other positions described at the beginning of the chapter). The balls of your feet should be secured on top of the calf block with the heels extending off it. Push the lever up by extending your hips and knees until your torso is standing erect. The knees should be kept with a slight bend; never locked. Toes should be facing forward, outwards or inwards as described at the beginning of the chapter. This will be your starting position.
    Raise your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position by a second before you start to go back down.
    Go back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched.
    Repeat for the recommended amount of repetitions.`
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
