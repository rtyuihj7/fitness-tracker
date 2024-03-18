// index.js

const fs = require('fs');

class FitnessTracker {
  constructor() {
    this.activities = [];
  }

  loadActivities() {
    try {
      const data = fs.readFileSync('data.json', 'utf8');
      this.activities = JSON.parse(data);
      console.log('Activities loaded successfully.');
    } catch (err) {
      console.error('Error loading activities:', err);
    }
  }

  saveActivities() {
    try {
      const data = JSON.stringify(this.activities, null, 2);
      fs.writeFileSync('data.json', data);
      console.log('Activities saved successfully.');
    } catch (err) {
      console.error('Error saving activities:', err);
    }
  }

  addActivity(activity) {
    this.activities.push(activity);
    this.saveActivities();
  }

  displayActivities() {
    console.log('Activities:');
    this.activities.forEach((activity, index) => {
      console.log(`${index + 1}. ${activity.name} - ${activity.duration} minutes`);
      console.log(`   Date: ${activity.date}`);
      console.log('-------------------------------------');
    });
  }
}

const fitnessTracker = new FitnessTracker();
fitnessTracker.loadActivities();
fitnessTracker.displayActivities();

// Example: Add a new activity
const newActivity = {
  name: 'Running',
  duration: 30,
  date: '2024-03-10'
};
fitnessTracker.addActivity(newActivity);
