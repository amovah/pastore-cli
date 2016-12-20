# pastore-cli

You can keep your passwords safe, can't be worry about forget them.

Base on [pastore](https://github.com/amovah/pastore) module.

## Installation

### Recommended Installation:

1. Download latest version from [releases](https://github.com/amovah/pastore-cli/releases) page.
2. Extract it somewhere.
3. Enter directory and run `./install`.
4. You will need to set up the PATH environment variable in your terminal to have access to pastore-cli's binaries globally.

  Add `export PATH="$PATH:$HOME/.pastore-cli/bin"` to your profile (this may be in your .profile, .bashrc, .zshrc, etc.)

In this method, you don't need sudo to run commands.

### Install from Source

1. `git clone https://github.com/amovah/pastore-cli.git`
2. Enter directory and run `./createPackage`.
3. Then follow 2 from Recommended Installation.

### Alternative Way (Using NPM):

```
[sudo] npm install -g pastore-cli
```

In this method, maybe you need sudo to run commands.

## Usage

```
pastore --help
```

# LICENSE

MIT
