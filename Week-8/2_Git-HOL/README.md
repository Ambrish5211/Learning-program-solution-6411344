# Git Hands-on 2

```bash
Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/2_Git-HOL/GitDemo
$ git init
Initialized empty Git repository in C:/Users/Ambrish Kumar/Desktop/Week8_Git/2_Git-HOL/GitDemo/.git/

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/2_Git-HOL/GitDemo (main)
$ git status
On branch main

No commits yet

Untracked files:
(use "git add <file>..." to include in what will be committed)
.gitignore

nothing added to commit but untracked files present (use "git add" to track)

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/2_Git-HOL/GitDemo (main)
$ git add .gitignore

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/2_Git-HOL/GitDemo (main)
$ git commit -m "added .gitignore file"
[main (root-commit) 35d9f77] added .gitignore file
1 file changed, 2 insertions(+)
create mode 100644 .gitignore

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/2_Git-HOL/GitDemo (main)
$ echo "This is a log file" > test.log

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/2_Git-HOL/GitDemo (main)
$ mkdir log

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/2_Git-HOL/GitDemo (main)
$ echo "Log folder content" >> log/sample.txt

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/2_Git-HOL/GitDemo (main)
$ git status
On branch main
nothing to commit, working tree clean

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/2_Git-HOL/GitDemo (main)
$ echo "This file has been pushed, and all files listed in .gitignore are ignored" >> check.txt

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/2_Git-HOL/GitDemo (main)
$ git status
On branch main
Untracked files:
(use "git add <file>..." to include in what will be committed)
 check.txt

nothing added to commit but untracked files present (use "git add" to track)

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/2_Git-HOL/GitDemo (main)
$ git add check.txt
warning: in the working copy of 'check.txt', LF will be replaced by CRLF the next time Git touches it

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/2_Git-HOL/GitDemo (main)
$ git commit -m "Ignore log files and log folder"
[main be9d9bb] Ignore log files and log folder
1 file changed, 1 insertion(+)
create mode 100644 check.txt

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/2_Git-HOL/GitDemo (main)
$ git status
On branch main
nothing to commit, working tree clean

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/2_Git-HOL/GitDemo (main)
$ git remote add origin https://github.com/Md-Arbaz03/my-demo.git

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/2_Git-HOL/GitDemo (main)
$ git pull origin main --allow-unrelated-histories
remote: Enumerating objects: 15, done.
remote: Counting objects: 100% (15/15), done.
remote: Compressing objects: 100% (9/9), done.
remote: Total 15 (delta 3), reused 9 (delta 1), pack-reused 0 (from 0)
Unpacking objects: 100% (15/15), 2.54 KiB | 17.00 KiB/s, done.
From https://github.com/Md-Arbaz03/my-demo

- branch main -> FETCH_HEAD
- [new branch] main -> origin/main
  Merge made by the 'ort' strategy.
  README.md | 9 +++++++++
  app.js | 0
  index.html | 0
  style.css | 0
  welcome.txt | 1 +
  5 files changed, 10 insertions(+)
  create mode 100644 README.md
  create mode 100644 app.js
  create mode 100644 index.html
  create mode 100644 style.css
  create mode 100644 welcome.txt

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/2_Git-HOL/GitDemo (main)
Counting objects: 100% (9/9), done.
Delta compression using up to 8 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (8/8), 902 bytes | 300.00 KiB/s, done.
Total 8 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/Md-Arbaz03/my-demo.git
a9a5fa1..7a314c7 main -> main

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/2_Git-HOL/GitDemo