"# relatorio-git-marco-antonio-e-joao-tavares" 
//  OBS: Copiamos e colamos os comandos do terminal Git CMD, para facilitar a visualização; 
    OBS 2: Utilizamos de um repositório já existente, com uma aplicação que automatiza o processo de compra de um macbook (apenas para testes, ele chega somente até o checkout)

C:\Users\ultre\Documents\Automations\applemacbookair.js>git log
commit 34d3640031c09eacf195376f9357f2b1dce979c0 (HEAD -> main, origin/main)
Author: Marco Hartz <marcoavhu@gmail.com>
Date:   Tue Mar 18 20:31:24 2025 -0300

    commit readme

commit f94f6413039769c126bf6e6f76b9aba033c414d7
Author: Marco Hartz <marcoavhu@gmail.com>
Date:   Tue Feb 18 23:46:15 2025 -0300

    clica botões até o checkout

commit 50810bd20f0e98252d2b4569f0062a81e501a263
Author: Marco Hartz <marcoavhu@gmail.com>
Date:   Sun Feb 16 23:50:47 2025 -0300

    click buttons till checkout

C:\Users\ultre\Documents\Automations\applemacbookair.js>git log --oneline
34d3640 (HEAD -> main, origin/main) commit readme
f94f641 clica botões até o checkout
50810bd click buttons till checkout

C:\Users\ultre\Documents\Automations\applemacbookair.js>git log --since=2.days
commit 34d3640031c09eacf195376f9357f2b1dce979c0 (HEAD -> main, origin/main)
Author: Marco Hartz <marcoavhu@gmail.com>
Date:   Tue Mar 18 20:31:24 2025 -0300

    commit readme

C:\Users\ultre\Documents\Automations\applemacbookair.js>git log –until=”2025-02-20”
fatal: ambiguous argument '–until=”2025-02-20”': unknown revision or path not in the working tree.
Use '--' to separate paths from revisions, like this:
'git <command> [<revision>...] -- [<file>...]'

C:\Users\ultre\Documents\Automations\applemacbookair.js>git log --until=”2025-02-20”
commit f94f6413039769c126bf6e6f76b9aba033c414d7
Author: Marco Hartz <marcoavhu@gmail.com>
Date:   Tue Feb 18 23:46:15 2025 -0300

    clica botões até o checkout

commit 50810bd20f0e98252d2b4569f0062a81e501a263
Author: Marco Hartz <marcoavhu@gmail.com>
Date:   Sun Feb 16 23:50:47 2025 -0300

    click buttons till checkout

C:\Users\ultre\Documents\Automations\applemacbookair.js>git log –-author=”Marco Hartz”
fatal: ambiguous argument '–-author=”Marco': unknown revision or path not in the working tree.
Use '--' to separate paths from revisions, like this:
'git <command> [<revision>...] -- [<file>...]'

C:\Users\ultre\Documents\Automations\applemacbookair.js>git log –-author=”Marco Hartz”
fatal: ambiguous argument '–-author=”Marco': unknown revision or path not in the working tree.
Use '--' to separate paths from revisions, like this:
'git <command> [<revision>...] -- [<file>...]'

C:\Users\ultre\Documents\Automations\applemacbookair.js>git log --author="Marco Hartz"
commit 34d3640031c09eacf195376f9357f2b1dce979c0 (HEAD -> main, origin/main)
Author: Marco Hartz <marcoavhu@gmail.com>
Date:   Tue Mar 18 20:31:24 2025 -0300

    commit readme

commit f94f6413039769c126bf6e6f76b9aba033c414d7
Author: Marco Hartz <marcoavhu@gmail.com>
Date:   Tue Feb 18 23:46:15 2025 -0300

    clica botões até o checkout

commit 50810bd20f0e98252d2b4569f0062a81e501a263
Author: Marco Hartz <marcoavhu@gmail.com>
Date:   Sun Feb 16 23:50:47 2025 -0300

    click buttons till checkout

C:\Users\ultre\Documents\Automations\applemacbookair.js>git log --graph
* commit 34d3640031c09eacf195376f9357f2b1dce979c0 (HEAD -> main, origin/main)
| Author: Marco Hartz <marcoavhu@gmail.com>
| Date:   Tue Mar 18 20:31:24 2025 -0300
|
|     commit readme
|
* commit f94f6413039769c126bf6e6f76b9aba033c414d7
| Author: Marco Hartz <marcoavhu@gmail.com>
| Date:   Tue Feb 18 23:46:15 2025 -0300
|
|     clica botões até o checkout
|
* commit 50810bd20f0e98252d2b4569f0062a81e501a263
  Author: Marco Hartz <marcoavhu@gmail.com>
  Date:   Sun Feb 16 23:50:47 2025 -0300

      click buttons till checkout

C:\Users\ultre\Documents\Automations\applemacbookair.js>git checkout 50810bd20f0e98252d2b4569f0062a81e501a263
Note: switching to '50810bd20f0e98252d2b4569f0062a81e501a263'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at 50810bd click buttons till checkout

// após executar o comando "git checkout 50810bd20f0e98252d2b4569f0062a81e501a263", o arquivo README.md que haviamos commitado por último, sumiu do repositório local.

C:\Users\ultre\Documents\Automations\applemacbookair.js>git checkout main
Previous HEAD position was 50810bd click buttons till checkout
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

// agora, executamos o comando "git checkout main", o arquivo README.md voltou ao repositório local.

