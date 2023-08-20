
// List of all exercises organized into dictionaries:
const list_of_all_exercises = [
    {class: "exercise_1", name: "3-Way Reaches", muscle: "Shoulders", category: "Isolation", difficulty: 1},
    {class: "exercise_2", name: "Ab Bicycle", muscle: "Abdominals", category: "Compound", difficulty: 2},
    {class: "exercise_3", name: "Adductor Leg Lifts", muscle: "Adductors", category: "Isolation", difficulty: 1},
    {class: "exercise_4", name: "Air Runner", muscle: "Hamstrings", category: "Cardio", difficulty: 2},
    {class: "exercise_5", name: "Arnold Press", muscle: "Shoulders", category: "Compound", difficulty:2},
    {class: "exercise_6", name: "Around-The-Worlds", muscle: "Obliques", category: "Compound", difficulty: 5},
    {class: "exercise_7", name: "Assault Air Bike", muscle: "Quads", category: "Cardio", difficulty: 1},
    {class: "exercise_8", name: "Back Extensions", muscle: "Lower Back", category: "Isolation", difficulty: 1},
    {class: "exercise_9", name: "Back Squats", muscle: "Quads", category: "Compound", difficulty: 2},
    {class: "exercise_10", name: "Ball Slams", muscle: "Abdominals", category: "Power", difficulty: 1},
    {class: "exercise_11", name: "Banana/Cannon Ball", muscle: "Abdominals", category: "Compound", difficulty: 3},
    {class: "exercise_12", name: "Banded Marches", muscle: "Hip Flexors", category: "Compound", difficulty: 1},
    {class: "exercise_13", name: "Battle Rope Exercises", muscle: "Shoulders", category: "Cardio", difficulty: 2},
    {class: "exercise_14", name: "Belt Squat", muscle: "Quads", category: "Compound", difficulty: 2},
    {class: "exercise_15", name: "Bench Press", muscle: "Chest", category: "Compound", difficulty: 2},
    {class: "exercise_16", name: "Bent Over Rows", muscle: "Upper Back", category: "Compound", difficulty: 2},
    {class: "exercise_17", name: "Bicep Curl", muscle: "Biceps", category: "Isolation", difficulty: 1},
    {class: "exercise_18", name: "Bike Erg", muscle: "Quads", category: "Cardio", difficulty: 1},
    {class: "exercise_19", name: "Bird Dog", muscle: "Lower Back", category: "Compound", difficulty: 2},
    {class: "exercise_20", name: "Bottoms-Up Bench Press", muscle: "Shoulders", category: "Compound", difficulty: 3},
    {class: "exercise_21", name: "Bottoms-Up Incline Press", muscle: "Shoulders", category: "Compound", difficulty: 3},
    {class: "exercise_22", name: "Bottoms-Up Overhead Press", muscle: "Shoulders", category: "Compound", difficulty: 3},
    {class: "exercise_23", name: "Box Jumps", muscle: "Quads", category: "Plyometric", difficulty: 3},
    {class: "exercise_24", name: "Box Squats", muscle: "Quads", category: "Compound", difficulty: 1},
    {class: "exercise_25", name: "Broad Jumps", muscle: "Quads", category: "Plyometric", difficulty: 2},
    {class: "exercise_26", name: "Bulgarian Split Squats", muscle: "Quads", category: "Compound", difficulty: 3},
    {class: "exercise_27", name: "Burpees", muscle: "Quads", category: "Cardio", difficulty: 2},
    {class: "exercise_28", name: "Calf Raises", muscle: "Calves", category: "Isolation", difficulty: 1},
    {class: "exercise_29", name: "Chest Flys", muscle: "Chest", category: "Isolation", difficulty: 2},
    {class: "exercise_30", name: "Chin-Up Grip Lat Pulldown", muscle: "Lats", category: "Compound", difficulty: 1},
    {class: "exercise_31", name: "Chin-Ups", muscle: "Lats", category: "Compound", difficulty: 4},
    {class: "exercise_32", name: "Chin-Ups (Assisted)", muscle: "Lats", category: "Compound", difficulty: 2},
    {class: "exercise_33", name: "Clean", muscle: "Quads", category: "Power", difficulty: 4},
    {class: "exercise_34", name: "Clean & Press", muscle: "Shoulders", category: "Power", difficulty: 3},
    {class: "exercise_35", name: "Clean High Pull", muscle: "Hamstrings", category: "Power", difficulty: 3},
    {class: "exercise_36", name: "Clean Pull", muscle: "Hamstrings", category: "Power", difficulty: 3},
    {class: "exercise_37", name: "Contact Twists", muscle: "Obliques", category: "Compound", difficulty: 3},
    {class: "exercise_38", name: "Copenhagen Plank", muscle: "Adductors", category: "Isometric", difficulty: 3},
    {class: "exercise_39", name: "Dead Bugs", muscle: "Abdominals", category: "Compound", difficulty: 3},
    {class: "exercise_40", name: "Deadlift", muscle: "Lower Back", category: "Compound", difficulty: 2},
    {class: "exercise_41", name: "Decline Bench Press", muscle: "Chest", category: "Compound", difficulty: 3},
    {class: "exercise_42", name: "Decline Chest Flys", muscle: "Chest", category: "Isolation", difficulty: 3},
    {class: "exercise_43", name: "Decline Reverse Crunch", muscle: "Abdominals", category: "Isolation", difficulty: 2},
    {class: "exercise_44", name: "Decline Sit-Ups", muscle: "Abdominals", category: "Isolation", difficulty: 2},
    {class: "exercise_45", name: "Depth Drops", muscle: "Quads", category: "Plyometric", difficulty: 2},
    {class: "exercise_46", name: "Depth Jumps", muscle: "Quads", category: "Plyometric", difficulty: 3},
    {class: "exercise_47", name: "Devil's Press", muscle: "Shoulders", category: "Cardio", difficulty: 3},
    {class: "exercise_48", name: "Dips", muscle: "Triceps", category: "Compound", difficulty: 4},
    {class: "exercise_49", name: "Dips (Assisted)", muscle: "Triceps", category: "Compound", difficulty: 2},
    {class: "exercise_50", name: "Donkey Kicks", muscle: "Glutes", category: "Isolation", difficulty: 2},
    {class: "exercise_51", name: "Elliptical", muscle: "Quads", category: "Cardio", difficulty: 1},
    {class: "exercise_52", name: "Explosive Step-Ups", muscle: "Quads", category: "Plyometric", difficulty: 3},
    {class: "exercise_53", name: "Face Pulls", muscle: "Upper Back", category: "Compound", difficulty: 1},
    {class: "exercise_54", name: "Farmer's Walk", muscle: "Forearms", category: "Compound", difficulty: 1},
    {class: "exercise_55", name: "Floor Press", muscle: "Chest", category: "Compound", difficulty: 2},
    {class: "exercise_56", name: "Flutter Kicks", muscle: "Abdominals", category: "Isolation", difficulty: 2},
    {class: "exercise_57", name: "Foot Elevated Reverse Lunges", muscle: "Quads", category: "Compound", difficulty: 3},
    {class: "exercise_58", name: "Front Loaded Carry", muscle: "Lower Back", category: "Compound", difficulty: 2},
    {class: "exercise_59", name: "Front Rack Lunges", muscle: "Quads", category: "Compound", difficulty: 3},
    {class: "exercise_60", name: "Front Raises", muscle: "Shoulders", category: "Isolation", difficulty: 1},
    {class: "exercise_61", name: "Front Squats", muscle: "Quads", category: "Compound", difficulty: 3},
    {class: "exercise_62", name: "G.H.D. Sit-Ups", muscle: "Abdominals", category: "Isolation", difficulty: 3},
    {class: "exercise_63", name: "Glute Bridges", muscle: "Glutes", category: "Compound", difficulty: 1},
    {class: "exercise_64", name: "Glute Drive Machine", muscle: "Glutes", category: "Compound", difficulty: 2},
    {class: "exercise_65", name: "Glute Ham Raises", muscle: "Hamstrings", category: "Isolation", difficulty: 3},
    {class: "exercise_66", name: "Goblet Squats", muscle: "Quads", category: "Compound", difficulty: 1},
    {class: "exercise_67", name: "Good Mornings", muscle: "Hamstrings", category: "Compound", difficulty: 2},
    {class: "exercise_68", name: "Ground-To-Shoulder", muscle: "Lower Back", category: "Compound", difficulty: 3},
    {class: "exercise_69", name: "Hack Squat", muscle: "Quads", category: "Compound", difficulty: 2},
    {class: "exercise_70", name: "Hammer Curls", muscle: "Biceps", category: "Isolation", difficulty: 1},
    {class: "exercise_71", name: "Hang Clean", muscle: "Quads", category: "Power", difficulty: 4},
    {class: "exercise_72", name: "Hang Snatch", muscle: "Quads", category: "Power", difficulty: 5},
    {class: "exercise_73", name: "Hanging Knee Raises", muscle: "Abdominals", category: "Isolation", difficulty: 2},
    {class: "exercise_74", name: "Hanging Leg Raises", muscle: "Abdominals", category: "Isolation", difficulty: 3},
    {class: "exercise_75", name: "Hanging Windshield Wipers", muscle: "Obliques", category: "Compound", difficulty: 5},
    {class: "exercise_76", name: "Heel Walks", muscle: "Anterior Tibialis", category: "Isolation", difficulty: 2},
    {class: "exercise_77", name: "Hip Thrusters", muscle: "Glutes", category: "Compound", difficulty: 2},
    {class: "exercise_78", name: "Hollow Body Holds", muscle: "Abdominals", category: "Isometric", difficulty: 3},
    {class: "exercise_79", name: "Hurdle Jumps", muscle: "Quads", category: "Plyometric", difficulty: 3},
    {class: "exercise_80", name: "In & Outs", muscle: "Abdominals", category: "Isolation", difficulty: 3},
    {class: "exercise_81", name: "Incline Bench Press", muscle: "Chest", category: "Compound", difficulty: 2},
    {class: "exercise_82", name: "Incline Chest Flys", muscle: "Chest", category: "Isolation", difficulty: 2},
    {class: "exercise_83", name: "Inverted Row", muscle: "Upper Back", category: "Compound", difficulty: 1},
    {class: "exercise_84", name: "I-Y-T's", muscle: "Shoulders", category: "Isolation", difficulty: 2},
    {class: "exercise_85", name: "Jumping Rope", muscle: "Calves", category: "Cardio", difficulty: 2},
    {class: "exercise_86", name: "Kettlebell Swings", muscle: "Hamstrings", category: "Power", difficulty: 2},
    {class: "exercise_87", name: "Knee Tuck Holds", muscle: "Abdominals", category: "Isometric", difficulty: 4},
    {class: "exercise_88", name: "Knee Tuck Planks", muscle: "Abdominals", category: "Compound", difficulty: 3},
    {class: "exercise_89", name: "Kneeling Chest Pass", muscle: "Chest", category: "Power", difficulty: 3},
    {class: "exercise_90", name: "Kneeling Crunches", muscle: "Abdominals", category: "Isolation", difficulty: 1},
    {class: "exercise_91", name: "Kneeling-To-Standing", muscle: "Quads", category: "Compound", difficulty: 2},
    {class: "exercise_92", name: "Landmine Lateral Raises", muscle: "Shoulders", category: "Isolation", difficulty: 2},
    {class: "exercise_93", name: "Landmine Rows", muscle: "Upper Back", category: "Compound", difficulty: 2},
    {class: "exercise_94", name: "Landmine Squats", muscle: "Quads", category: "Compound", difficulty: 3},
    {class: "exercise_95", name: "Lat Pulldown", muscle: "Lats", category: "Compound", difficulty: 1},
    {class: "exercise_96", name: "Lateral Ball Slams", muscle: "Obliques", category: "Power", difficulty: 2},
    {class: "exercise_97", name: "Lateral Ball Throws", muscle: "Obliques", category: "Power", difficulty: 2},
    {class: "exercise_98", name: "Lateral Band Walks", muscle: "Abductors", category: "Isolation", difficulty: 1},
    {class: "exercise_99", name: "Lateral Hurdle Jumps", muscle: "Quads", category: "Plyometric", difficulty: 4},
    {class: "exercise_100", name: "lateral Lunges", muscle: "Quads", category: "Compound", difficulty: 3},
    {class: "exercise_101", name: "Lateral Raises", muscle: "Shoulders", category: "Isolation", difficulty: 1},
    {class: "exercise_102", name: "Lateral Sled Drag", muscle: "Quads", category: "Compound", difficulty: 2},
    {class: "exercise_103", name: "Leg Extensions", muscle: "Quads", category: "Isolation", difficulty: 1},
    {class: "exercise_104", name: "Leg Press", muscle: "Quads", category: "Compound", difficulty: 1},
    {class: "exercise_105", name: "Lying Heel Touches", muscle: "Obliques", category: "Isolation", difficulty: 1},
    {class: "exercise_106", name: "Lying Knee Tucks", muscle: "Abdominals", category: "Compound", difficulty: 3},
    {class: "exercise_107", name: "Lying Leg Circles", muscle: "Abdominals", category: "Compound", difficulty: 4},
    {class: "exercise_108", name: "Lying Leg Curls (Floor)", muscle: "Hamstrings", category: "Isolation", difficulty: 2},
    {class: "exercise_109", name: "Lying Leg Curls (Machine)", muscle: "Hamstrings", category: "Isolation", difficulty: 1},
    {class: "exercise_110", name: "Lying Leg Raises", muscle: "Abdominals", category: "Isolation", difficulty: 2},
    {class: "exercise_111", name: "Muscle Clean", muscle: "Shoulders", category: "Power", difficulty: 3},
    {class: "exercise_112", name: "Muscle Snatch", muscle: "Shoulders", category: "Power", difficulty: 4},
    {class: "exercise_113", name: "Neutral-Grip Lat Pulldown", muscle: "Lats", category: "Compound", difficulty: 1},
    {class: "exercise_114", name: "Nordic Ham Raises", muscle: "Hamstrings", category: "Isolation", difficulty: 4},
    {class: "exercise_115", name: "Overhead Ball Throws", muscle: "Shoulders", category: "Power", difficulty: 2},
    {class: "exercise_116", name: "Overhead Squat", muscle: "Quads", category: "Compound", difficulty: 4},
    {class: "exercise_117", name: "Overhead Tricep Extensions", muscle: "Triceps", category: "Isolation", difficulty: 1},
    {class: "exercise_118", name: "Overhead Walking Lunges", muscle: "Quads", category: "Compound", difficulty: 4},
    {class: "exercise_119", name: "Pallof Press", muscle: "Obliques", category: "Compound", difficulty: 1},
    {class: "exercise_120", name: "Pistol Squats", muscle: "Quads", category: "Compound", difficulty: 5},
    {class: "exercise_121", name: "Planks", muscle: "Abdominals", category: "Isometric", difficulty: 2},
    {class: "exercise_122", name: "Plyo Lunges", muscle: "Quads", category: "Plyometric", difficulty: 3},
    {class: "exercise_123", name: "Power Clean", muscle: "Quads", category: "Power", difficulty: 4},
    {class: "exercise_124", name: "Power Snatch", muscle: "Shoulders", category: "Power", difficulty: 5},
    {class: "exercise_125", name: "Preacher Curl", muscle: "Biceps", category: "Isolation", difficulty: 1},
    {class: "exercise_126", name: "Prone Lying Snow Angels", muscle: "Shoulders", category: "Isolation", difficulty: 2},
    {class: "exercise_127", name: "Pull Throughs", muscle: "Glutes", category: "Compound", difficulty: 2},
    {class: "exercise_128", name: "Pull-Overs", muscle: "Lats", category: "Isolation", difficulty: 2},
    {class: "exercise_129", name: "Pull-Ups", muscle: "Lats", category: "Compound", difficulty: 4},
    {class: "exercise_130", name: "Pull-Ups (Assisted)", muscle: "Lats", category: "Compound", difficulty: 2},
    {class: "exercise_131", name: "Push Press", muscle: "Shoulders", category: "Compound", difficulty: 2},
    {class: "exercise_132", name: "Push-Ups", muscle: "Chest", category: "Compound", difficulty: 2},
    {class: "exercise_133", name: "Renegade Rows", muscle: "Upper Back", category: "Compound", difficulty: 3},
    {class: "exercise_134", name: "Reverse Flys", muscle: "Upper Back", category: "Isolation", difficulty: 1},
    {class: "exercise_135", name: "Reverse Hypers", muscle: "Lower Back", category: "Isolation", difficulty: 2},
    {class: "exercise_136", name: "Reverse Lunges", muscle: "Quads", category: "Compound", difficulty: 2},
    {class: "exercise_137", name: "Reverse Sled Drag", muscle: "Quads", category: "Compound", difficulty: 2},
    {class: "exercise_138", name: "Roll-Outs", muscle: "Abdominals", category: "Compound", difficulty: 3},
    {class: "exercise_139", name: "Romanian Deadlift", muscle: "Hamstrings", category: "Compound", difficulty: 2},
    {class: "exercise_140", name: "Rope Climbs", muscle: "Biceps", category: "Compound", difficulty: 5},
    {class: "exercise_141", name: "Rowing", muscle: "Upper Back", category: "Cardio", difficulty: 2},
    {class: "exercise_142", name: "Russian Twists", muscle: "Obliques", category: "Compound", difficulty: 2},
    {class: "exercise_143", name: "Scissor Kicks", muscle: "Abdominals", category: "Isolation", difficulty: 2},
    {class: "exercise_144", name: "Seal Rows", muscle: "Upper Back", category: "Compound", difficulty: 1},
    {class: "exercise_145", name: "Seated Calf Raises", muscle: "Calves", category: "Isolation", difficulty: 1},
    {class: "exercise_146", name: "Seated Hip Abductions", muscle: "Abductors", category: "Isolation", difficulty: 1},
    {class: "exercise_147", name: "Seated Hip Adductions", muscle: "Adductors", category: "Isolation", difficulty: 1},
    {class: "exercise_148", name: "Seated Incline Bicep Curl", muscle: "Biceps", category: "Isolation", difficulty: 1},
    {class: "exercise_149", name: "Seated Overhead Press", muscle: "Shoulders", category: "Compound", difficulty: 1},
    {class: "exercise_150", name: "Seated Rows", muscle: "Upper Back", category: "Compound", difficulty: 1},
    {class: "exercise_151", name: "Shin Curls", muscle: "Anterior Tibialis", category: "Isolation", difficulty: 1},
    {class: "exercise_152", name: "Shin Hops", muscle: "Glutes", category: "Plyometric", difficulty: 5},
    {class: "exercise_153", name: "Shoulder External Rotations", muscle: "Shoulders", category: "Isolation", difficulty: 1},
    {class: "exercise_154", name: "Shoulder Internal Rotations", muscle: "Shoulders", category: "Isolation", difficulty: 1},
    {class: "exercise_155", name: "Shoulder Taps", muscle: "Obliques", category: "Compound", difficulty: 2},
    {class: "exercise_156", name: "Shrugs", muscle: "Traps", category: "Isolation", difficulty: 1},
    {class: "exercise_157", name: "Side Bends", muscle: "Obliques", category: "Isolation", difficulty: 1},
    {class: "exercise_158", name: "Side Lying Hip Abductions", muscle: "Abductors", category: "Isolation", difficulty: 1},
    {class: "exercise_159", name: "Side Plank Clamshells", muscle: "Abductors", category: "Compound", difficulty: 2},
    {class: "exercise_160", name: "Side Plank Pulses", muscle: "Obliques", category: "Isolation", difficulty: 2},
    {class: "exercise_161", name: "Side Planks", muscle: "Obliques", category: "Isometric", difficulty: 2},
    {class: "exercise_162", name: "Single-Arm Farmer's Walk", muscle: "Obliques", category: "Isolation", difficulty: 2},
    {class: "exercise_163", name: "Single-Arm Landmine Press", muscle: "Shoulders", category: "Compound", difficulty: 2},
    {class: "exercise_164", name: "Single-Arm Lat Pulldown", muscle: "Lats", category: "Compound", difficulty: 1},
    {class: "exercise_165", name: "Single-Arm Overhead Press", muscle: "Shoulders", category: "Compound", difficulty: 1},
    {class: "exercise_166", name: "Single-Arm Rows", muscle: "Upper Back", category: "Compound", difficulty: 2},
    {class: "exercise_167", name: "Single-Arm Snatch", muscle: "Shoulders", category: "Power", difficulty: 4},
    {class: "exercise_168", name: "Single-Leg Box Squats", muscle: "Quads", category: "Compound", difficulty: 3},
    {class: "exercise_169", name: "Single-Leg Calf Raises", muscle: "Calves", category: "Isolation", difficulty: 2},
    {class: "exercise_170", name: "Single-Leg Glute Bridges", muscle: "Glutes", category: "Compound", difficulty: 2},
    {class: "exercise_171", name: "Single-Leg Hip Thrusters", muscle: "Glutes", category: "Compound", difficulty: 3},
    {class: "exercise_172", name: "Single-Leg Leg Press", muscle: "Quads", category: "Compound", difficulty: 2},
    {class: "exercise_173", name: "Single-Leg Romanian Deadlift", muscle: "Hamstrings", category: "Compound", difficulty: 3},
    {class: "exercise_174", name: "Sissy Squats", muscle: "Quads", category: "Compound", difficulty: 2},
    {class: "exercise_175", name: "Sit-Ups", muscle: "Abdominals", category: "Isolation", difficulty: 2},
    {class: "exercise_176", name: "Sit-Ups w/ Ball Toss", muscle: "Abdominals", category: "Power", difficulty: 3},
    {class: "exercise_177", name: "Ski Erg", muscle: "Lats", category: "Cardio", difficulty: 1},
    {class: "exercise_178", name: "Skull Crushers", muscle: "Triceps", category: "Isolation", difficulty: 1},
    {class: "exercise_179", name: "Sled Drag", muscle: "Quads", category: "Compound", difficulty: 1},
    {class: "exercise_180", name: "Sled Pulls", muscle: "Upper Back", category: "Compound", difficulty: 2},
    {class: "exercise_181", name: "Sled Push", muscle: "Quads", category: "Compound", difficulty: 2},
    {class: "exercise_182", name: "Sledgehammer Strikes", muscle: "Abdominals", category: "Power", difficulty: 3},
    {class: "exercise_183", name: "Snatch", muscle: "Quads", category: "Power", difficulty: 5},
    {class: "exercise_184", name: "Snatch High Pull", muscle: "Hamstrings", category: "Power", difficulty: 3},
    {class: "exercise_185", name: "Snatch Pull", muscle: "Hamstrings", category: "Power", difficulty: 3},
    {class: "exercise_186", name: "Speed Skater Jumps", muscle: "Quads", category: "Plyometric", difficulty: 3},
    {class: "exercise_187", name: "Squeeze Press", muscle: "Chest", category: "Compound", difficulty: 2},
    {class: "exercise_188", name: "Stairmaster", muscle: "Quads", category: "Cardio", difficulty: 2},
    {class: "exercise_189", name: "Standing High-To-Low Twist", muscle: "Obliques", category: "Compound", difficulty: 2},
    {class: "exercise_190", name: "Standing Hip Abductions", muscle: "Abductors", category: "Isolation", difficulty: 1},
    {class: "exercise_191", name: "Standing Hip Adductions", muscle: "Adductors", category: "Isolation", difficulty: 1},
    {class: "exercise_192", name: "Standing Hip Extensions", muscle: "Glutes", category: "Isolation", difficulty: 1},
    {class: "exercise_193", name: "Standing Horizontal Press", muscle: "Shoulders", category: "Compound", difficulty: 1},
    {class: "exercise_194", name: "Standing Leg Curls", muscle: "Hamstrings", category: "Isolation", difficulty: 2},
    {class: "exercise_195", name: "Standing Overhead Press", muscle: "Shoulders", category: "Compound", difficulty: 1},
    {class: "exercise_196", name: "Step-Ups", muscle: "Quads", category: "Compound", difficulty: 1},
    {class: "exercise_197", name: "Stir-The-Pot", muscle: "Abdominals", category: "Isometric", difficulty: 3},
    {class: "exercise_198", name: "Straight-Arm Lat Pulldown", muscle: "Lats", category: "Isolation", difficulty: 1},
    {class: "exercise_199", name: "Supermans", muscle: "Lower Back", category: "Isometric", difficulty: 2},
    {class: "exercise_200", name: "Thrusters", muscle: "Quads", category: "Compound", difficulty: 3},
    {class: "exercise_201", name: "Toes-To-Bar", muscle: "Abdominals", category: "Isolation", difficulty: 4},
    {class: "exercise_202", name: "Treadmill", muscle: "Quads", category: "Cardio", difficulty: 1},
    {class: "exercise_203", name: "Tricep Kickbacks", muscle: "Triceps", category: "Isolation", difficulty: 1},
    {class: "exercise_204", name: "Tricep Pushdowns", muscle: "Triceps", category: "Isolation", difficulty: 1},
    {class: "exercise_205", name: "Turkish Get-Up", muscle: "Shoulder", category: "Compound", difficulty: 4},
    {class: "exercise_206", name: "Upright Rows", muscle: "Traps", category: "Compound", difficulty: 1},
    {class: "exercise_207", name: "Waiter's Walk", muscle: "Shoulders", category: "Isometric", difficulty: 2},
    {class: "exercise_208", name: "Walking Lunges", muscle: "Quads", category: "Compound", difficulty: 2},
    {class: "exercise_209", name: "Wall Balls", muscle: "Quads", category: "Power", difficulty: 3},
    {class: "exercise_210", name: "Wall Sit", muscle: "Quads", category: "Isometric", difficulty: 2},
    {class: "exercise_211", name: "Windshield Wipers", muscle: "Obliques", category: "Isolation", difficulty: 2},
    {class: "exercise_212", name: "Wrist Roller", muscle: "Forearms", category: "Isolation", difficulty: 1},
    {class: "exercise_213", name: "Zercher Squats", muscle: "Quads", category: "Compound", difficulty: 3},
    {class: "exercise_214", name: "Z-Press", muscle: "Shoulders", category: "Compound", difficulty: 2},
];

