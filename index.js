//KET SECTION START

const selectKet = document.getElementById("selectKet");
const parametersKet = document.getElementById("parametersKet");

selectKet.addEventListener('click', function () {
    parametersKet.classList.toggle("hiddenKet");
});

const calculateKet = document.getElementById("calculateKet");

const listeningKetInput = document.getElementById("listeningKetInput");
const readingWritingKetInput = document.getElementById("readingWritingKetInput");
const speakingKetInput = document.getElementById("speakingKetInput");

const ketErrorMessaging = document.getElementById("ketErrorMessaging");

const averageScoreKet = document.getElementById("averageScoreKet");

const listeningKetResult = document.getElementById("listeningKetResult");
const readingWritingKetResult = document.getElementById("readingWritingKetResult");
const speakingKetResult = document.getElementById("speakingKetResult");

const gradeKet = document.getElementById("gradeKet");

ketListening = {
    25: 150,
    24: 145,
    23: 140,
    22: 137,
    21: 133,
    20: 130,
    19: 127,
    18: 123,
    17: 120,
    16: 117,
    15: 113,
    14: 110,
    13: 107,
    12: 103,
    11: 100,
    10: 96,
    9: 93,
    8: 89,
    7: 86,
    6: 82,
    5: 68,
    4: 55,
    3: 41,
    2: 27,
    1: 14,
    0: 0
};

ketReadingWriting = {
    60: 150,
    59: 148,
    58: 146,
    57: 144,
    56: 142,
    55: 140,
    54: 137,
    53: 135,
    52: 133,
    51: 131,
    50: 130,
    49: 129,
    48: 128,
    47: 127,
    46: 126,
    45: 125,
    43: 124,
    42: 123,
    41: 121,
    40: 120,
    39: 119,
    38: 118,
    37: 117,
    36: 116,
    35: 115,
    34: 114,
    33: 113,
    32: 112,
    31: 111,
    30: 110,
    29: 108,
    28: 106,
    27: 104,
    26: 102,
    25: 100,
    24: 98,
    23: 96,
    22: 94,
    21: 92,
    20: 90,
    19: 89,
    18: 88,
    17: 86,
    16: 85,
    15: 84,
    14: 83,
    13: 82,
    12: 80,
    0: 0
};

ketSpeaking = {
    45: 150,
    44: 148,
    43: 145,
    42: 143,
    41: 140,
    40: 139,
    39: 137,
    38: 136,
    37: 134,
    36: 133,
    35: 131,
    34: 130,
    33: 129,
    32: 127,
    31: 126,
    30: 124,
    29: 123,
    28: 121,
    27: 120,
    26: 118,
    25: 116,
    24: 113,
    23: 111,
    22: 109,
    21: 107,
    20: 104,
    19: 102,
    18: 100,
    17: 98,
    16: 96,
    15: 93,
    14: 90,
    13: 87,
    12: 74,
    11: 62,
    10: 49,
    9: 37,
    8: 25,
    7: 12,
    0: 0
};

function calculateListeningScoreKet(inputValue) {
    let result = ketListening[inputValue];
    if (inputValue >= 26) {
        ketErrorMessaging.textContent = "The max score for KET Listening cannot exceed 25 points.";
        result = "Error";
    }
    return result;
}

function calculateReadingWritingScoreKet(inputValue) {
    let result = ketReadingWriting[inputValue];
    if (inputValue < 12) {
        result = 0;
    }
    else if (inputValue >= 61) {
        ketErrorMessaging.textContent = "The max score for KET Reading&Writing cannot exceed 60 points.";
        result = "Error";
    }
    return result;
}

function calculateSpeakingScoreKet(inputValue) {
    let result = ketSpeaking[inputValue];
    if (inputValue < 7) {
        result = 0;
    }
    else if (inputValue >= 46) {
        ketErrorMessaging.textContent = "The max score for KET Speaking cannot exceed 45 points.";
        result = "Error";
    }
    return result;
}

calculateKet.addEventListener('click', function () {
    const resultListening = calculateListeningScoreKet(Number(listeningKetInput.value));
    const resultReadingWriting = calculateReadingWritingScoreKet(Number(readingWritingKetInput.value));
    const resultSpeaking = calculateSpeakingScoreKet(Number(speakingKetInput.value));

    listeningKetResult.textContent = resultListening;
    readingWritingKetResult.textContent = resultReadingWriting;
    speakingKetResult.textContent = resultSpeaking;

    const averageKetResult = Math.round((0.25 * resultListening) + (0.50 * resultReadingWriting) + (0.25 * resultSpeaking));
    averageScoreKet.textContent = averageKetResult;

    if (averageKetResult >= 140) {
        gradeKet.textContent = "Grade A (B1 level)";
    }
    else if (averageKetResult >= 133) {
        gradeKet.textContent = "Grade B (A2 level)";
    }
    else if (averageKetResult >= 120) {
        gradeKet.textContent = "Grade C (A2 level)";
    }
    else {
        gradeKet.textContent = "A1 level";
    }
});

//KET SECTION END

//PET SECTION START
const selectPet = document.getElementById("selectPet");
const parametersPet = document.getElementById("parametersPet");

selectPet.addEventListener('click', function () {
    parametersPet.classList.toggle("hiddenPet");
});

const calculatePet = document.getElementById("calculatePet");

