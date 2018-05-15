{
  const NUM_ELEVATORS = 10;
  const NUM_FLOORS = 15;

  class ElevatorController {

    constructor(numElevators, numFloors) {
      this.elevators = [];
      for(let i=0;i<numElevators;i++) {
        this.elevators.push(new Elevator(numFloors));
      }
      this.numFloors = numFloors;
    }

    request(fromFloor, toFloor) {
      const fromFloorIndex = fromFloor - 1;
      const toFloorIndex = toFloor - 1;
      const nearestIndex = this.findNearest(fromFloorIndex);

      const elevator = this.elevators[nearestIndex];

      // move the nearest elevator to the calling floor
      elevator.moveToFloor(fromFloorIndex);
      console.log("calling elevator " + (nearestIndex + 1) + " to floor " + (fromFloorIndex + 1));

      // board elevator and start moving
      elevator.startTrip();
      console.log("boarding elevator " + (nearestIndex + 1));

      // move the elevator to the requested floor
      console.log("elevator " + (nearestIndex + 1) + " going to floor " + (toFloorIndex + 1));
      elevator.moveToFloor(toFloorIndex);

      // unboard and end the trip
      elevator.endTrip();
      console.log("elevator " + (nearestIndex + 1) + " trip complete");

      console.log(elevator);

    }

    findNearest(floorIndex) {
      let nearestIndex;
      let shortestDist = this.numFloors + 1;
      for(let i=0;i<this.elevators.length;i++) {
        const currentDist = Math.abs(floorIndex - this.elevators[i].currentFloor);
        if (currentDist < shortestDist && this.elevators[i].isAvailable(floorIndex)) {
          shortestDist = currentDist;
          nearestIndex = i;
        }
      }
      return nearestIndex;
    }
  }

  class Elevator {

    constructor(numFloors) {
      this.numFloors = numFloors;
      this.maintenanceMode = false;
      this.numTripsMade = 0;
      this.numFloorsTraveled = 0;
      this.currentFloor = 0;
      this.occupied = false;
      this.moving = false;
      this.direction = null;
      this.destinationFloor = null;
    }

    startTrip() {
      this.openDoor();
      this.setOccupied(true);
      this.closeDoor();
      this.addTrip();
      this.setMoving(true);
      this.setDirection();
    }

    moveToFloor(floorIndex) {
      this.destinationFloor = floorIndex;
      while(this.currentFloor != this.destinationFloor) {
        this.setDirection();
        if (this.currentFloor < floorIndex) {
          this.goUp();
        } else {
          this.goDown();
        }
      }
    }

    endTrip() {
      this.openDoor();
      this.setOccupied(false);
      this.closeDoor();
      this.setDirection();
      this.setMoving(false);
    }

    goUp() {
      if (this.currentFloor < (this.numFloors - 1)) {
        this.currentFloor++;
        this.numFloorsTraveled++;
        console.log("going up to floor " + (this.currentFloor + 1));
      } else {
        console.log("this elevator doesn't go into the sky")
      }
    }

    goDown() {
      if (this.currentFloor > 0) {
        this.currentFloor--;
        this.numFloorsTraveled++;
        console.log("going down to floor " + (this.currentFloor + 1));
      } else {
        console.log("floor 1 is the lowest we go");
      }
    }

    openDoor() {
      console.log("opening door");
    }

    closeDoor() {
      console.log("closing door");
    }

    isAvailable(callingFloorIndex) {

      // available if not maintenance mode, not moving, and not occupied
      if (!this.maintenanceMode && !this.moving && !this.occupied) {
        return true;

      // also available if occupied and moving and callingFloor is
      // between the current and destination floors
      } else if (this.moving && this.occupied) {
          if (this.direction === "up" &&
              this.currentFloor < this.destinationFloor &&
              callingFloorIndex > this.currentFloor &&
              callingFloorIndex <= this.destinationFloor) {
                return true;
          } else if (this.direction === "down" &&
              this.currentFloor > this.destinationFloor &&
              callingFloorIndex < this.currentFloor &&
              callingFloorIndex >= this.destinationFloor) {
                return true;
          }
      }
      return false;
    }

    addTrip() {
      if (this.numTripsMade === 100) {
        this.maintenanceMode = true;
      } else {
        this.numTripsMade++;
      }
    }

    setDirection() {
      if (this.currentFloor === this.destinationFloor) {
        this.direction = null;
      } else {
        this.direction = this.currentFloor > this.destinationFloor ? "up" : "down";
      }
    }

    setOccupied(occupied) { this.occupied = occupied; }
    setMoving(moving) { this.moving = moving; }
  }

  const ec = new ElevatorController(NUM_ELEVATORS, NUM_FLOORS);
  ec.request(2, 7);
}