const radio_1 = document.querySelector('.abdominals');
radio_1.addEventListener('click', abdominals_filter);

function abdominals_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only abdominals exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.muscle === "Abdominals") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_2 = document.querySelector('.abductors');
radio_2.addEventListener('click', abductors_filter);

function abductors_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only abductor exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.muscle === "Abductors") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_3 = document.querySelector('.adductors');
radio_3.addEventListener('click', adductors_filter);

function adductors_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only adductor exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.muscle === "Adductors") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_4 = document.querySelector('.anterior_tibialis');
radio_4.addEventListener('click', anterior_tibialis_filter);

function anterior_tibialis_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only anterior tibialis exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.muscle === "Anterior Tibialis") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_5 = document.querySelector('.biceps');
radio_5.addEventListener('click', biceps_filter);

function biceps_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only biceps exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.muscle === "Biceps") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_6 = document.querySelector('.calves');
radio_6.addEventListener('click', calves_filter);

function calves_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only calf exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.muscle === "Calves") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_7 = document.querySelector('.chest');
radio_7.addEventListener('click', chest_filter);

function chest_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only chest exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.muscle === "Chest") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_8 = document.querySelector('.forearms');
radio_8.addEventListener('click', forearms_filter);

function forearms_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only forearm exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.muscle === "Forearms") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_9 = document.querySelector('.glutes');
radio_9.addEventListener('click', glutes_filter);