const listeningPetInput = document.getElementById("listeningPetInput");
const readingPetInput = document.getElementById("readingPetInput");
const writingPetInput = document.getElementById("writingPetInput");
const speakingPetInput = document.getElementById("speakingPetInput");

const petErrorMessaging = document.getElementById("petErrorMessaging");

const averageScorePet = document.getElementById("averageScorePet");

const listeningPetResult = document.getElementById("listeningPetResult");
const readingPetResult = document.getElementById("readingPetResult");
const writingPetResult = document.getElementById("writingPetResult");
const speakingPetResult = document.getElementById("speakingPetResult");

const gradePet = document.getElementById("gradePet");

petListening = {
    25: 170,
    24: 165,
    23: 160,
    22: 156,
    21: 152,
    20: 148,
    19: 144,
    18: 140,
    17: 137,
    16: 134,
    15: 131,
    14: 129,
    13: 126,
    12: 123,
    11: 120,
    10: 117,
    9: 114,
    8: 111,
    7: 108,
    6: 105,
    5: 102,
    4: 82,
    3: 61,
    2: 41,
    1: 20,
    0: 0
};

petReading = {
    32: 170,
    31: 167,
    30: 163,
    29: 160,
    28: 157,
    27: 153,
    26: 150,
    25: 147,
    24: 143,
    23: 140,
    22: 138,
    21: 136,
    20: 134,
    19: 132,
    18: 130,
    17: 128,
    16: 126,
    15: 124,
    14: 122,
    13: 120,
    12: 118,
    11: 116,
    10: 113,
    9: 111,
    8: 109,
    7: 107,
    6: 104,
    5: 102,
    4: 82,
    3: 61,
    2: 41,
    1: 20,
    0: 0
};

petWriting = {
    40: 170,
    39: 168,
    38: 167,
    37: 165,
    36: 163,
    35: 162,
    34: 160,
    33: 158,
    32: 156,
    31: 154,
    30: 152,
    29: 150,
    28: 148,
    27: 146,
    26: 144,
    25: 142,
    24: 140,
    23: 138,
    22: 135,
    21: 133,
    20: 130,
    19: 128,
    18: 125,
    17: 123,
    16: 120,
    15: 117,
    14: 114,
    13: 111,
    12: 108,
    11: 105,
    10: 102,
    9: 92,
    8: 82,
    7: 71,
    6: 61,
    5: 51,
    4: 41,
    3: 31,
    2: 20,
    1: 10,
    0: 0
};

petSpeaking = {
    30: 170,
    29: 167,
    28: 163,
    27: 160,
    26: 158,
    25: 156,
    24: 153,
    23: 151,
    22: 149,
    21: 147,
    20: 144,
    19: 142,
    18: 140,
    17: 137,
    16: 133,
    15: 130,
    14: 127,
    13: 123,
    12: 120,
    11: 116,
    10: 113,
    9: 109,
    8: 106,
    7: 102,
    6: 87,
    5: 73,
    4: 58,
    3: 44,
    2: 29,
    1: 15,
    0: 0
};

function calculateListeningScorePet(inputValue) {
    let result = petListening[inputValue];
    if (inputValue >= 26) {
        petErrorMessaging.textContent = "The max score for PET Listening cannot exceed 25 points.";
        result = "Error";
    } 
    return result;
}

function calculateReadingScorePet(inputValue){
    let result = petReading[inputValue];
    if(inputValue >= 33) {
        petErrorMessaging.textContent = "The max score for PET Reading cannot exceed 32 points.";
        result = "Error";
    }
    return result;
}

function calculateWritingScorePet(inputValue){
    let result = petWriting[inputValue];
    if(inputValue >= 41) {
        petErrorMessaging.textContent = "The max score for PET Writing cannot exceed 40 points.";
        result = "Error";
    }
    return result;
}

function calculateSpeakingScorePet(inputValue){
    let result = petSpeaking[inputValue];
    if(inputValue >= 31) {
        petErrorMessaging.textContent = "The max score for PET Speaking cannot exceed 30 points.";
        result = "Error";
    }
    return result;
}

calculatePet.addEventListener('click', function () {
    const resultListening = calculateListeningScorePet(Number(listeningPetInput.value));
    const resultReading = calculateReadingScorePet(Number(readingPetInput.value));
    const resultWriting = calculateWritingScorePet(Number(writingPetInput.value));
    const resultSpeaking = calculateSpeakingScorePet(Number(speakingPetInput.value));

    listeningPetResult.textContent = resultListening;
    readingPetResult.textContent = resultReading;
    writingPetResult.textContent = resultWriting;
    speakingPetResult.textContent = resultSpeaking;

    const averagePetResult = Math.round((0.25 * resultListening) + (0.25 * resultReading) + (0.25 * resultWriting) + (0.25 * resultSpeaking));
    averageScorePet.textContent = averagePetResult;

    if (averagePetResult >= 160) {
        gradePet.textContent = "Grade A (B2 level)";
    }
    else if (averagePetResult >= 153) {
        gradePet.textContent = "Grade B (B1 level)";
    }
    else if (averagePetResult >= 140) {
        gradePet.textContent = "Grade C (B1 level)";
    }
    else if (averagePetResult >= 120) {
        gradePet.textContent = "A2 level";
    }
    else {
        gradePet.textContent = "A1 level";
    }
});

//PET SECTION END