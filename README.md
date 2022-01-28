# Grep Interview
#### Grep is a common command line tool used to search text in files.  Here we’ll implement a basic version of grep. The interview is open internet and you may implement it in any language you like.
<br>

 

 ---
 

## Instructions

1. Create a command line tool named `my_grep`. You should be able to run `my_grep` on the command line from any directory.
2. `my_grep` should take two arguments: the search text (a string) and the file or directory (specified as a path).  If a file is specified, `my_grep` should return all places the search text is used in that file. If a directory is specified, `my_grep` should return the same results but for all subfiles in that directory.
3. `my_grep` should return each found instance of the search term in the following format:

    ```
    <relative path to file>:<line_number>:<entire line>
    ```

    For example:

    ```
    texts/better_texts/one_more_directory/lost_souls.txt:776:complement, though it mate the faultless with the faulty. Of this
    ```


## Test Cases
All tests cases should be run from this directory.


**Input:**  
```
my_grep "warm weather" texts
```
**Output:**  
```
texts/better_texts/one_more_directory/lost_souls.txt:2703:When the warm weather had come, I set up my two columns in the open
```

---

**Input:**  
```
my_grep "laws of" texts/box_of_smiles.txt
```
**Output:**  
```
texts/box_of_smiles.txt:9:will have to check the laws of the country where you are located before
texts/box_of_smiles.txt:1413:1.D. The copyright laws of the place where you are located also govern
texts/box_of_smiles.txt:1416:check the laws of your country in addition to the terms of this
texts/box_of_smiles.txt:1437:  United States, you will have to check the laws of the country where
texts/box_of_smiles.txt:1614:501(c)(3) educational corporation organized under the laws of the
```

---

**Input:**  
```
my_grep "freedom" texts/old_texts
```
**Output:**  
```
texts/old_texts/no_extension:208:This moral freedom of the New England Quakers, touched as it was with
texts/old_texts/no_extension:371:freedom as the South is for slavery.... We must forget, _forgive_, and
texts/old_texts/no_extension:483:wider human freedom everywhere—stirred and deepened his whole nature.
texts/old_texts/no_extension:667:interpreter; next, upon “the good old cause” of freedom, not only in his
texts/old_texts/no_extension:797:                 Lose the freedom of the sod,
texts/old_texts/no_extension:2119:  For freedom and humanity is registered in heaven;
texts/old_texts/no_extension:2130: Rise again for home and freedom! set the battle in array!
```

---

**Input:**  
```
my_grep "https://www.pgdp.net" texts
```
**Output:**  
```
texts/old_texts/no_extension:22:             Team at https://www.pgdp.net (This file was produced from
texts/box_of_smiles.txt:24:             Team at https://www.pgdp.net (This file was produced from
texts/better_texts/one_more_directory/lost_souls.txt:22:             Team at https://www.pgdp.net/ for Project Gutenberg (This
```