function glutes_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only glute exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.muscle === "Glutes") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_10 = document.querySelector('.hamstrings');
radio_10.addEventListener('click', hamstrings_filter);

function hamstrings_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only hamstring exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.muscle === "Hamstrings") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_11 = document.querySelector('.lats');
radio_11.addEventListener('click', lats_filter);

function lats_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only lat exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.muscle === "Lats") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_12 = document.querySelector('.lower_back');
radio_12.addEventListener('click', lower_back_filter);

function lower_back_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only lower back exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.muscle === "Lower Back") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_13 = document.querySelector('.obliques');
radio_13.addEventListener('click', obliques_filter);

function obliques_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only oblique exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.muscle === "Obliques") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_14 = document.querySelector('.quads');
radio_14.addEventListener('click', quads_filter);

function quads_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only quad exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.muscle === "Quads") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_15 = document.querySelector('.shoulders');
radio_15.addEventListener('click', shoulders_filter);

function shoulders_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only shoulder exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.muscle === "Shoulders") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_16 = document.querySelector('.traps');
radio_16.addEventListener('click', traps_filter);

function traps_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only trap exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.muscle === "Traps") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_17 = document.querySelector('.triceps');
radio_17.addEventListener('click', triceps_filter);

function triceps_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only tricep exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.muscle === "Triceps") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_18 = document.querySelector('.upper_back');
radio_18.addEventListener('click', upper_back_filter);

