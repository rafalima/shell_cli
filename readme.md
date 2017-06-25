#Shell Cli

## Requirements

- Git
- Bash 4+

## Walkthrough

### Install latest bash

On OSX: Using Homebrew

```shell
brew install bash
```

If you use **oh-my-zsh** probably you'll need to execute the following commands
to fix any issue related to updating bash through Homebrew:

```shell
sudo -s
echo /usr/local/bin/bash >> /etc/shells
chsh -s /usr/local/bin/bash
```

### Git clone

This project must be cloned in the same folder where the other projects are, as such (i.e.):

### Add to PATH

You need to set up your $PATH variable to recgonize devcli in your terminal.
You can do this through *.bash_profile*, *.bashrc* or *.zshrc* (if you use ZSH). It's your choice :)

```shell
export PATH=$PATH:/path_to_your_root_folder/shell_cli
```

Restart your terminal and be happy :D
