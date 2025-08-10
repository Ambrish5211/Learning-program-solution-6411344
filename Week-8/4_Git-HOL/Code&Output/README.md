# Git Hands-on 4

```bash
Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/4_Git-HOL/GitDemo
$ git init
Initialized empty Git repository in C:/Users/Ambrish Kumar/Desktop/Week8_Git/4_Git-HOL/GitDemo/.git/

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/4_Git-HOL/GitDemo (main)
$ echo "<message>Content from main branch</message>" > hello.xml

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/4_Git-HOL/GitDemo (main)
$ git add hello.xml
warning: in the working copy of 'hello.xml', LF will be replaced by CRLF the next time Git touches it

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/4_Git-HOL/GitDemo (main)
$ git commit -m "Initial commit on main"
[main (root-commit) a8fa374] Initial commit on main
1 file changed, 1 insertion(+)
create mode 100644 hello.xml

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/4_Git-HOL/GitDemo (main)
$ git checkout -b GitWork
Switched to a new branch 'GitWork'

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/4_Git-HOL/GitDemo (GitWork)
$ echo "<message>Updated content in GitWork</message>" > hello.xml

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/4_Git-HOL/GitDemo (GitWork)
$ git add hello.xml
warning: in the working copy of 'hello.xml', LF will be replaced by CRLF the next time Git touches it

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/4_Git-HOL/GitDemo (GitWork)
$ git commit -m "Updated hello.xml in GitWork branch"
[GitWork aa8abc6] Updated hello.xml in GitWork branch
1 file changed, 1 insertion(+), 1 deletion(-)

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/4_Git-HOL/GitDemo (GitWork)
$ git checkout main
Switched to branch 'main'

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/4_Git-HOL/GitDemo (main)
$ echo "<message>A conflicting update from main</message>" > hello.
xml

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/4_Git-HOL/GitDemo (main)
$ git add hello.xml
warning: in the working copy of 'hello.xml', LF will be replaced by CRLF the next time Git touches it

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/4_Git-HOL/GitDemo (main)
$ git commit -m "Conflicting update on main"
[main e1e22ad] Conflicting update on main
1 file changed, 1 insertion(+), 1 deletion(-)

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/4_Git-HOL/GitDemo (main)
$ git log --oneline --graph --decorate --all

- e1e22ad (HEAD -> main) Conflicting update on main
  | \* aa8abc6 (GitWork) Updated hello.xml in GitWork branch
  |/
- a8fa374 Initial commit on main

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/4_Git-HOL/GitDemo (main)
$ git merge GitWork
Auto-merging hello.xml
CONFLICT (content): Merge conflict in hello.xml
Automatic merge failed; fix conflicts and then commit the result.

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/4_Git-HOL/GitDemo (main|MERGING)
$ git add hello.xml

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/4_Git-HOL/GitDemo (main|MERGING)
$ git commit -m "Resolved merge conflict"
[main e6fa614] Resolved merge conflict

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/4_Git-HOL/GitDemo (main)
$ git branch -d GitWork
Deleted branch GitWork (was aa8abc6).

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/4_Git-HOL/GitDemo (main)
$ git log --oneline --graph --decorate --all

- e6fa614 (HEAD -> main) Resolved merge conflict
  |\
  | \* aa8abc6 Updated hello.xml in GitWork branch
- | e1e22ad Conflicting update on main
  |/
- a8fa374 Initial commit on main

Ambrish Kumar@DESKTOP-VPU42RD MINGW64 ~/Desktop/Week8_Git/4_Git-