function upper_back_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only upper back exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.muscle === "Upper Back") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

// Categories:

const radio_20 = document.querySelector('.cardio');
radio_20.addEventListener('click', cardio_filter);

function cardio_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only cardio exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.category === "Cardio") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_21 = document.querySelector('.compound');
radio_21.addEventListener('click', compound_filter);

function compound_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only compound exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.category === "Compound") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_22 = document.querySelector('.isolation');
radio_22.addEventListener('click', isolation_filter);

function isolation_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only isolation exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.category === "Isolation") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_23 = document.querySelector('.isometric');
radio_23.addEventListener('click', isometric_filter);

function isometric_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only isometric exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.category === "Isometric") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_24 = document.querySelector('.plyometric');
radio_24.addEventListener('click', plyometric_filter);

function plyometric_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only plyometric exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.category === "Plyometric") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_25 = document.querySelector('.power');
radio_25.addEventListener('click', power_filter);

function power_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only power exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.category === "Power") {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}


// Difficulties:

const radio_27 = document.querySelector('.diff_1');
radio_27.addEventListener('click', diff_1_filter);

function diff_1_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only difficulty 1 exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.difficulty === 1) {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_28 = document.querySelector('.diff_2');
radio_28.addEventListener('click', diff_2_filter);

function diff_2_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only difficulty 2 exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.difficulty === 2) {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_29 = document.querySelector('.diff_3');
radio_29.addEventListener('click', diff_3_filter);

function diff_3_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only difficulty 3 exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.difficulty === 3) {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_30 = document.querySelector('.diff_4');
radio_30.addEventListener('click', diff_4_filter);

function diff_4_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only difficulty 4 exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.difficulty === 4) {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}

