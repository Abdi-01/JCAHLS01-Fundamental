# Introduce Git and Github
## ⏺️ Git
>Merupakan bagian dari SCM (Source Code Management) yang ada pada local storage/pc.

## ⏺️ Github
>Management program secara online. Sehingga, program/code itu bisa kita share secara umum/open-source.
-------------------------------------------------------
## Bagian pada git
1. Modified/Changes Session
   * Bagian dari git untuk merecord perubahan yang dilakukan pada file didalam project.
   * Record perubahan, record penambahan file dan record pengurangan file.
2. Staged Session
    * Bagian dari git untuk menyiapkan file apa saja yang akan kita simpan kedalam git.
3. Commited Session
   * Bagian dari git untuk menyimpan perubahan pada file project kita.
-------------------------------------------------------
## Konfigurasi Git
>Menghubungkan Git dengan Github :
- Konfigurasi username : git config --global user.name "username_github"
- Konfigurasi email : git config --global user.email "email@github"

>Menyiapkan project untuk menggunakan git
1. Inisialisasi git/mengaktifkan git pada project
   - git init
2. Melihat status git pada project
   - git status
3. Memindahkan ke staged session
   - git add nama_file : jika file spesifik
   - git add . : jika semua file
4. Menyimpan perubahan di commited session/kedalam git 
   - git commit -m "pesan mengenai perubahan yang dilakukan"
