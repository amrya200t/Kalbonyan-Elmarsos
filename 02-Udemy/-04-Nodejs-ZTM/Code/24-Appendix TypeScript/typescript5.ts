// interface
interface RobotArmy {
  count: number;
  type: string;
  magic: string;
}

// type RobotArmy = {
//   count: number;
//   type: string;
//   magic: string;
// };

let fightRobotArmy = (robots: RobotArmy) => {
  console.log("FIGHT!");
};

let fightRobotArmy2 = (robots: {
  count: number;
  type: string;
  magic: string;
}) => {
  console.log("FIGHT!");
};
