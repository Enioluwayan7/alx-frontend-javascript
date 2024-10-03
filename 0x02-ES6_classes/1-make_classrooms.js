// Import the ClassRoom class from 0-classroom.js
import ClassRoom from './0-classroom.js';

// Implement the initializeRooms function
export function initializeRooms() {
  const roomSizes = [19, 20, 34]; // Array containing the sizes of the classrooms
  const classrooms = roomSizes.map(size => new ClassRoom(size)); // Create ClassRoom objects

  return classrooms; // Return the array of ClassRoom objects
}
