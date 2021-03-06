---
path: "/shell-keyboard-shortcuts-02"
title: "Shell: Keyboard Shortcuts Pt. 2"
date: "2020-05-11"
---

This is part two of a series of posts on zsh/bash keyboard shortcuts. Let's dive right back in [where we left off last time](/shell-keyboard-shortcuts-01)!

## Navigating through the shell's history

The terminal shell stores input lines (possibly with timestamps) as text entries in history files. If you've ever used the <kbd>↑</kbd> or <kbd>↓</kbd> keys to cycle through recent commands, you've interacted with this file. The fact that these entries are saved to disk is what enables the seemingly-magical ability of the terminal to remember commands from many sessions past. It's just being read from a text tile!

Zsh and bash deal with this storage in different ways.

### BASH

When using bash, commands are written to the file indicated by the `$HISTFILE` environment variable, which is found in the `~/.bash_history` file. 

By default, bash keeps its history in memory and only writes to the history file when the shell exits or if the commands `history -a` or `history -w`  are executed. 

The difference between these two commands is that `history -a` will append the current session's commands to the end of the `$HISTFILE`, while `history -w` will **overwrite** the commands that were previously stored in the `$HISTILE`. It's important to be aware of this distinction to avoid losing your command history!

### ZSH

When using zsh, commands are also written to the file indicated by the `$HISTFILE` variable in your zsh configuration. My understanding is that commands are appended to this file as they are issued by default.

Zsh doesn't ship with a built-in default value for `$HISTFILE`, but as part of the setup wizard for new users the value defaults to `~/.histfile` unless a different value is specified.

I use `oh-my-zsh` for my shell, so my `$HISTFILE` variable is defined in `~/.oh-my-zsh/lib/history.zsh`.

If you aren't sure whether you are using `zsh` or `oh-my-zsh`, a quick look in your `~/.zshrc` file will help you figure out which you are using.

------

Both shells allow for customizing different aspects of the `$HISTFILE` such as the number of entries to keep in memory, the number of entries to keep in the history file, the format of the time-stamp to add to each entry (if any), and many others. 

We don't want to get too bogged down in the nitty-gritty of the `$HISTFILE` in this post, but suffice it to say that the shell offers granular control over how exactly the history file functions, should you need to customize some aspect of it to better suit your needs.

## Searching the history

Getting back to navigating through the shell's history, the <kbd>↑</kbd> and <kbd>↓</kbd> keys are only one of the methods available to us. These shortcuts can be super useful if what you're looking for was only a few commands back, but what if you want to find that crazy `cat | grep` you were using last week? You could just hold down the  <kbd>↑</kbd> key and hope that you find it eventually[^1], but there's a better way!

[^1]: We've all been there

You can search through the history file by using the <kbd>Ctrl</kbd> + <kbd>R</kbd> shortcut, which opens a backward search prompt.

- `bck-i-search` in zsh
- `reverse-i-seacrh` in bash

Once you've opened this prompt, <kbd>Ctrl</kbd> + <kbd>R</kbd> cycles through the search results that match whatever you've typed into the command line. Once you find the command you're looking for, press <kbd>Enter</kbd> to execute it.

To exit from the search press either <kbd>Ctrl</kbd> + <kbd>C</kbd> or <kbd>Ctrl</kbd> + <kbd>G</kbd>.

The backward search prompt looks through the shell history file to find the command you're looking for.

## Rewriting history

Sometimes you may want to remove an item from the history file. This can be accomplished in several different ways. 

First, you can edit the values in your `$HISTFILE` to remove whatever commands you don't want to keep. This can be achieved either in your text-editor of choice or with a command line utility (`sed` works well).

You can also use the `history` command to display your history:

```bash
$ history | tail -n 5
  496  mkdir testDir
  497  top-secret-command --password thisISmySECRETpassword
  498  cd
  499  ls -al
  500  history | tail -n 5

```

The `tail -n 5` command limits the results to the 5 most recent entries in the history file.

Each line is prefixed by its index in the history file. You can issue the `history -d <index>` command to remove any command from the history file.

## Avoiding history

There's also a trick you can use to avoid an entry being saved to the history file in the first place. Prefix your command with a space, and the command won't show up in the history file.

Note that in `zsh` you may need to add the `setopt HIST_IGNORE_SPACE` option in your `~/.zshrc` file to ensure that this behavior is enabled. It should be enabled by default if you're using `bash`.

------

I didn't include any discussion of the Windows command line or power shell, as I am not a Windows user and the Windows command line operates differently than on unix systems. 

If anyone has any good resources for learning the Windows command line, I'd be happy to include them here.