const radio_31 = document.querySelector('.diff_5');
radio_31.addEventListener('click', diff_5_filter);

function diff_5_filter() {

    // hide all exercises:
    const all_exercises = document.querySelectorAll(".exercise_content")
    all_exercises.forEach(exercise_content => {
        exercise_content.style.display = "none"
    });

    // show only difficulty 5 exercises:
    list_of_all_exercises.forEach(exercise => {
        if (exercise.difficulty === 5) {
            const divs = document.querySelectorAll(`div.${exercise.class}`);
            divs.forEach(div => {
                div.style.display = "block";
            });
        }
    });
}


// EXERCISE FILTER FOR SEARCH BAR...
document.querySelector('#search').addEventListener('input', function (e) {
    const input = e.target.value.toLowerCase();
    const exercise_names = document.querySelectorAll('.exercise_name');
    exercise_names.forEach(exercise_name => {
        const exercise_name_text = exercise_name.textContent.toLowerCase();
        if (exercise_name_text.indexOf(input) != -1) {
            exercise_name.parentElement.parentElement.parentElement.style.display = 'block';
        } else {
            exercise_name.parentElement.parentElement.parentElement.style.display = 'none';
        }
    });
});


// CHANGES THE TEXT OF THE "SHOW IMAGES" BUTTON WHEN CLICKED ON...
const btn = document.getElementsByClassName('show_images');
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function handleClick(event) {
        const button = event.target;
        const initialText = '+ Images';

        if (button.textContent.toLowerCase().includes(initialText.toLowerCase())) {
            button.textContent = '- Images';
        } else {
            button.textContent = initialText;
        }
    });
};


