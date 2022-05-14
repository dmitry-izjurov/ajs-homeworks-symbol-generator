export default class Team {
  constructor() {
    this.char = [
      {
        name: 'Зомби', type: 'Zombie', health: 50, level: 1, attack: 40, defence: 10,
      },
      {
        name: 'Маг', type: 'Magican', health: 50, level: 1, attack: 40, defence: 10,
      },
      {
        name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10,
      },
    ];
  }

  * [Symbol.iterator]() {
    let current = 0;
    const last = this.char.length - 1;

    while (current <= last) {
      yield this.char[current];
      current += 1;
    }
  }
}

const command = new Team();

for (const unit of command) {
  console.log(unit);
}
