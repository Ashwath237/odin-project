const ash = {
  name: 'Ash',
  age: 20,
  brand: 'Avoedit Visions',
  camera: 'Samsung Galaxy A25',
  aesthetic: 'dark cinematic portrait',
  goals: [
    'Deploy REST API by October 31',
    'Solve 150 DSA problems by December',
    '8.5 CGPA in Semester 5',
    'VIT Vellore MCA 2027'
  ],
  
  shootPhoto: function() {
    console.log(`${this.name} is shooting on ${this.camera} with a ${this.aesthetic} aesthetic`);
  },
  editPhoto: function(){
    console.log(`${this.name} edits photos like really good with his ${this.camera}`);
  },
  displayGoals: function() {
    console.log(`${this.name}'s goals:`);
    this.goals.forEach(goal => console.log(`- ${goal}`));
  }
  };
  
ash.shootPhoto();
ash.editPhoto();
ash.displayGoals();
