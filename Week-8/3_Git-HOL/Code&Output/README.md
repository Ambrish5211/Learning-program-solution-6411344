# Git Hands-on 3

```bash
Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/3_Git-HOL/GitDemo
$ git init
Initialized empty Git repository in C:/Users/Ambrish Kumar/Desktop/Week8_Git/3_Git-HOL/GitDemo/.git/

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/3_Git-HOL/GitDemo (main)
$ echo "This is feature for main branch" >> feature.txt

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/3_Git-HOL/GitDemo (main)
$ git add feature.txt
warning: in the working copy of 'feature.txt', LF will be replaced by CRLF the next time Git touches it

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/3_Git-HOL/GitDemo (main)
$ git commit -m "Added feature in main branch"
[main (root-commit) 831a289] Added feature in main branch
1 file changed, 1 insertion(+)
create mode 100644 feature.txt

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/3_Git-HOL/GitDemo (main)
$ git branch GitNewBranch

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/3_Git-HOL/GitDemo (main)
$ git branch
GitNewBranch

- main

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/3_Git-HOL/GitDemo (main)
$ git checkout GitNewBranch
Switched to branch 'GitNewBranch'

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/3_Git-HOL/GitDemo (GitNewBranch)
$ echo "This is file1 for GitNewBranch" >> file1.txt

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/3_Git-HOL/GitDemo (GitNewBranch)
$ echo "This is file2 for GitNewBranch" >> file2.txt

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/3_Git-HOL/GitDemo (GitNewBranch)
$ git add file1.txt file2.txt
warning: in the working copy of 'file1.txt', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'file2.txt', LF will be replaced by CRLF the next time Git touches it

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/3_Git-HOL/GitDemo (GitNewBranch)
$ git commit -m "Added file1 and file2 in GitNewBranch"
[GitNewBranch 411b0ca] Added file1 and file2 in GitNewBranch
2 files changed, 2 insertions(+)
create mode 100644 file1.txt
create mode 100644 file2.txt

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/3_Git-HOL/GitDemo (GitNewBranch)
$ git status
On branch GitNewBranch
nothing to commit, working tree clean

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/3_Git-HOL/GitDemo (GitNewBranch)
$ git checkout main
Switched to branch 'main'

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/3_Git-HOL/GitDemo (main)
$ git diff GitNewBranch
diff --git a/file1.txt b/file1.txt
deleted file mode 100644
index 965a9bb..0000000
--- a/file1.txt
+++ /dev/null
@@ -1 +0,0 @@
-This is file1 for GitNewBranch
diff --git a/file2.txt b/file2.txt
deleted file mode 100644
index 7dfac86..0000000
--- a/file2.txt
+++ /dev/null

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/3_Git-HOL/GitDemo (main)
$ git merge GitNewBranch
Updating 831a289..411b0ca
Fast-forward
file1.txt | 1 +
file2.txt | 1 +
2 files changed, 2 insertions(+)
create mode 100644 file1.txt
create mode 100644 file2.txt

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/3_Git-HOL/GitDemo (main)
$ git log --oneline --graph --decorate

- 411b0ca (HEAD -> main, GitNewBranch) Added file1 and file2 in GitNewBranch
- 831a289 Added feature in main branch

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/3_Git-HOL/GitDemo (main)
$ git branch -d GitNewBranch
Deleted branch GitNewBranch (was 411b0ca).

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/3_Git-HOL/GitDemo (main)
$ git status
On branch main
nothing to commit, working tree clean

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/3_Git-HOL/GitDemo (main)