// CHANGES THE TEXT OF THE "ADD TO WORKOUT" BUTTON WHEN CLICKED ON...
const btn2 = document.getElementsByClassName('add_to_workout_button');
for (let i = 0; i < btn2.length; i++) {
    btn2[i].addEventListener('click', function handleClick(event) {
        const button = event.target;
        const initialText = 'Add To Workout';

        if (button.textContent.toLowerCase().includes(initialText.toLowerCase())) {
            button.textContent = 'Added!';
        } else {
            button.textContent = initialText;
        }
    });
};



document.addEventListener("DOMContentLoaded", function() {
    //Function 1 - Applies functionality to the "Load More" button:
    const container = document.getElementById("exercise-list");
    const load_more_button = document.getElementById("load-more-button");
    const exercises_per_load = 20;
    let loaded_exercises = 0;

    function show_next_exercises() {
        const all_exercises = container.querySelectorAll(".exercise_content");
        const total_exercises = all_exercises.length;
        let end = Math.min(loaded_exercises + exercises_per_load, total_exercises);

        for (let i = loaded_exercises; i < end; i++) {
            all_exercises[i].style.display = "block";
        }

        loaded_exercises = end;

        if (loaded_exercises >= total_exercises) {
            load_more_button.style.display = "none";
        }
      
    }

    // Function 2 - Applies functionality to the "All" radio buttons:
    function show_exercises() {
        const all_exercises = container.querySelectorAll(".exercise_content");
        const total_exercises = all_exercises.length;
  
        if (document.querySelector(".radio-all:checked")) {
          // Show only the first 20 exercises for the "All" option
          for (let i = 0; i < total_exercises; i++) {
            all_exercises[i].style.display = i < exercises_per_load ? "block" : "none";
          }
          loaded_exercises = exercises_per_load;
          load_more_button.style.display = loaded_exercises < total_exercises ? "block" : "none";
        }
      }

    // Function 3 - Applies functionality to the "Show Images" button:
    function toggleExtraImages(event) {
        event.preventDefault();
        const exerciseContent = this.closest(".exercise_content");
        const extraImagesDiv = exerciseContent.querySelector(".extra_images");
        extraImagesDiv.classList.toggle("hidden");
        }

    // Function 4 - Applies functionality to the "Filters" button:
    const filtersButton = document.getElementById("filter-button");
    const filtersContainer = document.getElementById("navbar");
  
    filtersButton.addEventListener("click", function () {
      filtersContainer.classList.toggle("show");
    });

    // Function 5 - Applies functionality to the "Back To Top" button:
    const backToTopButton = document.getElementById("back-to-top-button");

    // Function to show/hide the button based on the user's scroll position
    function toggleBackToTopButton() {
        if (window.scrollY > 300) { // Show the button when the user scrolls down 300px
        backToTopButton.style.display = "block";
        } else {
        backToTopButton.style.display = "none";
        }
    }

    // Function to scroll the user back to the top when the button is clicked
    function scrollToTop() {
        window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling animation
        });
    }

  // Add a scroll event listener to show/hide the button based on the user's scroll position
  window.addEventListener("scroll", toggleBackToTopButton);

  // Add a click event listener to scroll the user back to the top when the button is clicked
  backToTopButton.addEventListener("click", scrollToTop);

    // Call Function 1 & 2 once when the page is loaded:
    show_next_exercises();
    show_exercises();

    // Wait for user actions to call these functions:
    load_more_button.addEventListener("click", show_next_exercises);

    const radio_all_buttons = document.querySelectorAll(".radio-all");
    radio_all_buttons.forEach(function (radio_all_button) {
        radio_all_button.addEventListener("change", show_exercises);});

    const showButtons = document.querySelectorAll(".show_images");
    showButtons.forEach(button => {
        button.addEventListener("click", toggleExtraImages);});
    
});


// Applies functionality to the "Add To Workout" button:
document.querySelectorAll('.add_to_workout_button').forEach(button => {
    button.addEventListener('click', function() {
        let exerciseName = this.closest('.exercise_content').querySelector('.exercise_name').textContent;
        let currentExercises = JSON.parse(localStorage.getItem('selectedExercises') || '[]');
        if (!currentExercises.includes(exerciseName)) {
            currentExercises.push(exerciseName);
            localStorage.setItem('selectedExercises', JSON.stringify(currentExercises));
        }
    });
});