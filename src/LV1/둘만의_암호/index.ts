class Char {
  private _code: number;

  constructor(char: string) {
    this._code = char.charCodeAt(0);
  }

  increase() {
    this._code + 1 <= 122 ? this._code++ : this._code = 97;
  }

  get code() {
    return this._code;
  }

  get value() {
    return String.fromCharCode(this._code);
  }
}

export const solution = (s: string, skip: string, index: number) => {
  const codes = [...s].map(char => new Char(char));

  for (const code of codes) {
    let count = 0;

    while (count < index) {
      code.increase();
      if (!skip.includes(code.value)) count++;
    }
  }

  return codes.map(code => code.value).join('');
}