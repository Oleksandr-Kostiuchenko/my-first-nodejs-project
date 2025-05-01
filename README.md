🧩 Practice Task 1: Create a Folder and Write a File
Створи функцію, яка:

Створює папку logs у поточному робочому каталозі (якщо її ще немає).

Записує у файл log.txt всередині цієї папки рядок з поточною датою та повідомленням "App started".

🧩 Practice Task 2: Merge Multiple Text Files
Створи функцію, яка:

Зчитує всі .txt файли з папки texts.

Об’єднує їх вміст у новий файл merged.txt у цій же папці.

Підказка: використовуй fs.readdir, fs.readFile, Array.prototype.join.

🧩 Practice Task 3: Rename All Files in a Folder
Створи функцію, яка:

Перейменовує всі файли в папці docs, додаючи префікс OLD\_ до імен файлів.

Наприклад: report.txt → OLD_report.txt

🧩 Practice Task 4: Check and Delete a File
Створи функцію, яка:

Перевіряє, чи існує файл temp.txt у папці src/files.

Якщо файл існує — видаляє його.

Підказка: використовуй fs.access для перевірки доступу.

🧩 Practice Task 5: Normalize and Print Path Info
Створи функцію, яка:

Приймає несправжній (невпорядкований) шлях до файлу (наприклад: './src/../src/files///test.txt').

Виводить:

нормалізований шлях

базову назву файлу

розширення

шлях до директорії
