import { stdin, stdout } from 'process';

class UI {
  constructor() {
    this.input = stdin;
    this.output = stdout;

    this.input.setEncoding('utf8');
  }

  writeInLine(text) {
    this.output.write(text);
  }

  listen(fn) {
    this.input.addListener('data', data => {
      fn(data.trim());
    });
  }
}

export default new UI();
