# Git Hands-on 1

```bash
Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/1_Git-HOL/GitDemo
$ git init
Initialized empty Git repository in C:/Users/Ambrish Kumar/Desktop/Week8_Git/1_Git-HOL/GitDemo/.git/

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/1_Git-HOL/GitDemo (main)
$ ls -al
total 4
drwxr-xr-x 1 Ambrish Kumar 197121 0 Aug 10 12:09 ./
drwxr-xr-x 1 Ambrish Kumar 197121 0 Aug 10 12:08 ../
drwxr-xr-x 1 Ambrish Kumar 197121 0 Aug 10 12:09 .git/

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/1_Git-HOL/GitDemo (main)
$ echo "Welcome to the version control" >> welcome.txt

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/1_Git-HOL/GitDemo (main)
$ ls -al
total 5
drwxr-xr-x 1 Ambrish Kumar 197121 0 Aug 10 12:10 ./
drwxr-xr-x 1 Ambrish Kumar 197121 0 Aug 10 12:08 ../
drwxr-xr-x 1 Ambrish Kumar 197121 0 Aug 10 12:09 .git/
-rw-r--r-- 1 Ambrish Kumar 197121 31 Aug 10 12:10 welcome.txt

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/1_Git-HOL/GitDemo (main)
$ cat welcome.txt
Welcome to the version control

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/1_Git-HOL/GitDemo (main)
$ git status
On branch main

No commits yet

Untracked files:
(use "git add <file>..." to include in what will be committed)
 welcome.txt

nothing added to commit but untracked files present (use "git add" to track)

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/1_Git-HOL/GitDemo (main)
$ git add welcome.txt
warning: in the working copy of 'welcome.txt', LF will be replaced by CRLF the next time Git touches it

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/1_Git-HOL/GitDemo (main)
$ git commit -m "adding welcome.txt"
[main (root-commit) e7e0184] adding welcome.txt
1 file changed, 1 insertion(+)
create mode 100644 welcome.txt

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/1_Git-HOL/GitDemo (main)
$ git status
On branch main
nothing to commit, working tree clean

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/1_Git-HOL/GitDemo (main)
$ git remote add origin https://github.com/ambrishkumar/my-demo.git

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/1_Git-HOL/GitDemo (main)
$ git remote -v
origin https://github.com/ambrishkumar/my-demo.git (fetch)
origin https://github.com/ambrishkumar/my-demo.git (push)

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/1_Git-HOL/GitDemo (main)
$ git pull origin main --allow-unrelated-histories
remote: Enumerating objects: 10, done.
remote: Counting objects: 100% (10/10), done.
remote: Compressing objects: 100% (7/7), done.
remote: Total 10 (delta 2), reused 4 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (10/10), 2.05 KiB | 20.00 KiB/s, done.
From https://github.com/ambrishkumar/my-demo

- branch main -> FETCH_HEAD
- [new_branch] main -> origin/main
  Merge made by the 'ort' strategy.
  README.md | 9 +++++++++
  app.js | 0
  index.html | 0
  style.css | 0
  4 files changed, 9 insertions(+)
  create mode 100644 README.md
  create mode 100644 app.js
  create mode 100644 index.html
  create mode 100644 style.css

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/1_Git-HOL/GitDemo (main)
$ git status
On branch main
nothing to commit, working tree clean

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/1_Git-HOL/GitDemo (main)
$ git push origin main
Counting objects: 100% (6/6), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (5/5), 554 bytes | 554.00 KiB/s, done.
Total 5 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/ambrishkumar/my-demo.git
a9df730..a9a5fa1 main -> main

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/1_Git-HOL/GitDemo (main)