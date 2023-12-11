import type { Attack, BandageInfo } from './types';

class Character {
  hp: number;
  hpLimit: number;
  live: boolean;
  
  constructor(health: number) {
    this.hp = health;
    this.hpLimit = health;
    this.live = true;
  }

  hit(amount: number) {
    this.hp = this.hp - amount <= 0 ? 0 : this.hp - amount;
    if (this.hp === 0) this.live = false;
  }

  heal(amount: number) {
    this.hp = this.hp + amount <= this.hpLimit ? this.hp + amount : this.hpLimit;
  }

  get status() {
    return this.live;
  }

  get health() {
    return this.hp;
  }
}

class Bandage {
  casting: number;
  recoveryTick: number;
  additionalRecovery: number;
  target: Character;
  successStreak: number;

  constructor(bandageInfo: BandageInfo, character: Character) {
    this.casting = bandageInfo[0];
    this.recoveryTick = bandageInfo[1];
    this.additionalRecovery = bandageInfo[2];
    this.target = character;
    this.successStreak = 0;
  }

  success() {
    this.target.heal(this.recoveryTick);
    this.successStreak++;
    if (this.successStreak === this.casting) {
      this.target.heal(this.additionalRecovery);
      this.successStreak = 0;
    }
  }

  failure() {
    this.successStreak = 0;
  }
}

export const solution = (bandage: BandageInfo, health: number, attacks: Attack[]) => {
  const battleRecord = new Map();
  const myCharacter = new Character(health);
  const skill = new Bandage(bandage, myCharacter);

  for (const attack of attacks) {
    battleRecord.set(attack[0], attack[1]);
  }

  for (let sec = 1; sec <= attacks[attacks.length - 1][0]; sec++) {
    const record = battleRecord.get(sec);

    if (record) {
      myCharacter.hit(record);
      skill.failure();
    } else {
      skill.success();
    }

    if (!myCharacter.status) return -1;
  }

  return myCharacter.health;
}