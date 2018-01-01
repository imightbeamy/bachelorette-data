function normalize(question) {
  var question = question.toLowerCase();
  if (question.indexOf('romantic present') != -1) {
    return 'What is the most romantic present you have ever given or received and why?';
  } else if (question.indexOf('party') != -1) {
    return "Would you describe yourself more as 'the party starter', 'the wingman' or 'the laid back one'?";
  } else if (question.indexOf('movie right now') != -1) {
    return "If you could watch any movie right now, what would it be, and why?";
  } else if (question.indexOf('best attributes') != -1) {
    return "What are your three best attributes?";
  } else if (question.indexOf('worst attributes') != -1) {
    return "What are your three worst attributes?";
  } else if (question.indexOf('someone else') != -1) {
    return "If you could be someone else for just one day, who would it be and why?";
  } else if (question.indexOf('favorite movies') != -1) {
    return "What are your top all-time favorite movies?";
  } else if (question.indexOf('childhood') != -1) {
    return "What is your favorite memory from your childhood?";
  } else if (question.indexOf('book') != -1) {
    return "What's your favorite book and why?";
  } else if (question.indexOf('outrageous') != -1) {
    return "What's the most outrageous thing you have ever done?";
  } else if (question.indexOf('lunch') != -1) {
    return "If you could have lunch with three people, alive or dead, who would it be and why?"
  } else if (question.indexOf('Meatloaf') != -1) {
    return 'Meatloaf said he would "do anything for love, but he won\'t do that." What will you not do?';
  } else if (question.indexOf('pursued') != -1) {
    return "Do you prefer a woman who wants to be pursued or a woman who pursues you and why?";
  } else if (question.indexOf('embarrassing moment') != -1) {
    return "What is your most embarrassing moment?";
  } else if (question.indexOf('embarrassing style') != -1) {
    return "What's the most embarrassing style you've rocked?";
  } else if (question.indexOf('trouble in the bedroom') != -1) {
    return "Ever have trouble in the bedroom? Or been turned on during the wrong time?";
  } else if (question.indexOf('craziest place') != -1) {
    return "Where is the craziest place you've had sex?";
  } else if (question.indexOf('bars') != -1) {
    return "Do you prefer \"hot spot\" type clubs or low-key bars and why?";
  } else if (question.indexOf('not tolerate') != -1) {
    return "If you were stranded on a desert island, what 3 things would you bring with you and why? And what under any circumstances could you not tolerate on that island?";
  } else if (question.indexOf('flower') != -1) {
    return "What's your favorite flower?";
  } else if (question.indexOf('team sports') != -1) {
    return "Do you prefer team sports or solo sports?";
  } else if (question.indexOf('romantic and why') != -1) {
    return "Do you consider yourself romantic and why?";
  } else if (question.indexOf('dancing') != -1) {
    return "Do you like to go out dancing? If yes, what is your preferred type of dancing";
  } else if (question.indexOf('go anywhere') != -1) {
    return  "If you could go anywhere in the U.S., where would you go and why?";
  } else if (question.indexOf('music') != -1 ||
             question.indexOf('favorite groups/artists') != -1) {
    return "What kind of music do you listen to most often?";
  } else if (question.indexOf('romantic') != -1 && question.indexOf('city') != -1) {
    return 'What city is the most romantic to you, and why?';
  } else if (question.indexOf('date fear') != -1) {
    return 'What is your biggest date fear?';
  } else if (question.indexOf('fear') != -1) {
    return 'Do you have any fears?';
  } else if (question.indexOf('pleasure') != -1) {
    return "What's your guilty pleasure?";
  } else if (question.indexOf('sport') != -1 && question.indexOf('play') != -1) {
    return 'What competitive sports did you play?';
  } else if (question.indexOf('favorite') != -1 && !question.indexOf('least') != -1) {
    return 'What are some of your favorite things?';
  }
  return question.trim();
}

module.exports = normalize;
